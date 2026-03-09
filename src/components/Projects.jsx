import React from 'react';
import { TbBrandGithub, TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "KeepQuiet",
    description: "KeepQuiet is a scalable real-time chat app supporting 1,000+ concurrent users with low-latency messaging. Built with React.js, Socket.io, Node.js, MongoDB, and Tailwind CSS, it delivers a sleek, responsive UI and robust performance.",
    image: "/assets/keepquiet.png",
    github: "https://github.com/rajat-k-27/realtime-chat-application",
    link: "https://realtime-chat-application-inky.vercel.app/"
  },
  {
    id: 2,
    title: "MeetUp",
    description: "MeetUp is a real-time video chat application built with Next.js, WebRTC, and Firebase. It delivers seamless communication with <200ms latency and secure authentication via NextAuth.",
    image: "/assets/meetup.png",
    github: "https://github.com/rajat-k-27/meetup",
    link: "https://meetup-eight-opal.vercel.app/"
  },
  {
    id: 3,
    title: "JobFinder",
    description: "JobFinder is a cross-platform job search app built with React Native, Expo, Node.js, and Express. It streamlines job discovery, reducing user search time by 40% through intelligent filtering and optimized APIs.",
    image: "/assets/jobfind.png",
    github: "https://github.com/rajat-k-27/jobfinder",
    link: "https://github.com/rajat-k-27/jobfinder"
  },
  {
    id: 4,
    title: "Dishari",
    description: "Dishari is a robust, production-ready full-stack e-commerce platform engineered to deliver a seamless and high-performance shopping experience. The application features a secure authentication system, cloud-based asset management, and a fully functional admin dashboard for efficient product and order management.",
    image: "/assets/dishari_cover_img.jpg",
    github: "https://github.com/rajat-k-27/dishari",
    link: "https://dishari-rose.vercel.app/"
  }
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

           <div className="lg:w-1/2 lg:space-y-6 space-y-4">
  <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
    {String(project.id).padStart(2, "0")}
  </h2>

  <p className="font-bold text-white text-xl lg:text-3xl">
    {project.title}
  </p>

  <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
    {project.description}
  </p>

  {/* Icons */}
  <div className="flex items-center gap-4 mt-3">
    <a
      href={project.link}
      className="text-white"
      target="_blank"
      rel="noopener noreferrer"
    >
      <TbExternalLink size={23} />
    </a>

    <a
      href={project.github}
      className="text-white"
      target="_blank"
      rel="noopener noreferrer"
    >
      <TbBrandGithub size={23} />
    </a>
  </div>
</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
