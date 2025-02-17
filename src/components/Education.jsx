import React from 'react';
import qualification from "./qualification";

function Education() {
  return (
    // <div className='ac'> center
    <div className='center'>
      {qualification.map((props) => (
        <div key={props.id}  className="qua_sec">
          <h4 className='heading'>{props.role}</h4>
          <h4>{props.organisation}</h4>
          <h5>{props.startDate}</h5>
          <h5>{props.endDate}</h5>
          <h5>{props.prcnt}</h5>
          <h6>{props.location}</h6>
          <p> {props.experiences}</p>

          <img className="q_img" src={props.imageSrc} alt="Qualification" />
        </div>
      ))}
    </div>
    // </div>
  );
}

export default Education;
