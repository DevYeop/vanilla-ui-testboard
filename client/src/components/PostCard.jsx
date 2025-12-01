import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";

export default function PostCard({ post }) {
  const truncatedContent = post.content.length > 150 
    ? post.content.slice(0, 150) + "..." 
    : post.content;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Link href={`/post/${post.id}`}>
      <Card 
        className="cursor-pointer transition-all duration-150 hover-elevate"
        data-testid={`card-post-${post.id}`}
      >
        <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0 pb-2">
          <CardTitle className="text-lg font-semibold leading-tight" data-testid={`text-post-title-${post.id}`}>
            {post.title}
          </CardTitle>
          {post.category && (
            <Badge variant="secondary" className="shrink-0" data-testid={`badge-category-${post.id}`}>
              {post.category}
            </Badge>
          )}
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-muted-foreground leading-relaxed" data-testid={`text-post-preview-${post.id}`}>
            {truncatedContent}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1" data-testid={`text-post-author-${post.id}`}>
              <User className="h-3 w-3" />
              {post.author}
            </span>
            <span className="flex items-center gap-1" data-testid={`text-post-date-${post.id}`}>
              <Clock className="h-3 w-3" />
              {formatDate(post.createdAt)}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
