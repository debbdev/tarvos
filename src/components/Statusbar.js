import React, { useState,useEffect } from "react";
import WifiIcon from '@material-ui/icons/Wifi';
import Battery90Icon from '@material-ui/icons/Battery90';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import "./Statusbar.css";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


function Statusbar({ backButton, removeStatusBottom }) {
    const [today, setDate] = useState(new Date());
   
    useEffect(() => {
        const timer = setInterval(() => { setDate(new Date()); }, 60 * 1000 )
       return () => {
        clearInterval(timer)
       }
   }, [])
   
    const history = useHistory();
    return (
        <div className="statusBarContainer">
           <div className="statusBar">
               <div className="statusTime">
                    <p>{today.getHours() + ":" + today.getMinutes()}</p>
            </div>
            <div className="statusRight"> 
            <div className="statusNetwork status">
                <SignalCellularAltIcon/>
                </div>
                <div className="statusWifi status">
                <WifiIcon/>
                </div>
                <div className="statusBattery status" >
                        <Battery90Icon />
            </div>
            </div>
            </div>
            <div className="statusBottom">
                {backButton ? (<ArrowBackIosIcon onClick ={()=>history.replace(backButton)}/>) : (<div className="statusMenuBar">
                <MenuIcon/>
                </div>)}
                
               {removeStatusBottom ? (<><h3 className="shoppingCart">ShoppingCart</h3></>):(<>
                <div className="statusBottomIcon">
                <h2>N8</h2>
                </div>
                <div className="statusBottomRight">
                   <div className="statusSearch status">
                     <SearchIcon/>
                    </div>
                    <div className="statusCart status">
                      <ShoppingCartIcon/>
                    </div>
                </div>
                </>)}
            </div>
        </div>
    )
}

export default Statusbar
