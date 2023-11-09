const Home = () => {
	return (
		<>
			<div className='flex flex-col items-start gap-14 absolute top-1/4 ml-10 w-10/12'>
				<h1 className='text-9xl'>The place to practice your Linear Algebra skills</h1>
				<a className='bg-black text-white px-16 py-10 rounded-lg text-3xl' href='/classes'>Practice Now!</a>
			</div>			
		</>
	)
}

export { Home }