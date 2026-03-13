import Link from "next/link";
import { myEnrolledCourses } from "@/lib/data";
import CourseCard from "@/components/CourseCard";
import DashboardStats from "@/components/DashboardStats";

export default function DashboardPage() {
  const totalCourses = myEnrolledCourses.length;
  const completedCourses = myEnrolledCourses.filter((c) => c.progress === 100).length;
  const inProgressCourses = myEnrolledCourses.filter((c) => c.progress && c.progress > 0 && c.progress < 100).length;
  const avgProgress =
    totalCourses > 0
      ? Math.round(
          myEnrolledCourses.reduce((sum, c) => sum + (c.progress ?? 0), 0) / totalCourses
        )
      : 0;

  const stats = [
    {
      label: "Enrolled Courses",
      value: totalCourses,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      label: "Completed",
      value: completedCourses,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: "In Progress",
      value: inProgressCourses,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: "Avg. Progress",
      value: `${avgProgress}%`,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-3xl font-bold text-slate-900">My Dashboard</h1>
          <p className="mt-2 text-slate-600">Track your learning progress and continue your courses</p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <DashboardStats stats={stats} />
        <div className="mt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">My Courses</h2>
            <Link href="/courses" className="text-violet-600 font-medium hover:text-violet-700">
              Browse more courses
            </Link>
          </div>
          {myEnrolledCourses.length > 0 ? (
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {myEnrolledCourses.map((course) => (
                <CourseCard key={course.id} course={course} showProgress />
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-xl border-2 border-dashed border-slate-200 bg-white p-12 text-center">
              <p className="text-slate-600">You haven&apos;t enrolled in any courses yet.</p>
              <Link
                href="/courses"
                className="mt-4 inline-block rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white hover:bg-violet-700"
              >
                Browse Courses
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
