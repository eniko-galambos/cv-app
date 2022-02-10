import React from 'react';

const TechnicalKnowledge = () => {
  const items = [
    { name: 'HTML5', progress: 85 },

    { name: 'JavaScript', progress: 85 },
    { name: 'React', progress: 60 },
    { name: 'React Native', progress: 40 },
    { name: 'Redux', progress: 20 },
    { name: 'Vue.js', progress: 45 },
    { name: 'Expo', progress: 40 },
    { name: 'AngularJS', progress: 15 },
    { name: 'GSAP', progress: 20 },
    { name: 'Typescript', progress: 15 },

    { name: 'CSS', progress: 85 },
    { name: 'Tailwind', progress: 60 },
    { name: 'SCSS', progress: 35 },
    { name: 'Bootstrap', progress: 30 },
    { name: 'MaterialUI', progress: 25 },

    { name: 'Git', progress: 60 },
    { name: 'GitLab', progress: 50 },
    { name: 'Jira', progress: 30 },
    { name: 'Confluence', progress: 25 },
    { name: 'GitLab CI', progress: 25 },
    { name: 'Docker', progress: 20 },
    { name: 'Rest API', progress: 50 },
    { name: 'GraphQL', progress: 20 },
    { name: 'SQL', progress: 10 },
    { name: 'Java', progress: 10 },
  ];

  return (
    <section>
      <div className="h-screen w-screen bg-gradient-to-b from-gradient-peach to-black -mb-px"></div>
      <div className="h-screen w-screen bg-black"></div>
    </section>
  );
};

export default TechnicalKnowledge;
