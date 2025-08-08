import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  company: string;
  href?: string;
  role: string;
  logoUrl: string;
  start: string;
  end: string;
  description?: string;
  isLast?: boolean;
}

export function ExperienceCard({
  company,
  href,
  role,
  logoUrl,
  start,
  end,
  description,
  isLast = false,
}: Props) {
  return (
    <div className="relative flex items-start gap-4">
      <div className="relative flex flex-col items-center">
        <Avatar className="border-2 size-12 m-auto bg-muted-background dark:bg-foreground">
          <AvatarImage src={logoUrl} alt={company} className="object-contain" />
          <AvatarFallback>{company[0]}</AvatarFallback>
        </Avatar>

        {!isLast && (
          <div className="w-0.5 h-16 bg-gradient-to-b from-primary via-border to-border mt-2"></div>
        )}
      </div>

      <Card className="flex-1 hover:shadow-md transition-all duration-300">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            {href ? (
              <Link href={href} target="_blank" className="group">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold leading-none text-sm">
                    {company}
                  </h3>
                  <ChevronRightIcon className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
                </div>
              </Link>
            ) : (
              <h3 className="font-semibold leading-none text-sm">{company}</h3>
            )}
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
              {start} - {end}
            </div>
          </div>
          <p className="text-sm text-muted-foreground font-medium">{role}</p>
        </CardHeader>
        {description && (
          <CardContent className="pb-4">
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert text-justify">
              {description}
            </Markdown>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
