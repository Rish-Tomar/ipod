import React from "react";
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Buttons =(props)=>{
    var item=document.getElementById('inner-div')


    return(
        <div className="buttons">
            <div className="buttons-container">
                <div className="inner-div">
                   
                    <span class="menu-btn" onClick={props.menuClicked}>MENU</span>
                    <FastForwardIcon className="fwd"/>
                    <FastRewindIcon  className="rewind" />         
                    <PlayArrowIcon className="play-pause"/>

                    <div className="inner-circle" onClick={props.centerCircleClicked}>
                    
                    </div>
              </div>               
            </div>
        </div>
    )
}





export default Buttons