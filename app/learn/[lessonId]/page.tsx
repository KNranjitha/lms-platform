import Link from "next/link";
import { notFound } from "next/navigation";
import { getLessonById } from "@/lib/data";
import LessonPlayer from "@/components/LessonPlayer";

export default async function LessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const result = getLessonById(lessonId);

  if (!result) notFound();

  const { lesson, course } = result;

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
        <div className="flex items-center justify-between px-6 py-4">
          <Link
            href={`/courses/${course.id}`}
            className="text-sm font-medium text-violet-600 hover:text-violet-700"
          >
            ← Back to {course.title}
          </Link>
          <h1 className="truncate text-lg font-semibold text-slate-900">{lesson.title}</h1>
          <div className="w-24" />
        </div>
      </header>
      <LessonPlayer lesson={lesson} course={course} />
    </div>
  );
}
