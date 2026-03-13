import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/types";
import ProgressBar from "./ProgressBar";

interface CourseCardProps {
  course: Course;
  showProgress?: boolean;
}

export default function CourseCard({ course, showProgress }: CourseCardProps) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute left-3 top-3 rounded-full bg-violet-600 px-2 py-1 text-xs font-medium text-white">
          {course.level}
        </div>
        <div className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-xs text-white">
          {course.duration}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <span className="text-xs font-medium uppercase tracking-wide text-violet-600">{course.category}</span>
        <h3 className="mt-1 line-clamp-2 text-lg font-semibold text-slate-900 group-hover:text-violet-600">
          {course.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-slate-600">{course.description}</p>
        <div className="mt-3 flex items-center gap-3 text-sm text-slate-500">
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {course.rating}
          </span>
          <span>{course.studentsCount.toLocaleString()} students</span>
        </div>
        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex items-center gap-2">
            <Image
              src={course.instructor.avatar}
              alt={course.instructor.name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="text-sm text-slate-600">{course.instructor.name}</span>
          </div>
          <span className="font-semibold text-violet-600">${course.price}</span>
        </div>
        {showProgress && course.progress !== undefined && (
          <div className="mt-3">
            <ProgressBar value={course.progress} showLabel />
          </div>
        )}
      </div>
    </Link>
  );
}
