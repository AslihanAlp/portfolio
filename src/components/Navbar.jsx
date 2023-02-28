import { FaBars, FaTimes,FaGithub, FaLinkedin, FaMedium} from "react-icons/fa"
import  {useState}  from "react"
import {HiOutlineMail, } from "react-icons/hi"
import {BsFillPersonalLinesFill} from "react-icons/bs"

function Navbar() {

const [nav, setNav]= useState(false)
const handleClick=()=>{
  setNav(!nav)
}

  return (
    <div  className='fixed w-full h-20 bg-[#010026] flex justify-between items-center px-4 text-[#FDCC49] '>
        <div className=" text-[#DC4492] font-[playfair] font-bold text-4xl ">AA</div>
       { /* menu */}
          <ul className="hidden md:flex ">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
          </ul>
       
        {/*Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10" >
         {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/*Mobile Menu */}
        <ul  className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#010026] flex flex-col justify-center items-center"}>
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Projects</li>
          <li className="py-6 text-4xl">Contact</li>
          </ul>
        {/*Social-icons */}
        <div className="hidden lg:flex flex-col left-0 top-[35%] fixed">
          <ul>
            <li className=" flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000]">
              <a className="flex justify-between items-center w-full text-gray-300"
              href="/">
                Medium <FaMedium size={30} />
              </a>
            </li>

            <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
              <a className="flex justify-between items-center w-full text-gray-300"
              href="/">
                Linkedin <FaLinkedin  size={30}/>
              </a>
            </li>
            
            <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
              <a className="flex justify-between items-center w-full text-gray-300"
              href="/">
                Github <FaGithub  size={30}/>
              </a>
            </li>

             <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
              <a className="flex justify-between items-center w-full text-gray-300"
              href="/">
                Gmail <HiOutlineMail size={30} />
              </a>
            </li>
          </ul>
          </div>
        </div>
    
    
   
  )
}

export default Navbar