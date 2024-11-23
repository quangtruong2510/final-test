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
        const { source, destination } = result;

        if (!destination) return;

        // If source and destination are the same (no move)
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

        const sourceDayId = source.droppableId;
        const destinationDayId = destination.droppableId;

        const sourceDayIndex = weeklyWorkouts.findIndex(
            (day) => day.id === sourceDayId
        );
        const destinationDayIndex = weeklyWorkouts.findIndex(
            (day) => day.id === destinationDayId
        );

        // If source or destination day not found, return
        if (sourceDayIndex === -1 || destinationDayIndex === -1) return;

        const updatedWorkouts = [...weeklyWorkouts];
        const sourceWorkouts = updatedWorkouts[sourceDayIndex].workouts;
        let destinationWorkouts = updatedWorkouts[destinationDayIndex].workouts;

        // Ensure destination day has a workout array initialized if it is empty
        if (!destinationWorkouts) {
            destinationWorkouts = [];
        }

        if (
            source.droppableId === destination.droppableId &&
            source.index !== destination.index
        ) {
            // Move within the same day (same workout)
            const [movedWorkout] = sourceWorkouts.splice(source.index, 1);
            sourceWorkouts.splice(destination.index, 0, movedWorkout);
        } else {
            // Move workout between days
            const [movedWorkout] = sourceWorkouts.splice(source.index, 1);

            // If the destination day has no workouts, we initialize it first
            if (destinationWorkouts === undefined) {
                destinationWorkouts = [];
            }

            destinationWorkouts.splice(destination.index, 0, movedWorkout);
            updatedWorkouts[destinationDayIndex].workouts = destinationWorkouts;
        }

        updatedWorkouts[sourceDayIndex].workouts = sourceWorkouts;
        setWeeklyWorkouts(updatedWorkouts);
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
