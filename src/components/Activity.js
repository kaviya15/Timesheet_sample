import React, { Component } from 'react';

class Activity extends Component {
    render() {
        return (                      

            <>
            <div className="wk row d-flex justify-content-between mx-1" style={{borderRadius: "10px"}}>
                <div className="row">
                  <div className="mx-4 mt-2 mb-2">
                    <img src={this.props.source} alt=""  className={this.props.bgclass}/>
                  </div>
                  <div className="mt-2">
                    <span style={{fontWeight: "bold",
                        fontSize: "x-small",
                        color: "#7f7f7f"}}>
                            {this.props.text}
                        </span>
                    <br/>
                    <h5 className="mt-1 " style={{fontStyle: "14px", fontWeight: "1rem"}}>
                    { this.props.percentage }
                    </h5>
                  </div>
                </div>

                <div className="mr-4 mt-2 mb-2">
                  <button  className={this.props.btnclass} data-toggle="dropdown">
                  {this.props.btnPercentage}
                  </button>
                </div>

              </div>
            </>
        );
    }
}

export default Activity;
