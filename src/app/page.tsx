"use client";

import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { EducationCard } from "@/components/education-card";
import { ExperienceCard } from "@/components/experience-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SkillBadge } from "@/components/skill-badge";
import { Icons } from "@/components/icons";
import ShinyButton from "@/components/ui/shiny-button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const { theme } = useTheme();
  const [catAnimation, setCatAnimation] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const loadAnimation = async () => {
      try {
        const animationPath =
          theme === "dark"
            ? "/lottie/cat_white.json"
            : "/lottie/cat_black.json";

        const response = await fetch(animationPath);
        const animationData = await response.json();
        setCatAnimation(animationData);
      } catch (error) {
        console.error("Failed to load cat animation:", error);
      }
    };

    loadAnimation();
  }, [theme, mounted]);
  return (
    <>
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <div className="flex items-center gap-2">
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none sm:mr-3 mr-1"
                    yOffset={8}
                    text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
                  />
                  {mounted && catAnimation && (
                    <BlurFade delay={BLUR_FADE_DELAY + 0.2}>
                      <div className="flex items-center sm:mt-1 mb-1 sm:mb-0">
                        <Lottie
                          animationData={catAnimation}
                          loop={true}
                          className="h-[20px] sm:h-[35px] w-auto"
                        />
                      </div>
                    </BlurFade>
                  )}
                </div>
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>

        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert text-justify">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>

        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <SkillBadge skill={skill} />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Featured Projects</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <div className="grid gap-4 sm:grid-cols-2">
                {DATA.projects.slice(0, 4).map((project) => (
                  <div
                    key={project.title}
                    className="relative overflow-hidden rounded-xl"
                  >
                    <ProjectCard
                      {...project}
                      tags={Array.from(project.technologies)}
                    />
                  </div>
                ))}
              </div>
              <Link href="/projects" className="mt-4 block">
                <ShinyButton className="w-full sm:w-auto group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] font-semibold">
                  View All Projects →
                </ShinyButton>
              </Link>
            </BlurFade>
          </div>
        </section>

        <section id="experience">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Experience</h2>
            </BlurFade>
            <div className="space-y-4">
              {DATA.experience.map((experience, id) => (
                <BlurFade
                  key={experience.company}
                  delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                >
                  <ExperienceCard
                    key={experience.company}
                    company={experience.company}
                    href={experience.href}
                    role={experience.role}
                    logoUrl={experience.logoUrl}
                    start={experience.start}
                    end={experience.end}
                    description={experience.description}
                    isLast={id === DATA.experience.length - 1}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <EducationCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="contact">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Contact</h2>

              <p className="text-muted-foreground text-justify">
                Always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach
                out!
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href="mailto:mohitkhairnar28@gmail.com"
                  className="flex items-center gap-2 underline underline-offset-4 hover:opacity-70 transition-opacity cursor-pointer"
                >
                  <Icons.email className="size-4" />
                  mohitkhairnar28@gmail.com
                </a>

                {/* <a
                  href={DATA.contact.social.X.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-foreground text-background hover:opacity-90 transition-opacity"
                >
                  <DATA.contact.social.X.icon className="size-4" />
                  Connect on X
                </a> */}
              </div>
            </div>
          </BlurFade>
        </section>
        <footer className="mt-20 border-t py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-center items-center ">
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>
                    © {new Date().getFullYear()} {DATA.name}. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        </footer>
      </main>
    </>
  );
}
