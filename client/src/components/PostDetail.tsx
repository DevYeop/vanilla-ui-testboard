import { Link } from "wouter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeft, Clock, User } from "lucide-react";
import type { Post } from "./PostCard";

interface PostDetailProps {
  post: Post;
}

export default function PostDetail({ post }: PostDetailProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="mb-6 gap-2" data-testid="button-back-home">
          <ChevronLeft className="h-4 w-4" />
          Back to Home
        </Button>
      </Link>

      <Card>
        <CardHeader className="space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <h1 className="text-2xl font-bold md:text-3xl" data-testid="text-post-title">
              {post.title}
            </h1>
            {post.category && (
              <Badge variant="secondary" data-testid="badge-post-category">
                {post.category}
              </Badge>
            )}
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary/10 text-xs text-primary">
                  {post.author.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium" data-testid="text-post-author">
                {post.author}
              </span>
            </div>
            <span className="flex items-center gap-1 text-sm text-muted-foreground" data-testid="text-post-date">
              <Clock className="h-4 w-4" />
              {formatDate(post.createdAt)}
            </span>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="py-6">
          <article className="prose prose-neutral max-w-none dark:prose-invert" data-testid="text-post-content">
            {post.content.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="mb-4 leading-relaxed text-foreground">
                {paragraph}
              </p>
            ))}
          </article>
        </CardContent>
      </Card>
    </div>
  );
}
