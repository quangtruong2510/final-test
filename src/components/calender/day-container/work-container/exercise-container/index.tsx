import React from "react";
import "./index.scss";
import { Exercise } from "../../../../../type";
import { Draggable } from "@hello-pangea/dnd";
interface IExerciseProps {
    exercise: Exercise;
    index: number;
}
const ExerciseContainer: React.FC<IExerciseProps> = ({ exercise, index }) => {
    return (
        <Draggable
            draggableId={`exercise-${exercise.id}-${index}`}
            index={index}
        >
            {(provided) => (
                <div
                    className="exercise-container"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className="exercise-name ellipsis">
                        {exercise.name}
                    </div>
                    <div className="set-group">
                        <div className="exercise-reps">
                            {exercise.repetitions + "x"}
                        </div>
                        <div className="exercise-sets ellipsis">
                            {exercise.setInformation}
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    );
};
export default ExerciseContainer;
