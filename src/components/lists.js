import React, { Component } from 'react';

class Lists extends Component {
    render() {
        return (
            <>
            <div className="mt-4 py-2 mx-2" style={{display: "flex"}}>
              <div className="mx-2 mt-3 px-2">
                <div style={{fontWeight: "bolder", color: "#382f9c" ,fontSize: "x-large"}}>{this.props.date}</div>
                <div style={{fontWeight: "bold", color:" #382f9c", font: "1em sans-serif" , fontSize: "small"}}>{this.props.month}</div>
              </div>
              <div className="
                  onhover
                  row
                  d-flex
                  justify-content-between
                  py-3
                  shadow
                  col-lg-10
                  mx-2
                " style={{border: "1px solid #f9f9f9", borderRadius: "6px"}}>
                <div className="mx-1">
                  <div style={{fontFamily: "sans-serif"}}>{this.props.title}</div>
                  <div style={{color: "#7f7f7f"}}>{this.props.day}</div>
                </div>
                <div><img src="./Assets/more.png" alt=""/>
                </div>
              </div>
            </div> 
            </>
        );
    }
}

export default Lists;
