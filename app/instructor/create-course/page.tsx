import Link from "next/link";
import CreateCourseForm from "@/components/CreateCourseForm";

export default function CreateCoursePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <nav className="mb-6 text-sm text-slate-500">
            <Link href="/instructor" className="hover:text-violet-600">
              Instructor
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Create Course</span>
          </nav>
          <h1 className="text-3xl font-bold text-slate-900">Create New Course</h1>
          <p className="mt-2 text-slate-600">Add a new course to the marketplace</p>
        </div>
      </div>
      <CreateCourseForm />
    </div>
  );
}
