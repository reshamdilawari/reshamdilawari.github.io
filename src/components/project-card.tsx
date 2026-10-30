"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string | string[] | readonly string[];
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const isClickable = href && href !== "#";

  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      {(video || image) && (
        <Link
          href={href || "#"}
          target={isClickable ? "_blank" : undefined}
          rel={isClickable ? "noopener noreferrer" : undefined}
          className={cn("block cursor-pointer", className)}
        >
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
            />
          )}
          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-40 w-full overflow-hidden object-cover object-top"
            />
          )}
        </Link>
      )}
      <CardHeader
        className={cn("px-2", isClickable && "cursor-pointer")}
        onClick={(e) => {
          if (isClickable) {
            const target = e.target as HTMLElement;
            if (!target.closest("a")) {
              window.open(href, "_blank", "noopener,noreferrer");
            }
          }
        }}
      >
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-x-2">
            <CardTitle className="mt-1 text-base">
              {isClickable ? (
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {title}
                </Link>
              ) : (
                title
              )}
            </CardTitle>
            {isClickable && (
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-blue-500 hover:underline whitespace-nowrap"
              >
                <span>Visit Site</span>
                <span className="text-blue-500">↗</span>
              </Link>
            )}
          </div>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert text-justify [&>p]:text-justify">
            {Array.isArray(description) ? (description as readonly string[]).join('\n\n') : (description as string)}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank" rel="noopener noreferrer">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
