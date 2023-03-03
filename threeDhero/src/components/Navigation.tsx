import React from "react";

function Navigation() {
	return (
		<div className='px-10 py-5 w-full text-gray-400'>
			<ul className='flex items-center   '>
				<li className=' cursor-pointer hover:bg-gray-400 px-2 rounded hover:text-white mx-12 '>
					Home
				</li>
				<li className=' cursor-pointer hover:bg-gray-400 px-2 rounded hover:text-white mx-12'>
					About
				</li>
				<li className=' cursor-pointer hover:bg-gray-400 px-2 rounded hover:text-white mx-12'>
					Projects
				</li>
				<li className=' cursor-pointer hover:bg-gray-400 px-2 rounded hover:text-white mx-12'>
					Contact
				</li>
			</ul>
		</div>
	);
}

export default Navigation;
