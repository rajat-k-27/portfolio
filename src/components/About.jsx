import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row gap-8 lg:gap-12" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          <span className="hover:text-gray-500">About</span>  <span className="font-extrabold hover:text-gray-500">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">

Hi, I’m Rajat Chakraborty a passionate Full-Stack Web & Mobile Developer with a love for building interactive, user-friendly, and scalable digital experiences.
With expertise in Next.js, React.js, Django, Node.js, and Three.js, I enjoy crafting applications that are not only functional but also visually engaging.

I have hands-on experience developing real-time applications, 3D web experiences, and mobile apps, and I thrive on turning ideas into well-designed, high-performing products. Beyond coding, I value clean architecture, collaborative teamwork, and continuous learning to stay ahead in tech.

When I’m not coding, you’ll probably find me exploring new design trends, experimenting with emerging technologies, or enjoying a good cup of coffee.

        </p>


      </motion.div>
    </div>
  );
}
