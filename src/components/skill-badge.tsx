import * as React from "react";
import { cn } from "@/lib/utils";

interface SkillBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  skill: string;
}

const skillColors = {
  // Programming Languages
  Python: "hover:bg-[#D0E3FA] hover:text-[#2C5EAA] hover:border-[#B0D0F0]",
  "C++": "hover:bg-[#D6E4F9] hover:text-[#345D9D] hover:border-[#B8CEED]",
  JavaScript: "hover:bg-[#FFF9C4] hover:text-[#BBAF00] hover:border-[#FFF59D]",
  TypeScript: "hover:bg-[#D6EAF8] hover:text-[#1A73E8] hover:border-[#AEDCF5]",

  // Frontend
  React: "hover:bg-[#D2F4FF] hover:text-[#00B7E6] hover:border-[#B3EFFF]",
  "Next.js": "hover:bg-[#E0E0E0] hover:text-[#2D2D2D] hover:border-[#C2C2C2]",
  Flutter: "hover:bg-[#D0E6FA] hover:text-[#1479C9] hover:border-[#B0D3F0]",
  Tailwind: "hover:bg-[#CCF2F5] hover:text-[#1EB5C1] hover:border-[#B0E7EB]",

  // Backend
  "Node.js": "hover:bg-[#D2F4DC] hover:text-[#2F8F46] hover:border-[#B3EFC9]",
  Express: "hover:bg-[#EAEAEA] hover:text-[#4A4A4A] hover:border-[#D5D5D5]",
  Inngest: "hover:bg-[#E7D8FA] hover:text-[#7D48C4] hover:border-[#D8BFF5]",

  // Databases
  MongoDB: "hover:bg-[#D2F4DC] hover:text-[#3B8739] hover:border-[#B3EFC9]",
  PostgreSQL: "hover:bg-[#D0E4F8] hover:text-[#2F5E9D] hover:border-[#B0D0F0]",
  Supabase: "hover:bg-[#CCF4E0] hover:text-[#2AB784] hover:border-[#B0EFD2]",
  Firebase: "hover:bg-[#FFF3CD] hover:text-[#D69A00] hover:border-[#FFE69C]",
  Prisma: "hover:bg-[#D7E2F1] hover:text-[#26425C] hover:border-[#C4D5E7]",

  // Tools & DevOps
  Git: "hover:bg-[#FFE0D2] hover:text-[#D75E2F] hover:border-[#FFC2B3]",
  Figma: "hover:bg-[#FFD6D6] hover:text-[#E24E1B] hover:border-[#FFBBBB]",
  Docker: "hover:bg-[#D1ECFB] hover:text-[#1A73E8] hover:border-[#AEDCF5]",
  Kubernetes: "hover:bg-[#D1E3FF] hover:text-[#326CE5] hover:border-[#B5D0FF]",
  AWS: "hover:bg-[#FFE5B4] hover:text-[#CC8500] hover:border-[#FFD699]",

  // Default
  default: "hover:bg-[#F1E6FB] hover:text-[#804BB5] hover:border-[#E0D0F5]",
} as const;

function SkillBadge({ skill, className, ...props }: SkillBadgeProps) {
  const colorClass =
    skillColors[skill as keyof typeof skillColors] || skillColors.default;

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 cursor-default",
        "border-transparent bg-secondary text-secondary-foreground",
        colorClass,
        className
      )}
      {...props}
    >
      {skill}
    </div>
  );
}

export { SkillBadge };
