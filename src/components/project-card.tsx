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
import { BorderBeam } from "@/components/magicui/border-beam";

interface Props {
  title: string;
  href?: string;
  description: string;
  tags?: readonly string[];
  link?: string;
  image?: string;
  active?: boolean;
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
  tags,
  link,
  image,
  active,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full relative group",
        className
      )}
    >
      <BorderBeam
        duration={8}
        size={400}
        colorFrom="#9c40ff"
        colorTo="#ffaa40"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      <Link href={href || "#"} className="block cursor-default">
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
      <CardHeader className="px-3">
        <div className="space-y-1">
          <CardTitle className="mt-3 text-base">{title}</CardTitle>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert mt-1 line-clamp-5 overflow-hidden text-justify">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-3">
        <div className="mt-3 mb-1 h-12 min-h-12 max-h-12 overflow-hidden">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1 max-w-full overflow-hidden items-start content-start">
              {tags?.slice(0, 10).map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px] whitespace-nowrap"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="px-3 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => {
              if (active === false && link.type === "Website") {
                return null;
              }

              if (!link.href || link.href === "#" || link.href.trim() === "") {
                return null;
              }

              return (
                <Link href={link?.href} key={idx} target="_blank">
                  <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              );
            })}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
