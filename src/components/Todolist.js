import React, { Component } from 'react';
import Images from './images';

class Todolist extends Component {
    render() {
        return (
       
         <div className="col-lg-4 p-0">
            <div className="m-4">
              <h4>Screenshots</h4>
            </div>

            <Images text="shot_1_attach_1.png" source="./Assets/picture.png" />
            <Images text="shot_1_attach_3.png" source="./Assets/picture.png" />

            <Images text="Screen record_12.mov" source="./Assets/video_camera.png" />

            <div className="onhover rounded mt-4 mx-2 m-4" style={{border: "1px solid #8d88c6"}}>
              <div className="mx-1 p-2 font-weight-bold text-center">View all</div>
            </div>
          </div>

 
        );
    }
}

export default Todolist;
