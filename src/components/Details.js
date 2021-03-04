import React from 'react'
import "./Details.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import img37 from "../Assets/Image 37.png";
import img371 from "../Assets/Image 37@2x.png";
import img372 from "../Assets/Image 37@3x.png";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import CallSplitOutlinedIcon from '@material-ui/icons/CallSplitOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import { Link } from 'react-router-dom';

function Details() {
    return (
        <div className="transformContainer">
            <div className="carousel">
            <AliceCarousel   disableButtonsControls="true" autoPlay infinite autoPlayInterval="1000">
      <img src={img37} className="carousel__img" alt="img37"/>
      <img src={img371} className="carousel__img" alt="img37"/>
      <img src={img372} className="carousel__img" alt="img37"/>
                </AliceCarousel>
               
                <div className="detailsBottom">
                    <div className="detailsBottomText">
                        <h2> HERO</h2>
                        <span className="detailsBottomTextSpan heroPrice bold">N 199</span> {""}
                        <span className="detailsBottomTextSpan">Unisex Pack of 2</span>
                    </div> 
                    <div className="detailsBottomIcon">
                     <FavoriteBorderIcon/>
                    </div>
                </div>
                <div className="detailsBottomLine">
                    <div className="detailsBottomLineText">
                        <span className="detailsBottomTextSizes">S</span> {""}
                        <span className="detailsBottomTextSizes">M</span> {""}
                        <span className="detailsBottomTextSizes">L</span>
                        </div>
                </div>

            
            </div>
           
           
            <div className="detailsInfo">
                <div className="detailsInfoText">
                    <p>100% Original Products</p>
                    <p>This item is not returnable. Items like inner-wear, personal care, make-up, socks and certain accessories do not come under our return policy. <span className="detailsInfoLinkText">Read More.</span></p>
                </div>
               <div className="specButtonContainer"> <button className="specButton">Spec</button></div>
                <div className="detailsSpec">
                    <VerifiedUserOutlinedIcon className="detailsSpecInfo" />
                   <div className="detailsSpecInfo"> Anti-Pollution, anti-dust</div>
                </div>
                <div className="detailsSpec">
                    <CallSplitOutlinedIcon className="detailsSpecInfo" />
                   <div className="detailsSpecInfo"> Reusable</div>
                </div>
                <div className="detailsSpec">
                    <SentimentSatisfiedOutlinedIcon className="detailsSpecInfo" />
                   <div className="detailsSpecInfo"> Pleated at sides for extra comfort</div>
                </div>
                <div className="detailsSpec">
                    <WbSunnyOutlinedIcon className="detailsSpecInfo" />
                   <div className="detailsSpecInfo"> Wider face converage for maximum protection</div>
                </div>
                <Link to="/cart">
                <div className="bottomSpecButtonContainer">
                    <button className="bottomSpecButton">ADD TO CART</button>
                    </div>
                    </Link>
                <div className="sizeContainer">
                    <div className="sizeText">
                        <h3>Select size</h3>
                    </div>
                    <div className="detailsBottomLineText sizeSpan">
                        <span className="detailsBottomTextSizes box">S</span> {""}
                        <span className="detailsBottomTextSizes box">M</span> {""}
                        <span className="detailsBottomTextSizes box">L</span>
                    </div>
                    <div className="sizeText">
                        <h4>Size in Cart</h4>
                        <hr />
                    </div>
                    </div>
            </div>
            </div>
    )
}

export default Details
