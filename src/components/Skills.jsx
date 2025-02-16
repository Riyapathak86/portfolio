import React from "react";
import SkillsData from "./SkillsData";

function Skills() {
  return (
    <div>
    <h1 className="Skills_title container_skill">MY SKILLS</h1>
      {SkillsData.map((data) => (
      <div className="container_skill"  key={data.id}>
    
            <h1 className="Skills_title">{data.title}</h1>
            <img  className="Skills_img"  src={data.imageSrc} alt={data.title} />
         </div>
        ))}
      
    
      </div>
    
  );
}

export default Skills;
