import React from 'react'
import {Link} from 'react-router-dom'

import imagen from '../assets/fondopreview.jpg'
import atom from '../assets/atom.png'
import jsicon from '../assets/js.png'
import html from '../assets/html-5.png'
import css from '../assets/css.png'
import reactRouterIcon from '../assets/reactroutericon.png'
import reduxIcon from '../assets/reduxicon.png'


export const MainProyects = () => {
    return (
        < div className='Main-proyects-container'> 
           <div className='col'>
           <a rel="noopener noreferrer" href='https://vercel.com/facundoyagodnig/my-first-ecommerce-js/ZmjWrdGkkiqTx1Sj1BS22mmqwPpB' target='_blank'>
               <div className='card'>
                   <h2>PROYECTS</h2>
                    <div className='body-card'>
                       <img src={imagen} alt=""/>
                    </div>
               </div>
               </a>
            </div>
         
            <div className='col2'>
            <Link to='/Skills'> 
            <div className='card'>
                   <div><h2>SKILLS</h2></div> 
                    <div className='body-card-skills'>
                      <div className='container-icons1'><img className='reacticon' src={html} alt=""/>
                        <img className='reacticon' src={css} alt=""/>
                         <img className='reacticon' src={jsicon} alt=""/>
                       </div> 
                       <div className='container-icons2'>  
                           <img className='reacticon' src={atom} alt=""/>
                           <img className='reacticon' src={reactRouterIcon} alt=""/>
                           <img className='reacticon' src={reduxIcon} alt=""/>
                         </div>
                     
                    </div>
            </div>
            </Link>
            </div>
           
           <div className='col3'>
                <Link to='/About'> 
                 <div className='card'>
                    <h2>ABOUT ME</h2>
                    <div className='body-card'>
                       <img  src={imagen} alt=""/>
                    </div>
                 </div>
                </Link>
            </div>
           <div className='col4'><div>
                    <h1>CONTACT</h1>
               </div></div>
           
        </div>
    )
}


