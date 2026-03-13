import { placeholderCourses } from "@/lib/data";
import CourseCard from "@/components/CourseCard";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-3xl font-bold text-slate-900">Course Marketplace</h1>
          <p className="mt-2 text-slate-600">
            Explore {placeholderCourses.length} courses and find the perfect one for you
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
