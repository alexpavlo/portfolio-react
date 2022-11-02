import React from 'react'
import halloween from "../assets/portfolio/halloween.png";
import reactSnikers from "../assets/portfolio/reactSnikers.png";
import reactPizza from "../assets/portfolio/reactPizza.png";
import typingSpeed from "../assets/portfolio/typingSpeed.png"



const Portfolio = () => {
    const portfolios = [
        {
          id: 1,
          src: halloween,
          demo: 'https://alexpavlo.github.io/halloween/',
          code: 'https://github.com/alexpavlo/halloween',
        },
        {
          id: 2,
          src: reactPizza,
          demo: 'https://react-pizza-test.herokuapp.com/',
          code: 'https://github.com/alexpavlo/pizza-store',
        },
        {
          id: 3,
          src: reactSnikers,
          demo: 'https://alexpavlo.github.io/react-sneakers/',
          code: 'https://github.com/alexpavlo/react-sneakers',
        },
        {
          id: 4,
          src: typingSpeed,
          demo: 'https://reviroio-frontend-assignment.vercel.app/',
          code: 'https://github.com/alexpavlo/reviroio-frontend-assignment/tree/main/first-task-typing-speed',
        },
        {
          id: 5,
          src: installNode,
          demo: 'https://react-pizza-test.herokuapp.com/',
          code: 'https://github.com/alexpavlo/pizza-store',
        },
        {
          id: 6,
          src: reactWeather,
          demo: 'https://react-pizza-test.herokuapp.com/',
          code: 'https://github.com/alexpavlo/pizza-store',
        },
      ];

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out of my work right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {portfolios.map(({id, src, demo, code})=>(
                
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <a href={demo} target="_blank" rel='noreferrer' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a> 
                        <a href={code} target="_blank" rel='noreferrer' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio

//сделать ссылки на демо и код, вставить изображение скринов