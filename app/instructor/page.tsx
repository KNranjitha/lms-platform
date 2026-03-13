import Link from "next/link";
import { placeholderCourses } from "@/lib/data";
import DashboardStats from "@/components/DashboardStats";

export default function InstructorDashboardPage() {
  const myCourses = placeholderCourses.slice(0, 2);
  const totalStudents = myCourses.reduce((sum, c) => sum + c.studentsCount, 0);
  const avgRating = myCourses.length > 0
    ? (myCourses.reduce((sum, c) => sum + c.rating, 0) / myCourses.length).toFixed(1)
    : "0";

  const stats = [
    {
      label: "Total Courses",
      value: myCourses.length,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      label: "Total Students",
      value: totalStudents.toLocaleString(),
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      label: "Average Rating",
      value: avgRating,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
    {
      label: "Total Revenue",
      value: "$12,450",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 py-12 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Instructor Dashboard</h1>
            <p className="mt-2 text-slate-600">Manage your courses and track performance</p>
          </div>
          <Link
            href="/instructor/create-course"
            className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-violet-700"
          >
            Create New Course
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <DashboardStats stats={stats} />
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">My Courses</h2>
          {myCourses.length > 0 ? (
            <div className="mt-6 space-y-4">
              {myCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{course.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {course.studentsCount.toLocaleString()} students · {course.rating} rating
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/courses/${course.id}`}
                      className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                    >
                      View
                    </Link>
                    <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-xl border-2 border-dashed border-slate-200 bg-white p-12 text-center">
              <p className="text-slate-600">You haven&apos;t created any courses yet.</p>
              <Link
                href="/instructor/create-course"
                className="mt-4 inline-block rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white hover:bg-violet-700"
              >
                Create Your First Course
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
