import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function MenuItems(props) {
    const {options,showmenu,selectedOption}=props
    console.log('menuitems',options,showmenu)
  return (
    <div className='screen-menu'>
        <h1>IPOD</h1>
        {
            options.map((item,index)=>{
                return (
                    <div className={selectedOption===index?'selected-menu-item':'normal-menu-item'} key={index}>
                        {item}
                        {selectedOption===index?<NavigateNextIcon/>:''}
                    </div>
                )
            })
        }
    </div>
  )
}

export default MenuItems