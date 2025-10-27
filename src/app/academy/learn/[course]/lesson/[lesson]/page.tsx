// Add this to fix Next.js static export error
export async function generateStaticParams() {
  // Provide some demo slugs for static build
  return [
    { course: "intro-to-selling", lesson: "welcome" },
    { course: "advanced-marketing", lesson: "strategy" }
  ];
}

export default function Lesson(){ return (<div><h1 className='text-2xl font-bold'>Lesson Player (stub)</h1></div>) }
