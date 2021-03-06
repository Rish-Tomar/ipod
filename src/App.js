
import React from 'react'
import Screen from './Screen';
import Buttons from './Buttons';
import ZingTouch from 'zingtouch'
import './App.css'

class App extends React.Component {

  constructor(){
    super()
    this.change_in_angle = 0;
    this.selected = 0;
    this.state ={
      options:['coverflow','music','games','settings'],
      initialscreen:false,
      selectedoption:0,
      showoption:-1,
      homescreen:true
    }
  }

  componentDidMount(){
    var element =document.getElementsByClassName('inner-div')[0]
    var region = new ZingTouch.Region(element)
    region.bind(element,'rotate', (e)=>{
      if(this.state.initialscreen===true){
          let dist =e.detail.distanceFromLast;
          this.change_in_angle += dist
          if(this.change_in_angle>60)
          {
            this.selected++;
            this.selected = this.selected % this.state.options.length;
            this.setState({
              selectedoption:this.selected
            })
            this.change_in_angle = 0;
          }else if(this.change_in_angle<-60)
           {
            this.selected--;
            console.log('else if',this.selected)
            if(this.selected === -1)
            {
              this.selected = this.state.options.length -1
            }
            console.log('corrected',this.selected)
            this.setState({
              selectedoption:this.selected
            })
            this.change_in_angle = 0;
           }
      }
    })
  }

  centerCircleClicked =()=>{
    console.log('clicked')
    console.log('this.state',this.state.selectedoption)
    console.log(this.state.options[this.state.selectedoption])
    if (this.state.selectedOption!==-1)
        {
            this.setState(
                {
                    showoption:this.state.selectedoption,
                    initialscreen:false
                }
            );
            console.log('now the state is',this.state)
            this.temp_selected = 0;
            return;
        }
  }
  
  menuClicked =()=>{
    console.log('upss')
    if(this.state.homescreen===true){
      this.setState({
        initialscreen:true,
        homescreen:false
      })
    }else if(this.state.homescreen===false && this.state.initialscreen===true){
      this.setState({
        initialscreen:false
      })
    }else{
      this.setState({
        initialscreen:true,
        showoption:-1
      })
    }    
  }

  render() {
    return (
      <div className="ipod">
         <Screen 
                 options={this.state.options}
                 showmenu={this.state.initialscreen}
                 selectedOption={this.state.selectedoption}
                 showoption={this.state.showoption}/>
         <Buttons centerCircleClicked={this.centerCircleClicked}
                  menuClicked={this.menuClicked}/>
       </div>
    )
  }
}

export default App;
