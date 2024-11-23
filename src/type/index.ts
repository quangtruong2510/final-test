export interface Exercise {
    id: string;
    name: string;
    setInformation: string;
    repetitions: number
  }
  
export interface Workout {
    id: string;
    title: string;
    exercises: Exercise[];
}

export interface DailyWorkouts{
    id: string;
    date: string;
    workouts: Workout[];
}




