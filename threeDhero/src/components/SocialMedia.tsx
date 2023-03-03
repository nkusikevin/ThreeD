import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

function SocialMedia() {
	return (
		<div className=' absolute  top-0 right-0 '>
			<div className='flex flex-col justify-center border-l border-gray-400 h-screen  p-5'>
				<AiOutlineInstagram className='cursor-pointer hover:text-fuchsia-400  my-8  ' />
				<AiOutlineTwitter className='cursor-pointer hover:text-sky-400  my-8  ' />
				<FaLinkedinIn className='cursor-pointer hover:text-blue-400   my-8  ' />
				<FaFacebookF className='cursor-pointer hover:text-blue-400   my-8  ' />
			</div>
		</div>
	);
}

export default SocialMedia;
