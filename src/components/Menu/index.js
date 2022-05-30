import React from "react";
import "./Menu.css";

function Menu(){
    return(
        <section className="menu">
            <h2 className="menu-title">Home menu</h2>
            <div className="menu-grid">
                <div className="menu-grid-item">
                    <img src="https://i.postimg.cc/15g1yJgc/plate1.png" alt="plate with pasta"/>
                </div>
                <div className="menu-grid-item">
                    <img src="https://i.postimg.cc/cH1P2my3/plate2.png" alt="plate with pasta"/>
                </div>
                <div className="menu-grid-item">
                    <img src="https://i.postimg.cc/rs3bd2dG/plate3.png" alt="plate with pasta"/>
                </div>
                <div className="menu-grid-item">
                    <img src="https://i.postimg.cc/Fsk8MzqT/plate4.png" alt="plate with pasta"/>
                </div>
                <div className="menu-grid-item">
                    <img src="https://i.postimg.cc/rw63Mc2M/plate5.png" alt="plate with pasta"/>
                </div>
            </div>
        </section>
    );
}

export{Menu};