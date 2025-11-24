import React from 'react';
import BasicInfo from './components/BasicInfo';
import Work from './components/Work';
import Skills from './components/Skills';
import LanguagesFrameworks from './components/LanguagesFrameworks';
import Tools from './components/Tools';
import Resources from './components/Resources';
import DeveloperSetup from './components/DeveloperSetup';

function App() {
  const workItems = [
    {
      title: 'Decor360',
      description: 'Home Decor Company.',
      image: '',
      link: 'https://Decor360.ca',
      techList: ['HTML', 'Javascript', 'CSS'],
    },
    {
      title: 'Boujee Restaurant and Bar',
      description: 'Fine-Dining Restaurant and Bar.',
      image: '',
      link: 'https://boujeerestaurant.ca/',
      techList: ['Node.js', 'Express', 'MongoDB'],
    },
  ];

  const skills = [
    { name: 'JavaScript', description: 'Experienced in ES6+' },
    { name: 'React', description: 'Building component-based UIs' },
  ];

  const languagesFrameworks = [
    { title: 'TypeScript', description: 'Strongly typed JavaScript' },
    { title: 'React', description: 'UI library' },
  ];

  const tools = [
    { title: 'Git', description: 'Version control system' },
    { title: 'Docker', description: 'Containerization platform' },
  ];

  const resources = [
    {
      title: 'MDN Web Docs',
      icon: '',
      summary: 'Comprehensive web documentation',
      link: 'https://developer.mozilla.org/',
    },
  ];

  const developerSetups = [
    { title: 'VSCode', description: 'Recommended editor with extensions' },
    { title: 'Terminal', description: 'Preferred terminal with zsh' },
    { title: 'Editor Font', description: 'Fira Code with ligatures' },
  ];

  return (
    <div className="App">
      <BasicInfo
        name="Soham Mittal"
        email="Mittalsoham77@gmail.com"
        description="A passionate developer with experience in React and TypeScript."
      />
      <Work items={workItems} />
      <Skills skills={skills} />
      <LanguagesFrameworks items={languagesFrameworks} />
      <Tools tools={tools} />
      <Resources resources={resources} />
      <DeveloperSetup items={developerSetups} />
    </div>
  );
}

export default App;
