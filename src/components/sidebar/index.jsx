import { useContext } from 'react';
import { ClassesContext } from '../../context';
import './styles.css';

const Sidebar = () => {
	const {classes} = useContext(ClassesContext);

	return (
		<div className='flex flex-col gap-4 fixed left-0 p-2 text-xl bg-slate-100 sidebar'>
			<p className='self-center text-4xl'>Classes</p>
			<nav>
				<ul className='flex flex-col classes'>
					{classes.map(element => 
						<li className='text-base cursor-pointer hover:bg-black hover:text-white'>
							<p>{element}</p>
						</li>
					)}
				</ul>
			</nav>
		</div>
	)
};

export { Sidebar }