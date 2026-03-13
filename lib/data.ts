import { Course, Lesson } from "./types";

export const placeholderCourses: Course[] = [
  {
    id: "1",
    title: "Complete React & Next.js Masterclass",
    description: "Build modern web applications with React and Next.js. Learn hooks, server components, and full-stack development.",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    price: 49.99,
    rating: 4.8,
    studentsCount: 12450,
    level: "Intermediate",
    duration: "12h 30m",
    category: "Web Development",
    instructor: {
      id: "i1",
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      title: "Senior React Developer",
      rating: 4.9,
      studentsCount: 45000,
    },
    lessons: [
      { id: "l1", title: "Introduction to React", description: "Get started with React basics, JSX syntax, and creating your first component. Understand the virtual DOM and React's declarative approach to building UIs.", duration: "15:30", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", order: 1 },
      { id: "l2", title: "Components & Props", description: "Learn how to build reusable components and pass data using props. Master component composition and prop drilling patterns.", duration: "22:15", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", order: 2 },
      { id: "l3", title: "Hooks Deep Dive", description: "Explore useState, useEffect, and custom hooks. Understand how hooks revolutionize state management and side effects in functional components.", duration: "35:20", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", order: 3 },
      { id: "l4", title: "Next.js App Router", description: "Build full-stack apps with the Next.js App Router. Learn about server components, routing, and data fetching patterns.", duration: "28:45", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", order: 4 },
    ],
    enrolled: true,
    progress: 50,
  },
  {
    id: "2",
    title: "TypeScript for Modern Developers",
    description: "Master TypeScript from basics to advanced. Learn type safety, generics, and building scalable applications.",
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
    price: 39.99,
    rating: 4.7,
    studentsCount: 8920,
    level: "Beginner",
    duration: "8h 15m",
    category: "Programming",
    instructor: {
      id: "i2",
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      title: "TypeScript Expert",
      rating: 4.8,
      studentsCount: 28000,
    },
    lessons: [
      { id: "l5", title: "TypeScript Basics", duration: "18:00", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", order: 1 },
      { id: "l6", title: "Interfaces & Types", duration: "25:30", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", order: 2 },
      { id: "l7", title: "Generics", duration: "32:10", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", order: 3 },
    ],
  },
  {
    id: "3",
    title: "Tailwind CSS from Zero to Hero",
    description: "Create beautiful, responsive designs with Tailwind CSS. Master utility-first CSS and build stunning UIs.",
    thumbnail: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=250&fit=crop",
    price: 29.99,
    rating: 4.9,
    studentsCount: 15600,
    level: "Beginner",
    duration: "6h 45m",
    category: "Design",
    instructor: {
      id: "i3",
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      title: "UI/UX Designer",
      rating: 4.9,
      studentsCount: 32000,
    },
    lessons: [
      { id: "l8", title: "Getting Started", duration: "12:00", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", order: 1 },
      { id: "l9", title: "Utility Classes", duration: "28:20", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", order: 2 },
      { id: "l10", title: "Responsive Design", duration: "24:15", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", order: 3 },
    ],
    enrolled: true,
    progress: 100,
  },
  {
    id: "4",
    title: "Node.js Backend Development",
    description: "Build scalable backend services with Node.js and Express. REST APIs, authentication, and database integration.",
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
    price: 54.99,
    rating: 4.6,
    studentsCount: 6780,
    level: "Advanced",
    duration: "15h 20m",
    category: "Backend",
    instructor: {
      id: "i4",
      name: "David Park",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      title: "Backend Architect",
      rating: 4.7,
      studentsCount: 19000,
    },
    lessons: [
      { id: "l11", title: "Node.js Fundamentals", duration: "20:00", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", order: 1 },
      { id: "l12", title: "Express.js Setup", duration: "18:30", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", order: 2 },
      { id: "l13", title: "REST API Design", duration: "40:15", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", order: 3 },
    ],
  },
  {
    id: "5",
    title: "Python for Data Science",
    description: "Learn data analysis, visualization, and machine learning with Python. Pandas, NumPy, and Matplotlib.",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
    price: 44.99,
    rating: 4.8,
    studentsCount: 22100,
    level: "Beginner",
    duration: "14h 00m",
    category: "Data Science",
    instructor: {
      id: "i5",
      name: "Alex Thompson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      title: "Data Scientist",
      rating: 4.9,
      studentsCount: 55000,
    },
    lessons: [
      { id: "l14", title: "Python Basics", duration: "25:00", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", order: 1 },
      { id: "l15", title: "Pandas Essentials", duration: "35:20", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", order: 2 },
      { id: "l16", title: "Data Visualization", duration: "28:40", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", order: 3 },
    ],
    enrolled: true,
    progress: 25,
  },
];

export function getCourseById(id: string): Course | undefined {
  return placeholderCourses.find((c) => c.id === id);
}

export function getLessonById(lessonId: string) {
  for (const course of placeholderCourses) {
    const lesson = course.lessons.find((l) => l.id === lessonId);
    if (lesson) {
      return { lesson, course };
    }
  }
  return null;
}

export const myEnrolledCourses = placeholderCourses.filter((c) => c.enrolled);
