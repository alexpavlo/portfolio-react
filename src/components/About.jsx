import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>I am engaged in Front-end development, layout from 0 and write a little Back-end on Node.JS
Front-end: React.js, Redux, axios, JavaScript, Styled components, material-UI, NEXT..JS
Back-end: Node.js (express.js, Next.js, MongoDB)</p>
            <br/>
            <p className='text-xl'>I am good at layout, I use BEM preprocessors (Scss, Sass, Less), only PixelPefrect.
In my spare time I enjoy React-native
I am using Gulp, Webpack for building. NPM package managers, composer
I use Git to publish projects on GitHub, GitLab
Languages: Russian-Fluent. English-speaking, reading literature and documentation</p>

        </div>
    </div>
  )
}

export default About