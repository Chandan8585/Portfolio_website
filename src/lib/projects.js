import nomadnest from '../assets/projects/mockups/nomad_nest.png'
import LrProject from '../assets/projects/mockups/LR_crm.png'
import tirasya from '../assets/projects/mockups/kyte1.png'
import Tomatino from '../assets/projects/mockups/Tomatino.png'

import ljs from '../assets/projects/mockups/ljs1.png'
import fi1 from '../assets/projects/mockups/fi1.png'
import qualityDigital from '../assets/projects/mockups/qd1.png'
import sp from '../assets/projects/mockups/sp.png'
import vk from '../assets/projects/mockups/vk.png'
import cp from '../assets/projects/mockups/cp.png'


export const projects = [
     {
          "name": "Nomad Nest Hotel Booking Website",
          "slug": "hotel-booking-website",
          "description": "A robust ecommerce application developed using the MERN stack with advanced features such as inventory management, email marketing, RBAC, and third-party integrations like Razorpay for payments and Google APIs for authentication and data handling.",
          "features": [
"Sleek Single-Page Application: Enjoy a seamless user experience within a single page, ensuring efficiency and smooth navigation",
"Robust Backend Powered by Express.js and Node.js: The application's backend functionality is supported by Express.js and Node.js, providing a robust and responsive foundation",
"Authentication Capabilities: Utilize secure authentication features such as SignUp, Login, and Test Credentials to safeguard user data and ensure a safe environment",
"Integrated React Date Component: Benefit from the convenience of a React Date Component for easy and intuitive date selections within the application.",
"RazorPay Payment Gateway (Test Mode): Seamlessly handle payments through the RazorPay gateway, ensuring secure transactions, even in the testing phase",
"Efficient Database Management with MongoDB: Database operations are handled seamlessly using MongoDB, ensuring reliable data storage and retrieval",
"State Management with React Context and Reducer: Employ React Context and Reducer to effectively manage the state of the application, enhancing user interaction and experience.",
"Dynamic Infinite Scrolling: Implement Infinite Scroll functionality, allowing users to explore content continuously without interruptions.",
"Interactive Carousel for Categories: Engage users with visually appealing carousels showcasing various categories, enhancing the presentation of content.",
"User-Friendly Dropdown Lists and Modals: Improve user interaction with intuitive Dropdown Lists and Modals, ensuring a seamless and interactive interface.",
"On the homepage, you will find the list of all the hotels that were listed on the webapp by hosts from all around the country. you can choose froom various categories listed"
          ],
          "techStack": ["MongoDB", "Express", "React.js", "Node.js", "Nodemailer","Razorpay"],
          "liveLink": "nomad-nest-frontend-git-development-chandan8585.vercel.app/",
          "image": nomadnest,

     },
     {
          "name": "Lorry Receipt CRM",
          "slug": "lr-crm",
          "description": "A comprehensive project management application built for Sinss, featuring a role-based access system, Kanban boards, media storage, and resource management. Designed to streamline project workflows and track performance metrics effectively.",
          "features": [
               "Role-Based Access Control (RBAC) for Admins and Employees",
               "Custom dashboards for Challan, invoice, LR tracking",
               "Create new location",
               "Manual Authentication"
          ],
          "techStack": [
               "PHP",
               "Javascript",
               "Mysql",
               "CSS",
               "Html",
               "PHPmailer"
          ],
          "liveLink": "tsbc.in",
          "image": LrProject,
     },
     {
          "name": "Tomatino Movie Review Website",
          "slug": "tomatino-movie-rev-app",
          "description": "Movie review App",
          "features": [
            "Sleek Single-Page Application: Enjoy a seamless user experience within a single page, ensuring efficiency and smooth navigation",
"RazorPay Payment Gateway (Test Mode): Seamlessly handle payments through the RazorPay gateway, ensuring secure transactions, even in the testing phase",
"State Management with React Context and Reducer: Employ React Context and Reducer to effectively manage the state of the application, enhancing user interaction and experience.",
"Dynamic Infinite Scrolling: Implement Infinite Scroll functionality, allowing users to explore content continuously without interruptions.",
"Interactive Carousel for Categories: Engage users with visually appealing carousels showcasing various categories, enhancing the presentation of content.",
"User-Friendly Dropdown Lists and Modals: Improve user interaction with intuitive Dropdown Lists and Modals, ensuring a seamless and interactive interface.",
"On the homepage, you will find the list of all the hotels that were listed on the webapp by hosts from all around the country. you can choose froom various categories listed"
          ],
          "techStack": ["React Js", "Redux", "Html", "Css"],
          "liveLink": "tomato-seven.vercel.app/",
          "image": Tomatino
     },
     {
          "name": "Tirasya Real Estate Company Website",
          "slug": "tirasya-website",
          "description": "Discover Tirasya’s new luxury real estate project, offering elegant homes crafted for ultimate comfort and style",
          "features": [
               "Custom design tailored to LumberJack Studio’s branding",
               "Fully responsive across devices",
               "Interactive animations using Framer Motion",
               "Component-based structure developed in React.js"
          ],
          "techStack": ["Html", "Css", "Javascript"],
          "liveLink": "tirasya.com",
          "image": tirasya,
     },
     {
          "name": "Forcon Infra Website",
          "slug": "forcon-infra-website-design-and-development",
          "description": "The Forcon Infra website is a sleek and professional platform designed to represent the company’s expertise in infrastructure solutions. The design was created in Figma and developed into a fully functional and responsive website using React.js and Framer Motion.",
          "features": [
               "Figma design tailored to Forcon Infra’s services",
               "Fully optimized for all screen sizes",
               "Smooth animations with Framer Motion",
               "Built with React.js for scalability and performance"
          ],
          "techStack": ["Figma", "React.js", "Framer Motion"],
          "liveLink": "forconinfra.com",
          "image": fi1
     },
     {
          "name": "Quality Digital Color Lab Website",
          "slug": "quality-digital-website-design-and-development",
          "description": "The Quality Digital Color Lab website is a vibrant and responsive platform designed to showcase the lab’s expertise in digital printing and photography services. The design reflects the brand’s creativity and professionalism, developed using React.js and enhanced with Framer Motion.",
          "features": [
               "Custom Figma design for a creative and professional feel",
               "Optimized for desktop, tablet, and mobile devices",
               "Engaging animations powered by Framer Motion",
               "Component-based development in React.js"
          ],
          "techStack": ["Figma", "React.js", "Framer Motion"],
          "liveLink": "qualitydigitalcolorlab.com",
          "image": qualityDigital
     },
     {
          "name": "Shivam Pawar Portfolio Website",
          "slug": "portfolio-development",
          "description": "The Shivam Pawar portfolio website is a sleek and professional platform showcasing personal projects, skills, and accomplishments. Designed in Figma, it was developed into a functional and interactive website using React.js and Framer Motion.",
          "features": [
               "Custom Figma design reflecting personal branding",
               "Fully responsive for all devices",
               "Interactive animations using Framer Motion",
               "Built with React.js for performance and modularity"
          ],
          "techStack": ["Figma", "React.js", "Framer Motion"],
          "liveLink": "shivampawar.vercel.app",
          "image": sp
     },
     {
          "name": "VK Food Website",
          "slug": "vk-food-website-design-and-development",
          "description": "The VK Food website is a modern and visually appealing platform created to showcase the brand’s food products and services. Designed in Figma and developed using React.js, with smooth animations powered by Framer Motion.",
          "features": [
               "Custom Figma design emphasizing VK Food’s branding",
               "Responsive design for all devices",
               "Smooth transitions and hover effects using Framer Motion",
               "Built with React.js for scalability and performance"
          ],
          "techStack": ["Figma", "React.js", "Framer Motion"],
          "liveLink": "vkfood.in",
          "image": vk
     },
     {
          "projectTitle": "Climate App",
          "description": "A real-time weather application providing detailed climate information for locations worldwide. Built with Next.js, TanStack Query, and OpenWeather API for accurate and efficient data fetching and display.",
          "features": [
               "Real-time weather updates with temperature, humidity, wind speed, and condition icons.",
               "Search functionality for finding weather details of any city.",
               "Geolocation-based weather data fetching for the user's current location.",
               "Responsive design optimized for mobile, tablet, and desktop devices.",
               "Error handling for invalid city names or API issues."
          ],
          "techStack": ["Figma", "React.js", "Framer Motion", "Shadcn UI", "Tanstack"],
          "liveLink": "climate-production.vercel.app/",
          "image": cp
     }

]
