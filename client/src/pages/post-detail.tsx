import { useRoute } from "wouter";
import PostDetail from "@/components/PostDetail";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronLeft, FileQuestion } from "lucide-react";
import type { Post } from "@/components/PostCard";

const mockPosts: Post[] = [
  {
    id: "1",
    title: "Getting Started with TypeScript",
    content: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers classes, modules, and interfaces to help you build robust components.\n\nIn this comprehensive guide, we'll explore the basics of TypeScript and how it can improve your development workflow. TypeScript adds optional static typing and class-based object-oriented programming to the language.\n\nBy the end of this tutorial, you'll understand how to set up a TypeScript project, define types, interfaces, and classes, and leverage the full power of the TypeScript compiler.",
    author: "developer123",
    createdAt: "2024-01-15T10:30:00Z",
    category: "Tutorial",
  },
  {
    id: "2",
    title: "Best Practices for React Development",
    content: "React has become one of the most popular libraries for building user interfaces. Learn about component patterns, hooks best practices, and performance optimization techniques.\n\nIn this article, we'll cover the essential patterns that every React developer should know. From managing state effectively to optimizing renders, these best practices will help you write cleaner, more maintainable code.\n\nWe'll also explore advanced patterns like compound components, render props, and custom hooks that can take your React skills to the next level.",
    author: "reactfan",
    createdAt: "2024-01-14T15:45:00Z",
    category: "Best Practices",
  },
  {
    id: "3",
    title: "Introduction to Node.js",
    content: "Node.js is a powerful JavaScript runtime built on Chrome's V8 engine. It's perfect for building scalable network applications and is widely used for backend development.\n\nThis introduction will walk you through the core concepts of Node.js, including the event loop, non-blocking I/O, and the module system. Understanding these fundamentals is crucial for building efficient server-side applications.\n\nWe'll also cover common use cases like building REST APIs, working with databases, and handling file operations.",
    author: "nodejsexpert",
    createdAt: "2024-01-13T09:00:00Z",
    category: "Tutorial",
  },
  {
    id: "4",
    title: "CSS Grid Layout Complete Guide",
    content: "CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay out items in rows and columns and has many features that make building complex layouts straightforward.\n\nThis comprehensive guide covers everything from basic grid concepts to advanced techniques. You'll learn how to create responsive layouts without media queries, align items precisely, and build complex page structures with ease.\n\nBy mastering CSS Grid, you'll be able to create layouts that were previously only possible with JavaScript or complex CSS hacks.",
    author: "cssmaster",
    createdAt: "2024-01-12T14:20:00Z",
    category: "CSS",
  },
  {
    id: "5",
    title: "Understanding JavaScript Promises",
    content: "Promises are a fundamental concept in modern JavaScript. They represent a value that may be available now, in the future, or never. Master async programming with this comprehensive guide.\n\nWe'll start with the basics of creating and consuming promises, then move on to more advanced topics like chaining, error handling, and working with multiple promises using Promise.all and Promise.race.\n\nBy the end of this guide, you'll have a solid understanding of asynchronous programming in JavaScript and how to write clean, readable async code.",
    author: "asyncdev",
    createdAt: "2024-01-11T11:15:00Z",
    category: "JavaScript",
  },
];

export default function PostDetailPage() {
  const [match, params] = useRoute("/post/:id");
  
  if (!match || !params?.id) {
    return null;
  }

  const post = mockPosts.find((p) => p.id === params.id);

  if (!post) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6 gap-2" data-testid="button-back-home">
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <FileQuestion className="mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2 text-lg font-semibold">Post not found</h3>
            <p className="text-muted-foreground">
              The post you're looking for doesn't exist or has been removed.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <PostDetail post={post} />;
}
