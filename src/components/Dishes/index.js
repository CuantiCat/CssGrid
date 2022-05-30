import React from "react";
import "./Dishes.css";

function Dishes(){
    return(
        <section className="dishes">
            <h2 className="dishes-title">Our services</h2>
            <div className="dishes-grid">
                <img className="dishes-item dishes-item__big" src="https://i.postimg.cc/k5qHRc5H/video.png" alt="pasta"/>
                <img className="dishes-item" src="https://i.postimg.cc/qR0pRyfB/dish1.png" alt="veggie bowl"/>
                <img className="dishes-item" src="https://i.postimg.cc/Wp5sNd5j/dish2.png"/>
                <img className="dishes-item" src="https://i.postimg.cc/hPwgmHF5/dish3.png"/>
                <img className="dishes-item" src="https://i.postimg.cc/MG08hHnC/dish4.png"/>
            </div>
        </section>
    );
}

export {Dishes};