import { useContext } from 'react';
import { ClassesContext } from '../../context';
import './styles.css';

const PracticeExercise = ({instructions, renderExercise, isRenderAnswer, setIsRenderAnswer}) => {
	return (
		<div className='flex flex-col justify-between gap-4 p-5 my-5 bg-slate-100 rounded-xl practice-exercise'>
            <header>
                <p className='text-3xl mb-3 font-medium'>Time to practice</p>
                <p className='text-xl font-medium'>{instructions}</p>
            </header>
            <section>
                {renderExercise ? renderExercise(isRenderAnswer) : renderExercise}
            </section>
            <div className='flex justify-around'>
                <button 
                    className=' border-black border-2 bg-black text-white px-6 py-3 rounded-lg'
                    onClick={()=>{
                        setIsRenderAnswer(true)
                        console.log(isRenderAnswer)
                    }}
                    >
                    Show me the answer
                </button>
                <button className=' border-black border-2 px-6 py-3 rounded-lg'>New exercise</button>
            </div>            
		</div>
	)
};

export { PracticeExercise }