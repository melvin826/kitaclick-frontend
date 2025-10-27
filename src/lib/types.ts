// src/lib/types.ts

export type Course = {
  slug: string;
  title: string;
  description: string;
  level: string;
  durationWeeks: number;
  lessons: string[];
};
