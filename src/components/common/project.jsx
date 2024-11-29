"use client"
import { useState, useRef, useCallback, useEffect } from 'react'
import { ArrowRight, MoveRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from 'react-router-dom'
import nomadnest from '../../assets/projects/mockups/nomad_nest.png'
import LrProject from '../../assets/projects/mockups/LR_crm.png'
import Tomatino from '../../assets/projects/mockups/Tomatino.png'
const images = [
     {
          id: 1,
          src: nomadnest,
          alt: 'Nomadnest',
          description: 'Full-stack Hotel Booking Website',
          slug: "hotel-booking-website"
     },
     {
          id: 2,
          src: LrProject,
          alt: 'Lorry Receipt CRM',
          description: 'CRM Project To Manage Invoices, Challan, Lr etc',
          slug: "lr-crm"
     },
     {
          id: 3,
          src: Tomatino,
          alt: 'Movie Review App',
          description: 'Movie Review app to watch trailers, know about actors',
          slug: "movie-rev-app"
     },
]

export default function Projects() {
     const [activeImage, setActiveImage] = useState(null)
     const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
     const requestRef = useRef(null)
     const prevCursorPosition = useRef({ x: 0, y: 0 })

     const handleMouseMove = useCallback((e) => {
          const { clientX, clientY } = e
          const dx = clientX - prevCursorPosition.current.x
          const dy = clientY - prevCursorPosition.current.y
          const easeAmount = 0.15
          const newX = prevCursorPosition.current.x + dx * easeAmount
          const newY = prevCursorPosition.current.y + dy * easeAmount
          setCursorPosition({ x: newX, y: newY })
          prevCursorPosition.current = { x: newX, y: newY }
     }, [])

     useEffect(() => {
          const updateCursorPosition = (e) => {
               if (requestRef.current) return
               requestRef.current = requestAnimationFrame(() => {
                    handleMouseMove(e)
                    requestRef.current = null
               })
          }
          window.addEventListener('mousemove', updateCursorPosition)
          return () => {
               window.removeEventListener('mousemove', updateCursorPosition)
               if (requestRef.current) cancelAnimationFrame(requestRef.current)
          }
     }, [handleMouseMove])

     const handleImageHover = useCallback((image) => {
          setActiveImage(image)
     }, [])

     const handleMouseLeave = useCallback(() => {
          setActiveImage(null)
     }, [])

     return (
          <div className="w-full min-h-screen bg-[#161719] text-white px-4 py-24 rounded-tr-[80px]">
               <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.5 }}
                         className="mb-10 flex items-center justify-between w-full"
                    >
                         <div className=''>
                              <h2 className="text-red-500 text-4xl font-bold">FEATURED PROJECTS</h2>
                              <p className="text-gray-400 text-lg">Selected Works</p>
                         </div>
                         <Link className='flex gap-2 hover:border-b border-red-400 hover:text-red-400' to='/projects'>
                              See All Projects
                              <motion.div
                                   whileHover={{ x: 5 }}
                                   transition={{ type: "spring", stiffness: 400, damping: 10 }}
                              >
                                   <MoveRight />
                              </motion.div>
                         </Link>
                    </motion.div>

                    <div
                         className="space-y-8 w-full h-full relative"
                         onMouseLeave={handleMouseLeave}
                    >
                         {images.map((image, index) => (
                              <motion.div
                                   key={image.id}
                                   className="cursor-pointer flex flex-col md:flex-row items-start justify-between gap-4 group"
                                   onMouseEnter={() => handleImageHover(image)}
                                   initial={{ opacity: 0, y: 30 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.5, delay: index * 0.2 }}
                                   whileHover={{ scale: 1.02 }}
                              >
                                   <div className="space-y-2 min-w-80">
                                        <span className="text-sm text-gray-500">0{index + 1}</span>
                                        <h3 className="text-sm font-medium">{image.alt}</h3>
                                   </div>
                                   <div className="flex items-center justify-between w-full border-b pb-4 group-hover:border-red-500 transition-colors duration-300">
                                        <h2 className="text-xl md:text-3xl lg:text-3xl font-light group-hover:text-red-500 transition-colors duration-300">
                                             {image.description}
                                        </h2>
                                        <Link
                                             to={`/projects/${image.slug}`}
                                             className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors"
                                             whileHover={{ x: 5 }}
                                             transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                             <span className=''>View Project</span> <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                   </div>
                              </motion.div>
                         ))}
                    </div>
               </div>
               <AnimatePresence>
                    {activeImage && (
                         <motion.img
                              key={activeImage.id}
                              src={activeImage.src}
                              alt={activeImage.alt}
                              className="fixed border-4 border-red-200  object-cover pointer-events-none z-10 w-96 rounded-lg shadow-lg"
                              style={{
                                   left: `${cursorPosition.x}px`,
                                   top: `${cursorPosition.y}px`,
                                   transform: 'translate(-50%, -50%)'
                              }}
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.5 }}
                              transition={{ type: "spring", stiffness: 300, damping: 25 }}
                         />
                    )}
               </AnimatePresence>
          </div>
     )
}