import { useAuth } from "./AuthContext";
import PostCard, { Post } from "./PostCard";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const mockPosts: Post[] = [
  {
    id: "1",
    title: "Getting Started with TypeScript",
    content: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers classes, modules, and interfaces to help you build robust components. In this guide, we'll explore the basics.",
    author: "developer123",
    createdAt: "2024-01-15T10:30:00Z",
    category: "Tutorial",
  },
  {
    id: "2",
    title: "Best Practices for React Development",
    content: "React has become one of the most popular libraries for building user interfaces. Learn about component patterns, hooks best practices, and performance optimization techniques.",
    author: "reactfan",
    createdAt: "2024-01-14T15:45:00Z",
    category: "Best Practices",
  },
  {
    id: "3",
    title: "Introduction to Node.js",
    content: "Node.js is a powerful JavaScript runtime built on Chrome's V8 engine. It's perfect for building scalable network applications and is widely used for backend development.",
    author: "nodejsexpert",
    createdAt: "2024-01-13T09:00:00Z",
    category: "Tutorial",
  },
  {
    id: "4",
    title: "CSS Grid Layout Complete Guide",
    content: "CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay out items in rows and columns and has many features that make building complex layouts straightforward.",
    author: "cssmaster",
    createdAt: "2024-01-12T14:20:00Z",
    category: "CSS",
  },
  {
    id: "5",
    title: "Understanding JavaScript Promises",
    content: "Promises are a fundamental concept in modern JavaScript. They represent a value that may be available now, in the future, or never. Master async programming with this comprehensive guide.",
    author: "asyncdev",
    createdAt: "2024-01-11T11:15:00Z",
    category: "JavaScript",
  },
];

export default function HomePage() {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">
          {isAuthenticated ? (
            <>Welcome back, <span className="text-primary" data-testid="text-welcome-username">{user?.username}</span></>
          ) : (
            "Welcome to Vanilla Community"
          )}
        </h1>
        <p className="text-muted-foreground">
          {isAuthenticated
            ? "Here are the latest posts from our community"
            : "Join our community to share and discover great content"}
        </p>
      </div>

      <section>
        <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
          <MessageSquare className="h-5 w-5 text-primary" />
          Recent Posts
        </h2>

        <div className="space-y-4" data-testid="container-posts-list">
          {mockPosts.length > 0 ? (
            mockPosts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <MessageSquare className="mb-4 h-12 w-12 text-muted-foreground" />
                <h3 className="mb-2 text-lg font-semibold">No posts yet</h3>
                <p className="text-muted-foreground">
                  Be the first to share something with the community!
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
