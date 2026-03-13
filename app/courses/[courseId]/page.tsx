import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourseById, placeholderCourses } from "@/lib/data";
import CourseCard from "@/components/CourseCard";
import ProgressBar from "@/components/ProgressBar";

export default async function CourseDetailPage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const course = getCourseById(courseId);

  if (!course) notFound();

  const relatedCourses = placeholderCourses.filter((c) => c.id !== courseId && c.category === course.category);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <nav className="mb-6 text-sm text-slate-500">
            <Link href="/courses" className="hover:text-violet-600">
              Courses
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">{course.title}</span>
          </nav>
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex-1">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-200">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute left-4 top-4 rounded-full bg-violet-600 px-3 py-1 text-sm font-medium text-white">
                  {course.level}
                </div>
              </div>
              <h1 className="mt-6 text-3xl font-bold text-slate-900">{course.title}</h1>
              <p className="mt-4 text-lg text-slate-600">{course.description}</p>
              <div className="mt-6">
                <h3 className="font-semibold text-slate-900">What you&apos;ll learn</h3>
                <ul className="mt-2 space-y-2 text-slate-600">
                  {course.lessons.slice(0, 5).map((lesson) => (
                    <li key={lesson.id} className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {lesson.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-slate-900">Course Content</h3>
                <div className="mt-3 space-y-2">
                  {course.lessons
                    .sort((a, b) => a.order - b.order)
                    .map((lesson, index) => (
                      <div
                        key={lesson.id}
                        className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-medium text-slate-600">
                            {index + 1}
                          </span>
                          <span className="text-slate-700">{lesson.title}</span>
                        </div>
                        <span className="text-sm text-slate-500">{lesson.duration}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <aside className="w-full lg:w-96">
              <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="text-xs font-medium uppercase tracking-wide text-violet-600">{course.category}</span>
                <p className="mt-2 text-2xl font-bold text-slate-900">${course.price}</p>
                <div className="mt-4 flex items-center gap-3">
                  <Image
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">{course.instructor.name}</p>
                    <p className="text-sm text-slate-500">{course.instructor.title}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-4 text-sm text-slate-600">
                  <span className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {course.rating} ({course.studentsCount.toLocaleString()} students)
                  </span>
                </div>
                {course.enrolled && course.progress !== undefined && (
                  <div className="mt-4">
                    <ProgressBar value={course.progress} showLabel size="lg" />
                  </div>
                )}
                <div className="mt-6 flex gap-3">
                  {course.enrolled ? (
                    <Link
                      href={`/learn/${course.lessons[0]?.id}`}
                      className="flex-1 rounded-xl bg-violet-600 py-3 text-center font-semibold text-white transition-colors hover:bg-violet-700"
                    >
                      Continue Learning
                    </Link>
                  ) : (
                    <button className="flex-1 rounded-xl bg-violet-600 py-3 font-semibold text-white transition-colors hover:bg-violet-700">
                      Enroll Now
                    </button>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      {relatedCourses.length > 0 && (
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-bold text-slate-900">Related Courses</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCourses.slice(0, 3).map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
