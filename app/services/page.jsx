"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num:"01",
    title:"AI Code Tutor",
    description:"AI tutor built and trained off of GPT-4o that helps students with Leetcode problems by giving suggestions, hints, and reinforces critical knowledge",
    href:"https://github.com/Nunziomvd/AI-Tutor"
  },
  {
    num:"02",
    title:"Vehicle Fleet Managment",
    description:<text>Online SQL database made with react.js and other frameworks that focused on location, status, services of construction vehicles and equipments. <br></br> (Sold, only prototype on github)</text>,
    href:"https://github.com/Nunziomvd/VFMprototype"
  },
  {
    num:"03",
    title:"C Interpreter",
    description:"Created a High Level Languaged interpreter using C that is able to handle dynaimc arrays, hash tables, garbage collection, and more",
    href:""
  },
  {
    num:"04",
    title:"Senior Digital Literacy",
    description:"Site full of different modules and lessons to help seniors become fluent in using technology such as their phones, tvs, and computers correctly and safely",
    href:"https://github.com/Nunziomvd/DigitalLiteracy"
  },
]

import {motion} from "framer-motion";

const Services = () => {
  return(
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
        initial = {{opacity: 0}} 
        animate = {{
          opacity:1,
          transition:{delay:2.4,duration:0.4,ease:"easeIn"},
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service,index)=>{
            return(
              <div key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group"
              
              >
                {/*top*/}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link 
                    href={service.href} 
                    className="w-[70px] h-[70px] rounded-full
                            bg-white group-hover:bg-accent transition-all 
                            duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/*title*/}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/*description*/}
                <p className="text-white/60">{service.description}</p>
                {/*border*/}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
};

export default Services