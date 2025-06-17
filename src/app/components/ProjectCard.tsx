// components/ProjectCard.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaCircle, FaChevronDown } from "react-icons/fa";
import { Project } from "../types/common";
import { techWithIcons } from "../data/techWithIcons";
import ProjectDetail from "./ProjectDetail";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [showDetail, setShowDetail] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex flex-col gap-10 items-start relative md:gap-16 md:flex-row md:even:flex-row-reverse"
    >
      {/* 좌측: 이미지 슬라이드 */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-full max-w-sm sm:max-w-full relative">
          <Image
            src={project.images[currentImage]}
            alt={`${project.title} 이미지 ${currentImage + 1}`}
            width={600}
            height={400}
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
          {/* 페이지네이션 */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`text-xs ${i === currentImage ? "text-blue-600 scale-125" : "text-gray-400"} transition-transform`}
                aria-label={`이미지 ${i + 1} 보기`}
              >
                <FaCircle />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 우측: 텍스트 카드 (상세 토글) */}
      <div className="w-full md:w-1/2 bg-white rounded-xl shadow p-6 relative min-h-[340px]">
        {!showDetail ? (
          <>
            {/* 상세 보기 버튼 */}
            <button
              className="absolute top-4 right-4 flex items-center gap-1 text-sm text-blue-700 font-semibold bg-blue-50 hover:bg-blue-100 rounded-md px-3 py-1 shadow transition"
              onClick={() => setShowDetail(true)}
            >
              <FaChevronDown size={14} />
              상세 보기
            </button>

            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              {project.title}
            </h2>
            {/* 설명 여러 줄 */}
            {project.descriptionLines?.map((line, i) => (
              <p key={i} className="text-gray-600 mb-2">
                {line}
              </p>
            ))}

            {/* GitHub 버튼 */}
            <div className="mb-4 mt-2">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium
                 text-white bg-blue-600 hover:bg-blue-700
                 px-4 py-2 rounded-md shadow transition-all duration-300"
              >
                <FaGithub
                  size={18}
                  className="hidden md:inline transition-transform duration-300 group-hover:-translate-y-1"
                />
                <FaGithub size={18} className="inline md:hidden" />
                GitHub 보기
              </Link>
            </div>

            {/* 기술 스택 */}
            <div className="flex flex-wrap gap-3 mt-4">
              {project.tech.map((tech, i) => {
                const techData = techWithIcons[tech];
                const Icon = techData?.icon;
                const color = techData?.color || "#999999";
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center text-xs font-medium text-gray-700"
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center
                                 bg-white shadow-inner shadow-gray-300 text-xl mb-1"
                    >
                      {Icon ? <Icon color={color} size={28} /> : tech[0]}
                    </div>
                    {tech}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          // 상세 보기 모드 전체
          <ProjectDetail
            period={project.period}
            roles={project.roles}
            members={project.members}
            onClose={() => setShowDetail(false)}
          />
        )}
      </div>
    </motion.div>
  );
}
