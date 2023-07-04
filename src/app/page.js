import Image from 'next/image';
import styles from './page.module.css';
import {BsMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import deved from './public/dev-ed-wave.png';
import design from './public/design.png'
import code from './public/code.png'
import consulting from './public/consulting.png'

export default function Home() {
  return (
    <main className='bg-white px-10'>
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl'>developedbydaniel</h1>
          <ul className='flex items-center'>
            <li>
              <BsMoonStarsFill className='cursor-pointer text-2xl'/>
            </li>
            <li>
              <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a>
            </li>
          </ul>
        </nav>
        <div className='text-center p-10 py-10'>
          <h2 className='text-5xl py-2 text-teal-600'>Daniel Adegbite</h2>
          <h3 className='text-2xl py-2'>Developer</h3>
          <p className='text-md py-5 leading-8 text-gray-800'>
            Freelancer providing services for programming.You are welcome to partner up on projects and products.
          </p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <AiFillTwitterCircle/>
          <AiFillLinkedin/>
          <AiFillGithub/>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
          <Image src={deved} layout="fill" objectFit="cover" />
        </div>
      </section>
        

      <section>
          <div className='my-10'>
              <h3 className='text-3xl py-1'>Services i offer</h3>
              <p className='text-md py-1 leading-8 text-gray-800'>
                 Since the beginning of my freelance developer,i have done remote work for
                 <span className="text-teal-500"> agencies </span>
                consulted for <span className="text-teal-500">startups </span>
                and collaborated with talanted people to create digital products
                for both business and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800">
                  I offer from a wide range of services, including brand design,
                  programming and teaching.
              </p>
          </div>
          <div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={design} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
          </div>
      </section>
    </main>
  )
}
