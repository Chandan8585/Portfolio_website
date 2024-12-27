import nomadnest from '../assets/projects/mockups/nomad_nest.png'
import LrProject from '../assets/projects/mockups/LR_crm.png'
import tirasya from '../assets/projects/mockups/tirasya.png'
import Tomatino from "../assets/projects/mockups/movie_rev.png"
import Serverless from "../assets/projects/mockups/serverless.png"


export const projects = [
     {
          "name": "Nomad Nest Hotel Booking Website",
          "slug": "hotel-booking-website",
          "description": "A comprehensive hotel booking application developed using the MERN stack, featuring advanced functionalities such as real-time search and filtering, booking management, secure payment integration with Razorpay, user authentication and an intuitive user interface for seamless user experience",
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
          "name": "Serverless Sales Analysis Report",
          "slug": "serverless-sales-analysis-report-automation",
          "description": "Implemented a serverless solution using AWS Lambda to automate daily sales report generation by querying an Amazon EC2-hosted LAMP database. The system utilizes Amazon CloudWatch Events to trigger the Lambda function and sends reports via Amazon SNS to administrators, all while securing database credentials with AWS Systems Manager Parameter Store.",
          "features": [
              "AWS Lambda for automated report generation",
              "Amazon EC2-hosted LAMP database integration",
              "Triggered by CloudWatch Events",
              "Reports sent via Amazon SNS to administrators",
              "Secured credentials with AWS Systems Manager Parameter Store"
          ],
          "techStack": ["AWS Lambda", "Amazon EC2", "Amazon SNS", "Amazon CloudWatch", "AWS Systems Manager Parameter Store", "Python"],
          "liveLink": "example.com", 
          "image": Serverless
      }
      
  
]
