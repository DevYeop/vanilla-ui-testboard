import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import PostCard, { Post } from "./PostCard";
import { Search, SearchX } from "lucide-react";

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

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!query.trim()) return;

    setIsLoading(true);
    setHasSearched(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    const filtered = mockPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase()) ||
        post.author.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
    setIsLoading(false);
    console.log("Search completed:", { query, resultsCount: filtered.length });
  };

  useEffect(() => {
    if (query.trim()) {
      const timer = setTimeout(() => {
        handleSearch();
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setResults([]);
      setHasSearched(false);
    }
  }, [query]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Search Posts</h1>
        <p className="text-muted-foreground">Find articles, tutorials, and discussions</p>
      </div>

      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by title, content, or author..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
              data-testid="input-search"
            />
          </div>
          <Button type="submit" disabled={!query.trim() || isLoading} data-testid="button-search">
            Search
          </Button>
        </div>
      </form>

      <div className="space-y-4">
        {isLoading ? (
          <>
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <Skeleton className="mb-4 h-6 w-3/4" />
                  <Skeleton className="mb-2 h-4 w-full" />
                  <Skeleton className="mb-4 h-4 w-2/3" />
                  <div className="flex gap-4">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </>
        ) : hasSearched && results.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <SearchX className="mb-4 h-12 w-12 text-muted-foreground" />
              <h3 className="mb-2 text-lg font-semibold">No results found</h3>
              <p className="text-muted-foreground" data-testid="text-no-results">
                We couldn't find any posts matching "{query}". Try different keywords.
              </p>
            </CardContent>
          </Card>
        ) : hasSearched ? (
          <>
            <p className="mb-4 text-sm text-muted-foreground" data-testid="text-results-count">
              Found {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
            </p>
            {results.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
}
