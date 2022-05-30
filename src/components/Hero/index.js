import React from "react";
import "./Hero.css";
function Hero(){
    return(
        <section  className="hero">
            <div className="info">
                <h1 className="info-subtitle">
                    Check the <br/> best food
                </h1>
                <p>The best food <br/>with the best ingredients</p>
                <button className="info-button">
                    Book a table
                </button>
            </div>
            <img className="hero-image" 
                src="https://i.postimg.cc/zD21m9fG/hero.png"
                alt="Spaggetti and veggies"
            />
        </section>
    );
}

export {Hero};