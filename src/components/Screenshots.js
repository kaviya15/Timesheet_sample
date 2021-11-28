import React, { Component } from 'react';
import Lists from './lists';

class Screenshots extends Component {
    render() {
        return (
            <div className="col-lg-8 col-md-8">
            <div className="m-4">
              <h5>To-Do lists</h5>
            </div>


             <Lists title="Revamp instagram app"day="Today" month="May" date="20"/>
             <Lists title="Prototyping"day="upcoming" month="May" date="21"/>
             <Lists title="Collect reference from new project"day="upcoming" month="May" date="22"/>

          
          </div>
        );
    }
}

export default Screenshots;
