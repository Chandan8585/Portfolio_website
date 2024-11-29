import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import react from '../../assets/skills/react.svg'
import express from '../../assets/skills/express.svg'
import github from '../../assets/skills/github.svg'
import mongo from '../../assets/skills/mongo.svg'
import mysql from '../../assets/skills/mysql.svg'
import node from '../../assets/skills/node.svg'
import postman from '../../assets/skills/postman.svg'
import redux from '../../assets/skills/redux.svg'
import AWS from '../../assets/skills/amazon_aws-ar21.svg'
import lamda from '../../assets/skills/amazon_awslambda-ar21.svg'
import bash from '../../assets/skills/gnu_bash-icon.svg'
import linux from '../../assets/skills/linux-icon.svg'
import kubernetes from '../../assets/skills/kubernetes-icon.svg'
import docker from '../../assets/skills/docker-official.svg'
import php from '../../assets/skills/php.png'
import python from '../../assets/skills/python-icon.svg'


const logos = [
     {
          name: 'Amazon Web Services',
          url: AWS
     },
     {
          name: 'AWS Lambda',
          url: lamda
     },
     {
          name: 'Linux',
          url: linux
     },
     {
          name: 'Bash Shell Scripting',
          url: bash
     },
     {
          name: 'Python',
          url: python
     },
     {
          name: 'Docker',
          url: docker
     },
     {
          name: 'Kubernetes',
          url: kubernetes
     },
     {
          name: 'Node',
          url: node,
     },
     {
          name: 'Express',
          url: express,
     },
     {
          name: 'PHP',
          url: php,
     },
     {
          name: 'Github',
          url: github,
     },
     {
          name: 'MongoDB',
          url: mongo,
     },
     {
          name: 'MySQL',
          url: mysql,
     },
     {
          name: 'Postman',
          url: postman,
     },
     {
          name: 'React',
          url: react,
     },
     {
          name: 'Redux',
          url: redux,
     },
   
]

export default function Skills() {
     const sectionRef = useRef(null);
     const isInView = useInView(sectionRef, { once: false, margin: "-100px" })

     const containerVariants = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.2
               }
          }
     }


     const headerVariants = {
          hidden: { opacity: 0, y: 20 },
          visible: {
               opacity: 1,
               y: 0,
               transition: {
                    duration: 0.6,
                    ease: [0.4, 0.02, 0.2, 0.97]
               }
          }
     }


     return (
          <>
               <motion.section ref={sectionRef} initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="w-full mx-auto min-h-screen bg-[#0F1012]  rounded-t-[80px] flex items-center justify-center flex-col overflow-hidden">
                    <div className="flex justify-center items-center h-full px-14">
                         <div className="grid gap-8 w-full mx-auto">
                              <motion.div variants={headerVariants} className="space-y-2 text-center">
                                   <p className="text-4xl font-bold text-red-300">🎉 SUPERPOWER 🎉</p>
                                   <p className="text-sm font-bold text-[#bababb]">which I have</p>
                              </motion.div>
                              <motion.h1 variants={headerVariants} className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight lg:leading-[1.2]  text-white text-center">
                                   Turning ideas into functional, user-friendly web experiences with a blend of logic, creativity, and innovation
                              </motion.h1>
                         </div>
                    </div>

                    <div
                         className="group relative mt-16 flex gap-6 overflow-hidden p-2"
                         style={{
                              maskImage:
                                   'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
                         }}
                    >
                         {Array(5)
                              .fill(null)
                              .map((index) => (
                                   <div
                                        key={index}
                                        className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
                                   >
                                        {logos.map((logo, key) => (
                                             <img
                                                  key={key}
                                                  src={logo.url}
                                                  className="h-10 w-28 px-2 "
                                                  alt={`${logo.name}`}
                                             />
                                        ))}
                                   </div>
                              ))}
                    </div>
               </motion.section>
          </>
     );
}
