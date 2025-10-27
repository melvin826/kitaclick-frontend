import { Course } from "@/lib/types";

const mockCourses: Course[] = [
  { slug: "intro-to-selling", title: "Intro to Live Selling", description: "Start your journey as a live seller.", level: "Beginner", durationWeeks: 2, lessons: [] },
  { slug: "digital-marketing", title: "Digital Marketing Basics", description: "Learn to market your products online.", level: "Intermediate", durationWeeks: 4, lessons: [] },
];

export async function generateStaticParams() {
  return mockCourses.map((course) => ({ slug: course.slug }));
}

export default function CourseDetail({ params }: { params: { slug: string } }) {
  const course = mockCourses.find((c) => c.slug === params.slug);
  if (!course) return <div>Course not found</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="text-gray-600 mt-2">{course.description}</p>
      <div className="mt-4 text-sm text-gray-500">
        Level: {course.level} | Duration: {course.durationWeeks} weeks
      </div>
    </div>
  );
}
