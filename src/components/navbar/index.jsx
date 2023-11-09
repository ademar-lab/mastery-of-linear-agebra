import './styles.css';

const Navbar = () => {
	return (
		<nav className='flex justify-between items-center px-6 py-2 fixed z-10 bg-white w-full navbar'>
			<h2 className='text-xl cursor-pointer'>
			<a href='/'>Mastery of Linear Algebra</a>
			</h2>
			<ul className='flex gap-6 items-center'>
				<li className='cursor-pointer'>
					<a href='/'>Home</a>
				</li>
				<li className='cursor-pointer px-2 py-1 bg-black text-white border-2 border-black rounded-2xl hover:bg-white hover:text-black'>
					<a href='/'>Contribute</a>
				</li>
			</ul>
		</nav>
	)
};

export { Navbar }