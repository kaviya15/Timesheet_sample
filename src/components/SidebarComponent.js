import React from 'react';

function SidebarComponent(props) {
  
        return (
            <>
                <div className="mt-3">
                    <div className="d-flex py-3">
                        <div>
                            <img src={props.imageSource} alt=""/>
                        </div>
                    <div className="px-4 dash" >{props.name}</div>
                    </div>
              </div>
            </>
        );
    }


export default SidebarComponent;
