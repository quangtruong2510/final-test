import React from "react";
import "./index.scss";
import WorkoutContainer from "./work-container";
import { DailyWorkouts } from "../../../type";
// import { DailyWorkouts, Workout } from "../../../type";

// import { isToday } from "../../../utils/dateUtils";
import { Droppable } from "@hello-pangea/dnd";
import { getDayOfWeek } from "../../../utils/dateUtils";

interface DayContainerProps {
    dailyWorkouts: DailyWorkouts;
    dayIndex: string;
}

const DayContainer: React.FC<DayContainerProps> = ({
    dailyWorkouts,
    dayIndex,
}) => {
    return (
        <Droppable droppableId={dayIndex.toString()} type="WORKOUT">
            {(provided) => (
                <div className="day-layout">
                    <div>{getDayOfWeek(dailyWorkouts.date)}</div>
                    <div
                        className="day-container"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <div className="day-header">
                            <span className="day-number">
                                {new Date(dailyWorkouts.date).getDate()}
                            </span>
                        </div>
                        <div className="workouts">
                            {dailyWorkouts.workouts.map((workout, index) => (
                                <WorkoutContainer
                                    key={workout.id}
                                    workout={workout}
                                    index={index}
                                />
                            ))}
                            {provided.placeholder}
                        </div>
                    </div>
                </div>
            )}
        </Droppable>
    );
};

export default DayContainer;
