import React from 'react'
import img32 from "../Assets/Image 32.png";
import img36 from "../Assets/Image 36.png";
import img37 from "../Assets/Image 37.png";
import img39 from "../Assets/Image 39.png";
import img42 from "../Assets/Image 42.png";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import "./Main.css";
import { Link } from 'react-router-dom';
function Main() {
    return (
        <div>
            <div className="mainOne">
                <div className="mainOneImage">
                   <img src={img32} className="mainOneImage32" alt="Image32"/>
                </div>
                    <div className="mainOneBottom">
                      <div className="mainOneBottomText">
                        <h2> UNEO</h2>
                        <span className="mainOneBottomTextSpan bold">N 199</span> {""}
                        <span className="mainOneBottomTextSpan">Unisex Pack of 2</span>
                    </div> 
                    <div className="mainOneBottomIcon">
                     <FavoriteBorderIcon/>
                    </div>
                    </div>
            </div>
            <div className="mainOne mainTwo">
                <div className="mainOneImage">
                   <img src={img36} className="mainOneImage32" alt="Image32"/>
                </div>
                    <div className="mainOneBottom">
                      <div className="mainOneBottomText">
                        <h2> US Polo</h2>
                        <span className="mainOneBottomTextSpan bold">N 299</span> {""}
                        <span className="mainOneBottomTextSpan">Unisex Pack of 3</span>
                    </div> 
                    <div className="mainOneBottomIcon">
                     <FavoriteBorderIcon/>
                    </div>
                    </div>
            </div>
            
            <div className="mainOne mainThree">
            <Link to = "/details">
                <div className="mainOneImage">
                   <img src={img37} className="mainOneImage32" alt="Image32"/>
                    </div>
                    </Link>
                    <div className="mainOneBottom">
                      <div className="mainOneBottomText">
                        <h2 className="hero"> HERO</h2>
                        <span className="mainOneBottomTextSpan bold hero">N 199</span> {""}
                        <span className="mainOneBottomTextSpan regular hero">Unisex Pack of 2</span>
                    </div> 
                    <div className="mainOneBottomIcon">
                     <FavoriteBorderIcon className="hero"/>
                    </div>
                    </div>
                </div>
            <div className="mainOne mainFour">
                <div className="mainOneImage">
                   <img src={img42} className="mainOneImage32" alt="Image32"/>
                </div>
                    <div className="mainOneBottom">
                      <div className="mainOneBottomText">
                        <h2> UNEO</h2>
                        <span className="mainOneBottomTextSpan bold">N 199</span> {""}
                        <span className="mainOneBottomTextSpan">Unisex Pack of 2</span>
                    </div> 
                    <div className="mainOneBottomIcon">
                     <FavoriteBorderIcon/>
                    </div>
                    </div>
            </div>
            <div className="mainOne mainFive">
                <div className="mainOneImage">
                   <img src={img39} className="mainOneImage32" alt="Image32"/>
                </div>
                    <div className="mainOneBottom">
                      <div className="mainOneBottomText">
                        <h2> Wild Craft</h2>
                        <span className="mainOneBottomTextSpan bold">N 150</span> {""}
                        <span className="mainOneBottomTextSpan">Unisex Pack of 3</span>
                    </div> 
                    <div className="mainOneBottomIcon">
                     <FavoriteBorderIcon/>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Main
