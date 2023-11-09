import { useContext } from 'react';
import { ClassesContext } from '../../context';
import './styles.css';

const Sidebar = () => {
	const {classes, activeClass, setActiveClass} = useContext(ClassesContext);

	return (
		<div className='flex flex-col gap-4 fixed left-0 p-2 text-xl bg-slate-100 sidebar'>
			<p className='self-center text-4xl'>Classes</p>
			<nav>
				<ul className='flex flex-col classes'>
					{classes.map((element, index) => 
						<li 
							className='text-base cursor-pointer hover:bg-black hover:text-white'
							onClick={() => {
								setActiveClass(index);
							}}
							key={index}
						>
							<p>{element.title}</p>
						</li>
					)}
				</ul>
			</nav>
		</div>
	)
};

export { Sidebar }