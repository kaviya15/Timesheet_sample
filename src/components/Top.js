import React, { Component } from 'react';

class Top extends Component {
    render() {
        return (
            <>
            <div className="m-4 d-flex justify-content-between">
                <div className="btn-group">
                    <select className="btn" >
                        <option value="design task">Design task</option>
                    </select>
                </div>
                <button className="btn btn-light">
                    <span>+ ADD PROJECT</span>
                </button>
            </div>
            </>
        );
    }
}

export default Top;
