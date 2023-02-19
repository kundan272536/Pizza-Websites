import React from 'react'
import "../style/About.css"
import MultiplePizzas from "../assets/multiplepizza.jpg"
function About() {
  return (
    <div className='about'>
      <div className='aboutTop'style={{backgroundImage:`url(${MultiplePizzas})` }}></div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>Pizzeria is another word for a pizza restaurant or pizza parlor 
         a place where pizzas are made, sold and served to customers. 
        The term pizzeria comes from the product, pizza, and the suffix, 
        eria, which translates from italian to “place of” in english. 
        Together, pizzeria means “place of pizza”.Use this free pizza 
        business plan to create the best pizzeria restaurant or shop 
        in town that's also a thriving, profitable business! 
        Includes market analysis, strategy, more. Works for any other 
        type of restaurant business plan, too. Free download available 
        to customize the plan in Word or PDF for your business. </p>
      </div>
    </div>
  )
}

export default About
