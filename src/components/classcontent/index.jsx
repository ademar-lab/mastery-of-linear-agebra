import { Sidebar } from '../sidebar';
import './styles.css';

const ClassContent = () => {
    return (
        <div className='flex flex-col items-center absolute right-0 class-content'>
            <Sidebar/>
            <h2>Content</h2>
            <div className='fill bg-red-200'></div>
            <div className='fill bg-blue-300'></div>
            <div className='fill bg-red-200'></div>
            <div className='fill bg-blue-300'></div>
            <div className='fill bg-red-200'></div>
            <div className='fill bg-blue-300'></div>
            <div className='fill bg-red-200'></div>
            <div className='fill bg-blue-300'></div>
        </div>
    )
};

export { ClassContent }