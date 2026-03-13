"use client";

import { useState, useRef } from "react";
import Link from "next/link";

const CATEGORIES = [
  "Web Development",
  "Programming",
  "Design",
  "Backend",
  "Data Science",
] as const;

interface LessonForm {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
}

export default function CreateCourseForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [lessons, setLessons] = useState<LessonForm[]>([]);
  const [isPublishing, setIsPublishing] = useState(false);
  const [published, setPublished] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnail(file);
      const reader = new FileReader();
      reader.onloadend = () => setThumbnailPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const addLesson = () => {
    setLessons((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title: "", duration: "", videoUrl: "" },
    ]);
  };

  const updateLesson = (id: string, field: keyof LessonForm, value: string) => {
    setLessons((prev) =>
      prev.map((l) => (l.id === id ? { ...l, [field]: value } : l))
    );
  };

  const removeLesson = (id: string) => {
    setLessons((prev) => prev.filter((l) => l.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPublishing(true);
    // Simulate publish - in a real app this would call an API
    await new Promise((r) => setTimeout(r, 800));
    setIsPublishing(false);
    setPublished(true);
  };

  if (published) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-12 text-center">
        <div className="rounded-xl border border-slate-200 bg-white p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">Course Published!</h2>
          <p className="mt-2 text-slate-600">
            Your course &quot;{title || "Untitled"}&quot; has been published to the marketplace.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/instructor"
              className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-violet-700"
            >
              Back to Dashboard
            </Link>
            <button
              type="button"
              onClick={() => setPublished(false)}
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Create Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Basic Information</h2>
          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-slate-700">
                Course Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Complete React Masterclass"
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-slate-700">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                placeholder="Describe what students will learn..."
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                required
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-slate-700">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                required
              >
                <option value="">Select a category</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Course Thumbnail</h2>
          <div className="mt-4">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleThumbnailChange}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className={`flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed px-6 py-12 transition-colors ${
                thumbnailPreview
                  ? "border-slate-200 bg-slate-50 hover:bg-slate-100"
                  : "border-slate-300 bg-slate-50 hover:border-violet-400 hover:bg-violet-50/50"
              }`}
            >
              {thumbnailPreview ? (
                <>
                  <img
                    src={thumbnailPreview}
                    alt="Thumbnail preview"
                    className="max-h-48 rounded-lg object-cover"
                  />
                  <p className="mt-2 text-sm text-slate-600">{thumbnail?.name}</p>
                  <p className="text-xs text-slate-500">Click to change</p>
                </>
              ) : (
                <>
                  <svg
                    className="h-12 w-12 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="mt-2 text-sm text-slate-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-500">PNG, JPG up to 2MB</p>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Lessons</h2>
              <p className="mt-1 text-sm text-slate-600">Add lessons to your course.</p>
            </div>
            <button
              type="button"
              onClick={addLesson}
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-700"
            >
              + Add Lesson
            </button>
          </div>
          {lessons.length === 0 ? (
            <div className="mt-6 rounded-lg border-2 border-dashed border-slate-200 p-8 text-center">
              <p className="text-slate-500">No lessons added yet</p>
              <button
                type="button"
                onClick={addLesson}
                className="mt-2 text-sm font-medium text-violet-600 hover:text-violet-700"
              >
                Add your first lesson
              </button>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {lessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  className="rounded-lg border border-slate-200 bg-slate-50/50 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-500">
                          Lesson {index + 1} Title
                        </label>
                        <input
                          type="text"
                          value={lesson.title}
                          onChange={(e) => updateLesson(lesson.id, "title", e.target.value)}
                          placeholder="e.g. Introduction to React"
                          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                        />
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-medium text-slate-500">Duration</label>
                          <input
                            type="text"
                            value={lesson.duration}
                            onChange={(e) => updateLesson(lesson.id, "duration", e.target.value)}
                            placeholder="e.g. 15:30"
                            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-500">Video URL</label>
                          <input
                            type="url"
                            value={lesson.videoUrl}
                            onChange={(e) => updateLesson(lesson.id, "videoUrl", e.target.value)}
                            placeholder="https://..."
                            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeLesson(lesson.id)}
                      className="shrink-0 rounded-lg p-2 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600"
                      title="Remove lesson"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isPublishing}
            className="rounded-xl bg-violet-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-violet-700 disabled:opacity-70"
          >
            {isPublishing ? "Publishing..." : "Publish Course"}
          </button>
          <Link
            href="/instructor"
            className="rounded-xl border border-slate-300 px-8 py-3 font-semibold text-slate-700 hover:bg-slate-50"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
