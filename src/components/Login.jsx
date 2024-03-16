import React from 'react';
import { motion } from 'framer-motion';
import Phone from '../assets/phone.svg';
import Headphone from '../assets/head-phone.svg';
import Location from '../assets/location.svg';
import Mail from '../assets/mail.svg';

import { staggerContainer, textVariant, svgVariants } from '../utils/motion';

const Login = () => {
  return (
    <div name='about' className='w-full h-screen bg-white text-gray-950'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[800px] w-full '> 
            <motion.div variants={staggerContainer}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: false, amount: 0.25 }}            
                          className='sm:text-center pb-8 pl-4 '>
              
              <motion.div 
                variants={svgVariants}
                initial="hidden"
                whileInView="show">
                <img className='w-[50px] h-[50px] relative left-[350px] top-[-10px]' src={Headphone} alt="headphone" />
              </motion.div>
              
              <motion.div variants={textVariant(0.5)}>
                <h1 className='text-4xl font-bold'>Get in Touch!</h1>
                <p className='text-4xl text-[#522A8F]'>Bake your mark with pango</p>
              </motion.div>
            </motion.div>         
        </div>    


        <div className='max-w-[1400px] w-full grid sm:grid-cols-2 gap-20   px-4'>
          <form method='POST' action="https://getform.io/f/rbegqmwb">
          <div className='relative bottom-[-50px] sm:text-left text-xl font-bold'>
            <h1>
                Name
            </h1>
            <input className='w-[550px] my-4 p-2 opacity-50 inline border-b-4 border-pink-600' type="text" placeholder='Your Name is' name='name' />
            <h2>
                Email
            </h2>
            <input className='w-[550px] my-4 p-2 opacity-50 inline border-b-4 border-pink-600'  type="email" placeholder='Where can we email you' name='email' />
            <h3>
                Phone number
            </h3>
            <input className=' w-[550px] my-4 p-2 opacity-50 inline border-b-4 border-pink-600'  type="tel" placeholder='Your phone number' name='phone' />
            <h4>
                Message
            </h4>
            <textarea className='w-[550px] my-4 p-2  opacity-50 border-0 outline-none inline border-b-4 border-pink-600 placeholder:translate-y-20 ' name="message" rows="4" cols="24" placeholder='Message'></textarea>
            <div className='text-center'>
              <button className='w-[200px] bg-[#430898] text-2xl text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto  rounded-full'>Submit</button>
            </div>
          </div>  
          </form>

          {/* Right side*/}      
          <div 
            
            className='w-full grid grid-cols-2 t'>

            <div className='flex flex-row'>
              <div className='w-[205px] h-[265px] absolute top-[250px] right-[620px] bg-[#4A1A8F] rounded-3xl -rotate-[9deg] flex justify-center items-center text-gray-100'>
                <img className=' w-[55px] h-[55px] object-contain' src={Phone} alt="phone" />  
                <h1 className='absolute bottom-3 font-medium text-lg'>+91 9820840946</h1>           
              </div>              
            </div>

            <div className='flex flex-row'>
              <div className='w-[205px] h-[265px] relative left-[50px] bg-[#7AC0D0] rounded-3xl rotate-[18deg] text-gray-100 text-4xl font-medium text-left pt-32 pl-2  '>
                <p>Click</p>
                <p >on a</p>
                <p>Button</p>
              </div>             
            </div>

            <div className='flex flex-row'>
              <div className='w-[205px] h-[265px] relative bottom-[-40px] bg-[#EFCB45] rounded-3xl rotate-[25deg] flex justify-center items-center text-gray-100'>
                <img className=' w-[55px] h-[55px] object-contain' src={Location} alt="location" />  
                <h1 className='absolute bottom-[40px] right-[-20px] font-semibold text-xl'>Mahalaxmi,
                  <span className='relative bottom-[-25px] right-[120px]'>
                    Mumbai
                  </span>
                  </h1>           
              </div>
            </div>

            <div className='flex flex-row'>  
              <div className='w-[205px] h-[265px] bg-[#9FD643] rounded-3xl -rotate-[12deg] flex justify-center items-center text-gray-100'>
                <img className=' w-[55px] h-[55px] object-contain' src={Mail} alt="mail" />  
                <h1 className='absolute bottom-[40px] right-[-55px] font-semibold text-lg'>azhar.ali.sayed
                  <span className='relative bottom-[-25px] right-[140px]'>
                    @pango.in
                  </span>
                </h1>           
              </div>
            </div>  
          </div>   
                
        </div>
    </div>
</div>
  )
}

export default Login