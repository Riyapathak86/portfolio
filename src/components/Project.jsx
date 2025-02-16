import React from 'react';
import Pro  from "./pro";
function Project() {
  return (
  <>
  <h3 className='pro_name'>My Project</h3>
  <div className="container">

{Pro.map((prop)=>
  
<div class="card"key={prop.id} >
  <p>{prop.title}</p>
  <img src={prop.imageSrc} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"> {prop.description} </p>
    <p>{prop.demo}</p>
    <p>{prop.source}</p>
  </div>
</div>)}
  </div> 
  </>
  )
}

export default Project;