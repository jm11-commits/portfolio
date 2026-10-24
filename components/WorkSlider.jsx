
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import workProjects from "../data/workProjects";

const WorkSlider = () => {
  const project = workProjects["byte-by-byte"];

  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      <SwiperSlide>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
          <Link
            href="/work/byte-by-byte"
            className="relative rounded-lg overflow-hidden group"
          >
            <Image
              src={project.thumbnail}
              alt="Byte by Byte website preview"
              fill
              sizes="(max-width: 768px) 50vw, 30vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#4a22bd] via-[#e838cc]/30 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />

            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-semibold">{project.title}</p>
              <p className="text-sm">View Project →</p>
            </div>
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default WorkSlider;
