import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ClassesContext } from '../../context';
import { PracticeExercise } from '../practiceExercise';
import './styles.css';

const ClassContent = () => {
    const {classes, activeClass, isRenderAnswer, setIsRenderAnswer, firstClassValues, setFirstClassValues} = useContext(ClassesContext);

    useEffect(()=>{
        if(typeof window?.MathJax !== "undefined"){
            window.MathJax.typesetClear()
            window.MathJax.typeset()
        }
      },[activeClass, isRenderAnswer, firstClassValues])

    return (
        <div className='flex justify-center absolute right-0 pb-10 class-content-container'>
            <div className='flex flex-col gap-5 items-center px-4 class-content'>
                <h2 className='text-center text-5xl py-6 px-2 font-medium'>{classes[activeClass].title}</h2>
                <div className=' text-lg'>
                    <p>Have not watched the lesson? Watch it <a href='https://www.3blue1brown.com/topics/linear-algebra' className=' text-blue-500'>here</a>.</p>
                </div>
                <section className=' text-xl'>
                    <p>{classes[activeClass].preview}</p>
                    {classes[activeClass].exercises?.map((exercise, index) => (
                        <div key={index}>
                            <h3 className='my-5 text-3xl font-medium text-center'>{exercise.title}</h3>
                            <p>{exercise.description}</p>
                            <PracticeExercise
                                id={index + 1}
                                instructions = {exercise.instructions}
                                renderExercise = {exercise.renderExercise}
                                isRenderAnswer = {isRenderAnswer}
                                setIsRenderAnswer = {setIsRenderAnswer}
                                firstClassValues = {firstClassValues}
                                setFirstClassValues = {setFirstClassValues}
                            />
                        </div>
                    ))}
                </section>
            </div>            
        </div>
    );
};

export { ClassContent }