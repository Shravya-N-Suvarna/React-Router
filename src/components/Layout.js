import React from 'react'
import { Link } from 'react-router-dom'


export default function Layout(props) {
  return (
    <>
    {/* <nav className="bg-slate-300 shadow-lg "> */}
    <nav className='bg-slate-300 sm:bg-slate-400 md:bg-slate-500 lg:bg-slate-700 xl:bg-slate-600 lg:text-white shadow-lg p-[18px]'>


        {/* <ul className='flex gap-4'> */}
        <ul className='flex justify-end gap-4'>
            <li>
                <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                        </ul>
                        </nav>
                        <div>{props.children}</div>
                        </>
    
  )
}
