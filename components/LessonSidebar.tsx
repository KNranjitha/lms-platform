"use client";

import Link from "next/link";
import type { Lesson } from "@/lib/types";

interface LessonSidebarProps {
  lessons: Lesson[];
  courseId: string;
  currentLessonId: string;
  courseTitle: string;
  completedLessonIds?: Set<string>;
}

export default function LessonSidebar({ lessons, courseId, currentLessonId, courseTitle, completedLessonIds }: LessonSidebarProps) {
  const sortedLessons = [...lessons].sort((a, b) => a.order - b.order);

  return (
    <aside className="w-full lg:w-80 shrink-0">
      <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">Course Content</h3>
        <p className="mb-4 line-clamp-2 text-sm font-medium text-slate-900">{courseTitle}</p>
        <nav className="flex flex-col gap-1">
          {sortedLessons.map((lesson, index) => {
            const isActive = lesson.id === currentLessonId;
            return (
              <Link
                key={lesson.id}
                href={`/learn/${lesson.id}`}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  isActive ? "bg-violet-100 text-violet-700 font-medium" : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-medium ${
                    isActive ? "bg-violet-600 text-white" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate">{lesson.title}</p>
                  <p className="text-xs text-slate-400">{lesson.duration}</p>
                </div>
                {(lesson.isCompleted || completedLessonIds?.has(lesson.id)) && (
                  <svg className="h-5 w-5 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
