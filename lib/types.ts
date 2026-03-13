export interface Instructor {
  id: string;
  name: string;
  avatar: string;
  title: string;
  rating: number;
  studentsCount: number;
}

export interface Lesson {
  id: string;
  title: string;
  description?: string;
  duration: string;
  videoUrl: string;
  isCompleted?: boolean;
  order: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  rating: number;
  studentsCount: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  instructor: Instructor;
  lessons: Lesson[];
  category: string;
  enrolled?: boolean;
  progress?: number;
}
