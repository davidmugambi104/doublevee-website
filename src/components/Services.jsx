import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaShuttleVan,FaBeer} from 'react-icons/fa'
import { FaPlay } from 'react-icons/fa';



export default class Services extends Component {
    state={
        services:[
            {
                icon: <FaCocktail />,
                title: "Cocktail",
                info: "Indulge in a tantalizing array of handcrafted cocktails, expertly concocted to elevate your stay. Sip and savor as you unwind in style, with each sip a journey into flavor paradise."
              },
              {
                icon: <FaPlay />,
                title: "Engaging Pool Games",
                info: "Enjoy hours of entertainment with a variety of pool games. From classic 8-ball and 9-ball to creative variations and tournaments, there's a game for every skill level. Perfect for friendly matches or competitive play, gather your friends and make your mark on the table."
              }              
              ,
              
              {
                icon: <FaShuttleVan />,
                title: "FREE PARKING",
                info: "We offer free parking and ensure absolute security"
              },
              {
                icon: <FaBeer />,
                title: "Unlimited Beer",
                info: "Quench your thirst with our unlimited beer offering, where every pour promises refreshment and relaxation. From crisp lagers to robust ales, our selection caters to discerning palates, ensuring that every moment is accompanied by the perfect brew."
              },

        ]
    }
    render() {
        return (
            <div className="container-fluid services">
             <Title title="Services" />
                <div className="row">
                   {this.state.services.map((item, index) => {
                      return(
                        <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                            <div className="card shadow-lg border-0 p-4">
                                <article className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                                </article>              
                           </div>
                        </div>
                      )
                   })}
                </div>
            </div>
        )
    }
}