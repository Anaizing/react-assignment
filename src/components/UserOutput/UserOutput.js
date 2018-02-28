import React from 'react';

const UserOutput = (props) => {

    return <div className="UserOutput">
        <p onClick={props.click}>What a beautiful site {props.name} </p>
        <p>You are so fucking smart</p>
      </div>;
};

export default UserOutput;