import React from "react";
import "./index.scss";
import ExerciseContainer from "./exercise-container";
import { Workout } from "../../../../type";
import { Draggable, Droppable } from "@hello-pangea/dnd";
interface IWorkoutProps {
    workout: Workout;
    index: number;
}
const WorkoutContainer: React.FC<IWorkoutProps> = ({ workout, index }) => {
    return (
        <Draggable draggableId={`workout-${workout.id}-${index}`} index={index}>
            {(provided) => (
                <div
                    className="workout-container"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className="workout-header ellipsis">
                        {workout.title}
                    </div>
                    <Droppable
                        droppableId={workout.id.toString()}
                        type="EXERCISE"
                    >
                        {(provided) => (
                            <div
                                className="exercises"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {workout.exercises.map((exercise, index) => (
                                    <ExerciseContainer
                                        key={exercise.id}
                                        exercise={exercise}
                                        index={index}
                                    />
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>
    );
};

export default WorkoutContainer;
