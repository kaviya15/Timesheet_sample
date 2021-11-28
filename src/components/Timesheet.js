import React, { Component } from 'react';
import Thead from './table/Thead';
import Tbody from './table/Tbody';

class Timesheet extends Component {
    render() {

        const table = {
            borderCollapse: "collapse",
            width: "100%",
            fontFamily:" Arial, Helvetica, sans-serif"
        };
        const thead = ["Project","Date","Start Time","Stop Time","Duration"];
       
        const tbody = {
            "Landing Page Design" : [1,"May 21,2019","1:10pm","9:20pm","8:10:37","mr-3 px-3 py-2 timesheet1"],
            "Mobile App":[3,"May 22,2019","12:00pm","8:00pm","8:00:00","mr-3 px-3 py-2 timesheet2"],
            "UI/UX":[5,"May 23,2019","1:10pm","1:20pm","0:10:37","mr-3 px-3 py-2 timesheet3"],
            "Website/apps":[2,"May 24,2019","1:11pm","9:00pm","7:49:37","mr-3 px-3 py-2 timesheet4"],
            "Branding":[9,"May 26,2019","1:10pm","1:20pm","0:10:37","mr-3 px-3 py-2 timesheet5"]
        };

        return (
            <>
            <div className="col-lg-8">
                <div className="m-4 d-flex justify-content-between">
                <h5>Timesheet</h5>

                <div className="row">
                    <div>
                        <button className="btn btn-light">
                            <span style={{color: "#382f9c",fontWeight: "bold"}}>View Full Sheet</span>
                        </button>
                    </div>

                <div className="px-4">
                    <img src="./Assets/more.png" alt=""/>
                </div>
              </div>
            </div>

            <div className="m-4 py-4 table-responsive-lg">

              <table className="table-hover" style={table}>

                <thead style={{borderTop: "none"}}>
                  <tr>
                     {thead.map(key=> <Thead title={key}/>)} 
                  </tr>
                </thead>
               
                <tbody>
                 { Object.keys(tbody).map(key => <Tbody number={tbody[key][0]} heading={key} date={tbody[key][1] } startTime={tbody[key][2] } stopTime={tbody[key][3]} duration={tbody[key][4]} addClass={tbody[key][5]}/> )  } 
                </tbody>

              </table>

            </div>

          </div> 

            </>
        );
    }
}

export default Timesheet;
