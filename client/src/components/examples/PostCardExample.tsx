import PostCard from "../PostCard";

export default function PostCardExample() {
  return (
    <div className="max-w-2xl p-4">
      <PostCard
        post={{
          id: "1",
          title: "Getting Started with TypeScript",
          content: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers classes, modules, and interfaces to help you build robust components.",
          author: "developer123",
          createdAt: "2024-01-15T10:30:00Z",
          category: "Tutorial",
        }}
      />
    </div>
  );
}
