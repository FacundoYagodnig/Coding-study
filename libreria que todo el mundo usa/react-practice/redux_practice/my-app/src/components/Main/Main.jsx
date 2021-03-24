import React from 'react'
import {Link} from 'react-router-dom'

export const Main = () => {
    return (
        <main className='container'>
           <div className='fotoPrincipal'>
               <img  src='../img/FotoPerfil.jpg' alt="" srcset=""/>
           </div>
           <div className='grid-column-main'>
               <h1>HI, I'M FACUNDO YAGODNIG AND I'M A FULL STACK DEVELOPER</h1>
               <Link to='/proyects'>
                   <button className='button'><strong>CLICK ME PLEASE :)</strong></button>
               </Link>
           </div>
        </main>
    )
}


