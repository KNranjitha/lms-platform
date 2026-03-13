"use client";

import { useCallback, useEffect, useState } from "react";
import type { Course, Lesson } from "@/lib/types";
import VideoPlayer from "./VideoPlayer";
import LessonSidebar from "./LessonSidebar";

const STORAGE_KEY = "lms-completed-lessons";

function getCompletedFromStorage(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as string[];
      return new Set(parsed);
    }
  } catch {
    /* ignore */
  }
  return new Set();
}

function saveCompletedToStorage(ids: Set<string>) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
  } catch {
    /* ignore */
  }
}

interface LessonPlayerProps {
  lesson: Lesson;
  course: Course;
}

export default function LessonPlayer({ lesson, course }: LessonPlayerProps) {
  const [completedLessonIds, setCompletedLessonIds] = useState<Set<string>>(getCompletedFromStorage);

  const isCompleted = completedLessonIds.has(lesson.id);

  const toggleComplete = useCallback(() => {
    setCompletedLessonIds((prev) => {
      const next = new Set(prev);
      if (next.has(lesson.id)) {
        next.delete(lesson.id);
      } else {
        next.add(lesson.id);
      }
      saveCompletedToStorage(next);
      return next;
    });
  }, [lesson.id]);

  useEffect(() => {
    setCompletedLessonIds(getCompletedFromStorage());
  }, [lesson.id]);

  const description = lesson.description ?? "Watch this lesson to learn key concepts. Complete the video to mark it as done and track your progress.";

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 p-6 lg:flex-row">
      <div className="flex-1">
        <VideoPlayer src={lesson.videoUrl} title={lesson.title} />
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">{lesson.title}</h2>
          <p className="mt-2 text-slate-600">{description}</p>
          <button
            type="button"
            onClick={toggleComplete}
            className={`mt-4 flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
              isCompleted
                ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {isCompleted ? (
              <>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Completed
              </>
            ) : (
              <>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Mark as completed
              </>
            )}
          </button>
        </div>
      </div>
      <LessonSidebar
        lessons={course.lessons}
        courseId={course.id}
        currentLessonId={lesson.id}
        courseTitle={course.title}
        completedLessonIds={completedLessonIds}
      />
    </div>
  );
}
