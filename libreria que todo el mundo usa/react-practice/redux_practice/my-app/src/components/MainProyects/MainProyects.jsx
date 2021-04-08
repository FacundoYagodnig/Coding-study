import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import imagen from '../assets/fondopreview.jpg'
import atom from '../assets/atom.png'
import jsicon from '../assets/js.png'
import html from '../assets/html-5.png'
import css from '../assets/css.png'
import reactRouterIcon from '../assets/reactroutericon.png'
import reduxIcon from '../assets/reduxicon.png'
import nodejsIcon from '../assets/nodejs.png'


const MainProyectsContainer = styled.div`
  height:100vh;
  width: 100%;
  background-color: rgb(189, 189, 245);
  justify-content: space-around;
  align-items: center;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: 50% 50%;
  gap: 10px;
  padding-top: 2%;
`
const ColStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  grid-column: 1;
  grid-row: 1;
  text-align: center;
  cursor: pointer;

  &:hover{
  transform: translateX(0%);
  width: 120%;
  height: 120%;
  }
  
`

const ColStyled2 = styled.div`
 width: 100%;
  height: 100%;
  background-color: white;
  grid-column: 2;
  grid-row: 1;
  text-align: center;
  color: white;
  cursor: pointer;
  &:hover {
    transform: translateX(-10%);
  width: 120%;
  height: 120%;
  }
`
const ColStyled3 = styled.div`
 width: 100%;
  height: 100%;
  background-color: white;
  grid-column: 3;
  grid-row: 1;
  text-align: center;
  &:hover {
    transform: translateX(-15%);
  width: 120%;
  height: 120%;
  transition: all;
  }
`

export const MainProyects = () => {
    return (
        <MainProyectsContainer>
           <ColStyled>
           <a rel="noopener noreferrer" href='https://vercel.com/facundoyagodnig/my-first-ecommerce-js/ZmjWrdGkkiqTx1Sj1BS22mmqwPpB' target='_blank'>
               <div className='card'>
                   <h2>PROYECTS</h2>
                    <div className='body-card'>
                       <img src={imagen} alt=""/>
                    </div>
               </div>
               </a>
               </ColStyled>
         
            <ColStyled2>
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
                           <img className='reacticon' src={nodejsIcon} alt=""/>
                         </div>
                     
                    </div>
            </div>
            </Link>
            </ColStyled2>
           
           <ColStyled3>
                <Link to='/About'> 
                 <div className='card'>
                    <h2>ABOUT ME</h2>
                    <div className='body-card'>
                       <img  src={imagen} alt=""/>
                    </div>
                 </div>
                </Link>
            </ColStyled3>
           <div className='col4'><div>
                    <h1>CONTACT</h1>
               </div></div>
           
               </MainProyectsContainer>
    )
}


