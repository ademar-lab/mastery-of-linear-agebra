import { useEffect } from 'react';
import { useContext } from 'react';
import { ClassesContext } from '../../context';
import './styles.css';

const ClassContent = () => {
    const {classes, activeClass} = useContext(ClassesContext)

    return (
        <div className='flex flex-col items-center absolute right-0 class-content'>
            <h2 className='text-center text-5xl py-6 px-2 font-medium'>{classes[activeClass].title}</h2>
            <div className=' text-lg'>
                <p>Have not watched the class? Watch it <a href='https://www.3blue1brown.com/topics/linear-algebra' className=' text-blue-500'>here</a>.</p>
            </div>
        </div>
    );
};

export { ClassContent }