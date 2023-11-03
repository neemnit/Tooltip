import React from 'react'
import "./App.css"
const Tooltip = ({position}) => {
    let idSelector=''
    switch(position){
        case'left':{
              idSelector='tooltipTextLeft'
              break
        }
        case 'top':{
            idSelector="tooltipTextTop"
            break
        }
        case 'bottom':{
            idSelector="tooltipTextBottom"
            break
        }
        case 'right':{
            idSelector="tooltipTextRight"
            break
        }
    }
   

    
  return (
    <div id={idSelector}>
        Thanks for hovering! I'm a tooltip
    </div>
        

  )
}

export default Tooltip