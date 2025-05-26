import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import experiences from '../assets/utils/ExperienceData';
import '../css/experience.css';

const Experience = () => {

  return (
    <section className="experience-section" id='experience'>
      <h2>Experience</h2>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            date={experience.duration}
            iconStyle={{ 
                background: '#5c6bc0',
                color: 'inherit',
                width: '60px',  
                height: '60px',
                padding: 0, 
                borderRadius: '50%', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center', 
             }}
            icon={ <experience.icon
                style={{
                  fontSize: '23px',
                  lineHeight: '1',
                  marginLeft: '1.20px',
                  marginTop: '.5px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}/>}
          >
            <h3>{experience.jobTitle}</h3>
            <h4>{experience.company}</h4>
            <p>{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
