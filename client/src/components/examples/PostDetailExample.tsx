import PostDetail from "../PostDetail";
import { ThemeProvider } from "../ThemeProvider";

export default function PostDetailExample() {
  return (
    <ThemeProvider>
      <PostDetail
        post={{
          id: "1",
          title: "Getting Started with TypeScript",
          content: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers classes, modules, and interfaces to help you build robust components.\n\nIn this comprehensive guide, we'll explore the basics of TypeScript and how it can improve your development workflow. TypeScript adds optional static typing and class-based object-oriented programming to the language.\n\nBy the end of this tutorial, you'll understand how to set up a TypeScript project, define types, interfaces, and classes, and leverage the full power of the TypeScript compiler.",
          author: "developer123",
          createdAt: "2024-01-15T10:30:00Z",
          category: "Tutorial",
        }}
      />
    </ThemeProvider>
  );
}
