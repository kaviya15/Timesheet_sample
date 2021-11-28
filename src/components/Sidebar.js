import React, { Component } from 'react';
import SidebarComponent  from './SidebarComponent';
class Sidebar extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  updatestate=()=>{
    this.setState({count : this.state.count + 1})
  }
    render() {
     

        const sideComponentProperties = {
            "Dashboard":"./Assets/speedometer.png",
            "Activity":"./Assets/graph.png",
            "Timesheet":"./Assets/timer_white.png",
            "To Do":"./Assets/bill.png",
            "Invoices":"./Assets/icons8-today-96.png",
            "projects":"./Assets/folder.png",
            "Help":"./Assets/help.png",
            "Download App":"./Assets/download.png"
        };
       
        
        return (
            <>

                <div className="container">
                    <div className="p-3">
                        <img src="./Assets/logo.png" alt=""/>
                    </div>
                </div>

                <div className="d-flex justify-content-end leftArrow" >
                    <img src="./Assets/left_arrow.png" alt=""/>
                </div>

            <div className="container">
                  {

                    Object.keys(sideComponentProperties).map(key=>{
                     
                     return (
                      this.state.count === 3 ? <> <SidebarComponent name= {key} imageSource={sideComponentProperties[key]} /><hr style={{borderTop: "2px solid #938fc9", width: "24px" }} class="m-3"/> </>
                      :<SidebarComponent name= {key} imageSource={sideComponentProperties[key]} />  
                     ) 

                    }
                    
          )
                  }
            </div>


            <div>
                <div>
                  <img src="./Assets/sidebar_overlay.png" alt=""/>
                </div>
            </div>
            <div className="container" >

              <div className="d-flex ml-4 py-1 justify-content-center">

                <div className="px-3">
                  <img src="./Assets/notification.png" alt=""/>
                </div>
                <div className="px-3 ml-4 mr-4">
                  <img src="./Assets/settings.png" alt=""/>
                </div>
                <div className="px-3">
                  <span ><i className="fa fa-user-circle-o"></i></span>
                </div>

              </div>

            </div>
            
          </>
        );
    }
}

export default Sidebar;
