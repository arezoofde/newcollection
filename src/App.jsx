import './style.css'
import React from 'react';
import Header from './Component/Layer/Header'
import Footer from './Component/Layer/Footer'

export default function App(){
return(
  <>
   <div className="banner">
     <Header />
        <div className="collection">
            <h1>New Collection</h1>
        </div>
    </div>
    <div className="comment">
        <p> &clubsuit; Arezoo.FDE &clubsuit; is a collection of modern </p>
        <p>handmade ceramic, inspired by the</p>
        <p>nature's uniqes shapes and tones</p>
    </div>
    <hr style={{width: "90%"}} />
    <div className="arrivals">
        <div>
            <h2>new arrivals</h2>
            <div className="img_arrivals">
                <div>
                    <img style={{width: "100%", height: "170px"}} src="../public/pic/Frame.jpg" />
                    <div className="info_arrivals">
                        <p>mirror</p>
                        <p>5$</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div className="story">
        <img className="item-img" src="../public/pic/aa.jpg" />
        <div className="item-story">
            <p>what started as a hobby</p>
            <p>and a way to pass time.</p>
            <p>evolod into a real passion.</p>
        </div>
    </div>
    <div style={{width: "90%", marginBlock: "5%"}} >
        <h1>all collection</h1>
        <div className="all-collection">

            <div className="items-one">
                <img style={{width: "100%", height: "100%"}} src="../public/pic/ab.jpg" />
            </div>
            <div className="items-two">
                <img style={{width: "100%", height: "177px"}} src="../public/pic/WallArt.jpg" />
            </div>
            <div className="items-three">
                <img style={{width: "100%", height: "177px"}} src="../public/pic/images.jpg" />
            </div>
        </div>
    </div>

    <hr style={{width: "90%"}} />
    <Footer />
  </>
)

}