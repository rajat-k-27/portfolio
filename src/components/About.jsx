import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
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

          I'm a results-driven Full Stack Developer mastering Next.js, React.js, React Native, Node.js, Express.js, MongoDB, Firebase, Socket.io, WebRTC, Tailwind CSS, NextAuth, and Expo. I craft scalable, high-performance web and mobile apps with seamless UX and robust backend systems. My solutions have boosted user retention by 20%, slashed operational time by 30%, and cut API latency by 15%. From a real-time chat app for 1,000+ users to a job platform reducing search time by 40% and a video app with 200ms latency, I deliver projects that drive impact. Ready to build your next big idea with precision and innovation lets create something extraordinary together.
        </p>


      </motion.div>
    </div>
  );
}
