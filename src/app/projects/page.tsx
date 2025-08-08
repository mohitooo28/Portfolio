import BlurFade from "@/components/magicui/blur-fade";
import dynamic from "next/dynamic";
import { DATA } from "@/data/resume";
import { ProjectSkeleton } from "@/components/skeletons/project-skeleton";

export const metadata = {
  title: "Projects",
  description: "Check out my latest projects and experiments.",
};

const BLUR_FADE_DELAY = 0.04;

const ProjectCard = dynamic(
  () => import("@/components/project-card").then((mod) => mod.ProjectCard),
  {
    loading: () => <ProjectSkeleton />,
  }
);

export default function ProjectsPage() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Projects</h1>
      </BlurFade>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {DATA.projects.map((project, id) => (
          <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 2 + id * 0.05}>
            <div className="relative overflow-hidden rounded-xl">
              <ProjectCard
                {...project}
                tags={Array.from(project.technologies)}
              />
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
