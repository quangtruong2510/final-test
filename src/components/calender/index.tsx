import React, { useState } from "react";
import "./index.scss";
import DayContainer from "./day-container";
import { DummyWeeklyWorkoutsData } from "../../utils/constant";
import { DailyWorkouts } from "../../type";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";

const Calendar: React.FC = () => {
    const [weeklyWorkouts, setWeeklyWorkouts] = useState(
        DummyWeeklyWorkoutsData
    );

    const onDragEnd = (result: DropResult) => {
        const { source, destination, type } = result;
    
        // Nếu không có điểm đến, kết thúc
        if (!destination) return;
    
        // Nếu vị trí không thay đổi
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }
    
        const updatedWorkouts = [...weeklyWorkouts];
    
        if (type === "WORKOUT") {
            // Di chuyển workout giữa các ngày
            const sourceDayIndex = updatedWorkouts.findIndex(
                (day) => day.id === source.droppableId
            );
            const destinationDayIndex = updatedWorkouts.findIndex(
                (day) => day.id === destination.droppableId
            );
    
            if (sourceDayIndex === -1 || destinationDayIndex === -1) return;
    
            const sourceDay = updatedWorkouts[sourceDayIndex];
            const destinationDay = updatedWorkouts[destinationDayIndex];
    
            // Lấy workout từ ngày nguồn
            const [movedWorkout] = sourceDay.workouts.splice(source.index, 1);
    
            // Thêm workout vào ngày đích
            destinationDay.workouts.splice(destination.index, 0, movedWorkout);
    
            setWeeklyWorkouts(updatedWorkouts);
        } else if (type === "EXERCISE") {
            // Di chuyển exercise trong workout
            const sourceWorkoutId = source.droppableId.split("-")[1];
            const destinationWorkoutId = destination.droppableId.split("-")[1];
    
            const sourceDayIndex = updatedWorkouts.findIndex((day) =>
                day.workouts.some((w) => w.id === sourceWorkoutId)
            );
            const destinationDayIndex = updatedWorkouts.findIndex((day) =>
                day.workouts.some((w) => w.id === destinationWorkoutId)
            );
    
            if (sourceDayIndex === -1 || destinationDayIndex === -1) return;
    
            const sourceWorkout = updatedWorkouts[sourceDayIndex].workouts.find(
                (w) => w.id === sourceWorkoutId
            );
            const destinationWorkout = updatedWorkouts[destinationDayIndex].workouts.find(
                (w) => w.id === destinationWorkoutId
            );
    
            if (!sourceWorkout || !destinationWorkout) return;
    
            const sourceExercises = Array.from(sourceWorkout.exercises);
            const [movedExercise] = sourceExercises.splice(source.index, 1);
    
            if (source.droppableId === destination.droppableId) {
                // Kéo thả trong cùng workout
                sourceExercises.splice(destination.index, 0, movedExercise);
                sourceWorkout.exercises = sourceExercises;
            } else {
                // Kéo thả giữa hai workout khác nhau
                const destinationExercises = Array.from(destinationWorkout.exercises);
                destinationExercises.splice(destination.index, 0, movedExercise);
    
                sourceWorkout.exercises = sourceExercises;
                destinationWorkout.exercises = destinationExercises;
            }
    
            setWeeklyWorkouts(updatedWorkouts);
        }
    };
    
    
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="calendar">
                {weeklyWorkouts.map((dailyWorkouts: DailyWorkouts) => (
                    <DayContainer
                        key={dailyWorkouts.id}
                        dailyWorkouts={dailyWorkouts}
                        dayIndex={dailyWorkouts.id}
                    />
                ))}
            </div>
        </DragDropContext>
    );
};

export default Calendar;
