import React from "react";

function Navigation() {
	return (
		<div className='px-10 py-5'>
			<ul className='flex items-center justify-evenly'>
				<li className=' cursor-pointer hover:bg-fuchsia-400 px-2 rounded hover:text-white '>
					Home
				</li>
				<li className=' cursor-pointer hover:bg-fuchsia-400 px-2 rounded hover:text-white '>
					About
				</li>
				<li className=' cursor-pointer hover:bg-fuchsia-400 px-2 rounded hover:text-white '>
					Projects
				</li>
				<li className=' cursor-pointer hover:bg-fuchsia-400 px-2 rounded hover:text-white '>
					Contact
				</li>
			</ul>
		</div>
	);
}

export default Navigation;
