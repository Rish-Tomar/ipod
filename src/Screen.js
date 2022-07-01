import React from "react";
import Coverflow from "./screens/Coverflow";
import Games from "./screens/Games";
import Setting from "./screens/Setting";
import Music from "./screens/Music";
import MenuItems from "./screens/MenuItems";

const Screen =(props)=>{
    const {options,showmenu,selectedOption,showoption}=props
    console.log('props',options,showmenu);
    return(
        <div className="screen">
            {showmenu===true && showoption===-1?<MenuItems 
                 options={options}
                 showmenu={showmenu}
                 selectedOption={selectedOption}/>:''}
            {showoption===0?<Coverflow/>:''}
            {showoption===2?<Games/>:''}
            {showoption===1?<Music/>:''}
            {showoption===3?<Setting/>:''}
        </div>
    )
}

export default Screen