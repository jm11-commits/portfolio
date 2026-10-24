
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BsArrowLeft,
  BsArrowRight,
  BsGithub,
  BsArrowLeftShort,
} from "react-icons/bs";

import workProjects from "../../data/workProjects";

const ProjectDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const project = typeof slug === "string"
    ? workProjects[slug]
    : null;

  const [currentImage, setCurrentImage] = useState(0);

  if (!router.isReady) return null;

  if (!project) {
    return (
      <main className="h-dvh bg-primary flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Project not found</h1>
          <Link href="/work" className="text-accent underline">
            Back to Work
          </Link>
        </div>
      </main>
    );
  }

  const previousImage = () => {
    setCurrentImage((index) =>
      (index - 1 + project.images.length) % project.images.length
    );
  };

  const nextImage = () => {
    setCurrentImage((index) =>
      (index + 1) % project.images.length
    );
  };

  return (
    <main className="h-dvh w-full overflow-hidden bg-primary text-white flex flex-col">
      {/* Top navigation */}
      <header className="shrink-0 h-[64px] sm:h-[76px] px-4 sm:px-8 lg:px-12 flex items-center justify-between border-b border-white/10">
        <Link
          href="/work"
          className="flex items-center gap-2 text-sm sm:text-base text-white/80 hover:text-accent transition"
        >
          <BsArrowLeftShort className="text-2xl" />
          Back to Work
        </Link>

        <span className="text-xs sm:text-sm tracking-[0.2em] text-white/50 uppercase">
          Project Showcase
        </span>
      </header>

      {/* Main content */}
      <section className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.85fr)]">
        {/* Screenshot gallery */}
        <div className="relative min-h-0 flex flex-col p-4 sm:p-6 lg:p-10">
          <div className="relative flex-1 min-h-0 rounded-xl overflow-hidden border border-white/10 bg-black/20">
            <Image
              key={project.images[currentImage]}
              src={project.images[currentImage]}
              alt={`${project.title} screenshot ${currentImage + 1}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-contain p-2 sm:p-4"
            />

            {/* Previous image */}
            {project.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous screenshot"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-accent transition"
                >
                  <BsArrowLeft className="text-xl" />
                </button>

                {/* Next image */}
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next screenshot"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-accent transition"
                >
                  <BsArrowRight className="text-xl" />
                </button>
              </>
            )}

            {/* Image counter */}
            <div className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs text-white/80">
              {currentImage + 1} / {project.images.length}
            </div>
          </div>

          <div className="shrink-0 pt-3 text-center text-xs text-white/40">
            Use the arrows to explore the project screenshots
          </div>
        </div>

        {/* Project information */}
        <motion.aside
          key={project.title}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="min-h-0 flex flex-col justify-center px-5 sm:px-8 lg:px-10 pb-5 lg:pb-10"
        >
          <p className="text-accent uppercase tracking-[0.25em] text-xs sm:text-sm mb-3">
            {project.category}
          </p>

          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight mb-4">
            {project.title}
            <span className="text-accent">.</span>
          </h1>

          <p className="text-white/65 text-sm sm:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="mb-6">
            <h2 className="text-sm uppercase tracking-[0.18em] text-white/90 mb-3">
              Technologies Used
            </h2>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs sm:text-sm text-white/75"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-semibold hover:bg-accent/80 transition"
            >
              <BsGithub className="text-xl" />
              GitHub Repository
            </a>

            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm hover:border-accent hover:text-accent transition"
            >
              Back to Work
            </Link>
          </div>

          <p className="mt-8 text-xs text-white/35">
            {String(currentImage + 1).padStart(2, "0")} —{" "}
            {String(project.images.length).padStart(2, "0")} screenshots
          </p>
        </motion.aside>
      </section>
    </main>
  );
};

export default ProjectDetails;
