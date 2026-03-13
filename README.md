# LearnHub - Learning Management System

A modern LMS platform built with Next.js 14+ (App Router), TypeScript, and Tailwind CSS — similar to Kodemy.

## Tech Stack

- **Next.js 16** with App Router
- **TypeScript**
- **Tailwind CSS 4**
- **React 19**

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
app/
├── page.tsx                    # Landing page (hero + featured courses)
├── layout.tsx                  # Root layout with sidebar
├── courses/
│   ├── page.tsx                # Course marketplace
│   └── [courseId]/
│       └── page.tsx            # Course detail page
├── learn/
│   └── [lessonId]/
│       └── page.tsx            # Video lesson page
├── dashboard/
│   └── page.tsx                # Student dashboard
└── instructor/
    ├── page.tsx                # Instructor dashboard
    └── create-course/
        └── page.tsx            # Create course form

components/
├── Sidebar.tsx                 # Navigation sidebar
├── CourseCard.tsx              # Course display card
├── VideoPlayer.tsx             # Video player
├── LessonSidebar.tsx           # Lesson list for video page
├── ProgressBar.tsx             # Progress indicator
└── DashboardStats.tsx          # Dashboard statistics cards

lib/
├── types.ts                    # TypeScript interfaces
└── data.ts                     # Placeholder data
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Landing | `/` | Hero section, featured courses, features |
| Marketplace | `/courses` | Browse all courses |
| Course Detail | `/courses/[id]` | Description, instructor, lessons, enroll |
| Video Lesson | `/learn/[id]` | Video player + lesson sidebar |
| Student Dashboard | `/dashboard` | Enrolled courses, progress |
| Instructor Dashboard | `/instructor` | Manage courses, stats |
| Create Course | `/instructor/create-course` | Add new course form |

## Features

- Responsive, modern UI
- Reusable components
- Placeholder data for courses and lessons
- Clean folder structure
