import {animate, motion} from "framer-motion";

//variants
const stairAnimation ={
    intiial:{
        top:"0%",
    },
    animate:{
        top:"100%",
    },
    exit:{
        top:["100%","0%"],
    },
};

//Calculaate the reverse index fat staggred delay
const reverseIndex = (index) => {
    const totalSteps = 6; //nnumber of steps
    return totalSteps - index - 1;
};

const Stairs = () => {
  return (
   <>
   {
    /*render 6 motion divs, each representing a step of the stairs each div will have the same animation defnied by the stairsAnimation obj
    The delay for each div is calcualted sinamically based on its reversed index, creating a staggered effect with decreasing delay */
   }
   {[...Array(6)].map((_,index)=>{
    return(
    <motion.div 
    key={index} 
    variants = {stairAnimation} 
    initial="initial"
    animate="animate" 
    exit="exit" 
    transition = {{
        duration: 0.4,
        ease: 'easeInOut',
        delay:reverseIndex(index)*0.1,
    }}
    className="h-full w-full bg-[#6252f2] relative"
    />
);
   })}
   </>
  )
}

export default Stairs