import React, { Component } from 'react';

class Images extends Component {
    render() {
        return (
            <>
             <div className="onhover row d-flex justify-content-between m-4">
              <div className="mt-4"><img src={this.props.source} alt=""/></div>
              <div className="mt-4">{this.props.text}</div>
              <div className="mt-4">
                <button className="btn btn-light" style={{color: "#382f9c"}}>
                  view
                </button>
              </div>
            </div>
            <hr/>
            </>
        );
    }
}

export default Images;
