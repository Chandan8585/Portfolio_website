'use client'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const techIcons = [
  { src: '', alt: 'PHP' },
  { src: '/icons/docker.png', alt: 'Docker' },
  { src: '/icons/mysql.png', alt: 'MySQL' },
  { src: '/icons/mongodb.png', alt: 'MongoDB' },
  { src: '/icons/react.png', alt: 'React' },
  { src: '/icons/nodejs.png', alt: 'Node.js' },
]

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24">
    {/* Left Content */}
    <div className="w-full md:w-1/2 space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
        Hi, I'm Chandan Pratap
      </h1>
      <p className="text-gray-700 text-lg md:text-xl">
        A <span className="font-bold text-red-600">Full Stack Developer</span>{' '}
        and <span className="font-bold text-red-600">DevOps Enthusiast</span>. I specialize
        in building scalable solutions and crafting seamless digital experiences.
      </p>
      <div className="flex space-x-4">
      <Link to={'/projects'}>
      <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition">
          View My Work
        </button>
      </Link>
       <Link to={'/contact'}>
        <button className="border border-red-600 text-red-600 hover:bg-red-100 font-medium px-6 py-3 rounded-lg transition">
          Contact Me
        </button>
        </Link>
      </div>
    </div>

    {/* Right Animated Section */}
    <div className="relative w-full md:w-1/2 h-[500px] flex items-center justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-red-500 rounded-full blur-3xl opacity-30"></div>

      {/* Central Image */}
      <motion.div
        className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg z-10"
        whileHover={{ scale: 1.1 }}
      >
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQEEVOdW_7EhQA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721801526131?e=1738195200&v=beta&t=RcMgco7bolqWgTvh_o4SpztKfK5trkQqC4HSzyyo0VI"
          alt="Chandan Pratap"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Floating Tech Icons */}
      {techIcons.map((icon, index) => (
        <motion.img
          key={index}
          src={icon.src}
          alt={icon.alt}
          className="absolute w-12 h-12 rounded-full shadow-md"
          initial={{
            x: Math.cos((index / techIcons.length) * 2 * Math.PI) * 200,
            y: Math.sin((index / techIcons.length) * 2 * Math.PI) * 200,
          }}
          animate={{
            x: [
              Math.cos((index / techIcons.length) * 2 * Math.PI) * 300,
              Math.cos((index / techIcons.length) * 2 * Math.PI + Math.PI) * 200,
            ],
            y: [
              Math.sin((index / techIcons.length) * 2 * Math.PI) * 200,
              Math.sin((index / techIcons.length) * 2 * Math.PI + Math.PI) * 200,
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  </div>
  )
}
