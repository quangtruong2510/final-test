import { Exercise, DailyWorkouts, Workout } from "../type"

export const DummyExerciseData1: Exercise[] = [
    { id: '101', name: 'Exercise A', setInformation: '50 lb x 5, 60 lb x 5, 70 lb x 5', repetitions: 1 },
    { id: '102', name: 'Exercise B', setInformation: '40 bl x 10 ', repetitions: 1 },
    { id: '103', name: 'Exercise C', setInformation: '40 bl x 10 ', repetitions: 2 },
    { id: '104', name: 'Exercise D', setInformation: '40 bl x 10 ', repetitions: 3 }
];

export const DummyExerciseData2: Exercise[] = [
    { id: '11', name: 'Exercise A', setInformation: '50 lb x 5, 60 lb x 5, 70 lb x 5', repetitions: 1 },
    { id: '12', name: 'Exercise B', setInformation: '40 bl x 10 ', repetitions: 1 },
    { id: '13', name: 'Exercise C', setInformation: '40 bl x 10 ', repetitions: 2 },
    { id: '14', name: 'Exercise D', setInformation: '40 bl x 10 ', repetitions: 3 }
];

export const DummyExerciseData3: Exercise[] = [
    { id: '15', name: 'Exercise A', setInformation: '50 lb x 5, 60 lb x 5, 70 lb x 5', repetitions: 1 },
    { id: '16', name: 'Exercise B', setInformation: '40 bl x 10 ', repetitions: 1 },
    { id: '17', name: 'Exercise C', setInformation: '40 bl x 10 ', repetitions: 2 },
    { id: '18', name: 'Exercise D', setInformation: '40 bl x 10 ', repetitions: 3 }
];

export const DummyExerciseData4: Exercise[] = [
    { id: '19', name: 'Exercise A', setInformation: '50 lb x 5, 60 lb x 5, 70 lb x 5', repetitions: 1 },
    { id: '20', name: 'Exercise B', setInformation: '40 bl x 10 ', repetitions: 1 },
    { id: '21', name: 'Exercise C', setInformation: '40 bl x 10 ', repetitions: 2 },
    { id: '22', name: 'Exercise D', setInformation: '40 bl x 10 ', repetitions: 3 }
];

export const DummyExerciseData5: Exercise[] = [
    { id: '23', name: 'Exercise A', setInformation: '50 lb x 5, 60 lb x 5, 70 lb x 5', repetitions: 1 },
    { id: '24', name: 'Exercise B', setInformation: '40 bl x 10 ', repetitions: 1 },
    { id: '25', name: 'Exercise C', setInformation: '40 bl x 10 ', repetitions: 2 },
    { id: '26', name: 'Exercise D', setInformation: '40 bl x 10 ', repetitions: 3 }
];

export const DummyExerciseData6: Exercise[] = [
    { id: '27', name: 'Exercise A', setInformation: '50 lb x 5, 60 lb x 5, 70 lb x 5', repetitions: 1 },
    { id: '28', name: 'Exercise B', setInformation: '40 bl x 10 ', repetitions: 1 },
    { id: '29', name: 'Exercise C', setInformation: '40 bl x 10 ', repetitions: 2 },
    { id: '30', name: 'Exercise D', setInformation: '40 bl x 10 ', repetitions: 3 }
];

export const DummyExerciseData7: Exercise[] = [
    { id: '31', name: 'Exercise A', setInformation: '50 lb x 5, 60 lb x 5, 70 lb x 5', repetitions: 1 },
    { id: '32', name: 'Exercise B', setInformation: '40 bl x 10 ', repetitions: 1 },
    { id: '33', name: 'Exercise C', setInformation: '40 bl x 10 ', repetitions: 2 },
];

export const DummyExerciseData8: Exercise[] = [
    { id: '34', name: 'Exercise A', setInformation: '50 lb x 5, 60 lb x 5, 70 lb x 5', repetitions: 1 },
    { id: '35', name: 'Exercise B', setInformation: '40 bl x 10 ', repetitions: 1 },
    { id: '36', name: 'Exercise C', setInformation: '40 bl x 10 ', repetitions: 2 },
];

export const DummyWorkoutData: Workout[] = [
    { id: '111', title: 'Leg Day over load dataaaa', exercises: DummyExerciseData1 },
    { id: '112', title: 'ARM Day', exercises: DummyExerciseData2 }
];

export const DummyWorkoutData2: Workout[] = [
    { id: '113', title: 'Leg hand', exercises: DummyExerciseData3 },
    { id: '114', title: 'ARM Day 2', exercises: DummyExerciseData4 }
];

export const DummyWorkoutData3: Workout[] = [
    { id: '115', title: 'Leg hand', exercises: DummyExerciseData5 },
];

export const DummyWorkoutData4: Workout[] = [
    { id: '116', title: 'Leg hand', exercises: DummyExerciseData6 },
];

export const DummyWorkoutData5: Workout[] = [
    { id: '117', title: 'Leg hand', exercises: DummyExerciseData7 },
];

export const DummyWorkoutData6: Workout[] = [
    { id: '118', title: 'Leg hand', exercises: DummyExerciseData8 },
];

export const EmptyWorkoutData: Workout[] = [];

export const DummyWeeklyWorkoutsData: DailyWorkouts[] = [
    { id: '1', date: '2024-11-18', workouts: EmptyWorkoutData },
    { id: '2', date: '2024-11-19', workouts: DummyWorkoutData3 },
    { id: '3', date: '2024-11-20', workouts: DummyWorkoutData },
    { id: '4', date: '2024-11-21', workouts: DummyWorkoutData4 },
    { id: '5', date: '2024-11-22', workouts: DummyWorkoutData2 },
    { id: '6', date: '2024-11-23', workouts: DummyWorkoutData5 },
    { id: '7', date: '2024-11-24', workouts: DummyWorkoutData6 }
];

export default DummyWeeklyWorkoutsData
