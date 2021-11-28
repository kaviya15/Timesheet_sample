import React from 'react';

const Tbody = (props) => {
    return (
        <>
             <tr>
                <td>
                    <span className={props.addClass} style={{fontWeight: 600 ,borderRadius: "4px"
                        }}>
                        {props.number} 
                    </span>
                        {props.heading}
                </td>
                <td className="p-1.0" >
                      {props.date}
                </td>
                <td className="p-1.0" >{props.startTime}</td>
                <td className="p-1.0" >{props.stopTime}</td>
                <td className="p-1.0" >{props.duration}</td>
                  </tr> 
        </>
    );
}

export default Tbody;
