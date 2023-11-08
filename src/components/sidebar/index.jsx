import './styles.css';

const Sidebar = () => {
	return (
		<div className='flex flex-col gap-4 fixed left-0 p-2 text-xl bg-slate-100 sidebar'>
			<p className='self-center text-4xl'>Classes</p>
			<nav>
				<ul className='flex flex-col gap-2 classes'>
					<li>Title of the Class</li>
					<li>Title of the Class</li>
					<li>Title of the Class</li>
					<li>Title of the Class</li>
					<li>Title of the Class</li>
					<li>Title of the Class</li>
				</ul>
			</nav>
		</div>
	)
};

export { Sidebar }