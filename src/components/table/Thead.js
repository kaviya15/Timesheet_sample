import React from 'react';

const Thead = (props) => {
    return (
        <>
              <th scope="col" style={{color: "black"}}>{props.title}</th>
        </>
    );
}

export default Thead;
