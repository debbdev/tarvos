import React from 'react';
import "./Cart.css";
import img42 from "../Assets/Image 42.png";
import img37 from "../Assets/Image 37.png";

function Cart() {
    return (
        <div>
            <div  className="shoppingCartMain">
            <div  className="shoppingCartContainer">
                <div className="shoppingCartImageContainer shop">
                <img src={img42} className="shoppingCartImage" alt="Image42"/>
                </div>
                <div className="shoppingCartDetails shop">
                        <h2> UNEO</h2>
                        <span className="shoppingCartDetailsText bold">N 199</span> {""}
                        <span className="shoppingCartDetailsText">Unisex Pack of 2</span>
                        <h4>Size: M</h4>
                        <h5>REMOVE</h5>
                </div>
                <div className="shoppingCartSelectDetails shop">
                    <button className="shoppingCartSelect">
                    <button className="shoppingCartSelectOption">+</button>
                    <button className="shoppingCartSelectOption">1</button>
                    <button className="shoppingCartSelectOption">-</button>
                            
                    </button>
                </div>
            </div>
            <div  className="shoppingCartContainer">
                <div className="shoppingCartImageContainer shop img37Container">
                <img src={img37} className="shoppingCartImage img37" alt="Image37"/>
                </div>
                <div className="shoppingCartDetails shop">
                        <h2> UNEO</h2>
                        <span className="shoppingCartDetailsText bold">N 199</span> {""}
                        <span className="shoppingCartDetailsText">Unisex Pack of 2</span>
                        <h4>Size: M</h4>
                        <h5>REMOVE</h5>
                </div>
                <div className="shoppingCartSelectDetails shop">
                    <button className="shoppingCartSelect">
                    <button className="shoppingCartSelectOption">+</button>
                    <button className="shoppingCartSelectOption">1</button>
                    <button className="shoppingCartSelectOption">-</button>
                            
                    </button>
                </div>
                </div>
                <div className="cartDetailsContainer">
                    <div className="cartDetails">
                        <p className="cartSingle bold">Cart Details</p>
                        <p className="bold">Total Amount</p>
                        <p className="bold">Discount</p>
                    </div>
                    <div className="cartDetailsPrice">
                        <h3>N 398</h3>
                        <h3>N 0</h3>
                    </div>
                </div>
                <hr className="cartDetailsHr"/>
                <div className="cartDetailsContainer final">
                    <div className="cartDetails">
                        <p className="bold">Final Amount</p>
                    </div>
                    <div className="cartDetails">
                        <h3>N 398</h3>
                    </div>
                    
                </div>
                <div className="bottomSpecButtonContainer">
                    <button className="bottomSpecButton">CHECKOUT</button>
                </div>
            </div>
    </div>
    )
}

export default Cart
