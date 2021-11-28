import React, { Component } from 'react';
import Activity from './Activity';

class Report extends Component {
    render() {
        return (
            <div className="col-lg-4">
                <h5 className="my-4 p-3">Report</h5>
                    <Activity source="./Assets/graph.png" text="WEEKLY ACTIVITY" percentage ="52%" btnPercentage="17%" btnclass="btn dropdown-toggle green" bgclass="p-3 bluish"/>
                <div class="mt-4">
                    <Activity source="./Assets/timer_blue.png" text="WORKED THIS WEEK" percentage ="11:56:33" btnPercentage="17%" btnclass="btn dropdown-toggle red" bgclass="p-3 whitish"/>
                </div>


            <div className="onhover rounded mt-4 mx-2" style={{border: "1px solid #8d88c6"}}>
              <div className="mx-1 p-2 font-weight-bold text-center">
                <img src="./Assets/pdf.png" alt=""/> Export as pdf
              </div>
            </div>

          </div>
        );
    }
}

export default Report;
