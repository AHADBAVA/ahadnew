import React from 'react';

// Import all your images separately
import figmaLogo from './assets/images/1667px-Figma-logo.svg.png';
import photoshopLogo from './assets/images/Adobe_Photoshop_CC_icon.svg.png';
import xdLogo from './assets/images/adobe-xd-logo-png-transparent.png';
import bootstrapLogo from './assets/images/Bootstrap_logo.svg.png';
import cssLogo from './assets/images/CSS3_logo.svg.png';
import reactLogo from './assets/images/React-icon.svg.png';
import jsLogo from './assets/images/JavaScript-logo.png';
import htmlLogo from './assets/images/HTML5_Badge.svg.png';
import Premire from './assets/images/logo.png';
import Git from './assets/images/Git-Icon-1788C.png';
import GitHub from './assets/images/2f087780-7be6-11ea-89c8-8e1f7efe2d65.png';
import illustrator from './assets/images/adobe-illustrator-logo-775FAF240B-seeklogo.com.png';
import Next from './assets/images/nextjs-icon.svg';
import Node from './assets/images/png-transparent-js-logo-node-logos-and-brands-icon-thumbnail.png';
import Blender from './assets/images/Blender_logo_no_text.svg.png';
import Bard from './assets/images/original-565aeb6d127917f90080ca40a6ddda39.png';
import Gpt from './assets/images/ChatGPT_logo.svg.png';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center pt-40 pb-40">
      <h1 className="text-3xl text-black md:text-4xl lg:text-5xl font-bold mb-5 pb-10">My Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <SkillItem icon={htmlLogo} name="HTML" />
        <SkillItem icon={cssLogo} name="CSS" />
        <SkillItem icon={jsLogo} name="JavaScript" />
        <SkillItem icon={reactLogo} name="React" />
        <SkillItem icon={figmaLogo} name="Figma" />
        <SkillItem icon={photoshopLogo} name="Adobe Photoshop" />
        <SkillItem icon={xdLogo} name="Adobe XD" />
        <SkillItem icon={bootstrapLogo} name="Bootstrap" />
        <SkillItem icon={Premire} name="Premire Pro" />
        <SkillItem icon={Git} name="Git" />
        <SkillItem icon={GitHub} name="GitHub" />
        <SkillItem icon={illustrator} name="illustrator" />

        <SkillItem icon={Next} name="Next Js" />
        <SkillItem icon={Bard} name="Google Bard" />
        <SkillItem icon={Gpt} name="Chat GPT" />
        <SkillItem icon={Node} name="Node Js" />
        <SkillItem icon={Blender} name="Blender 3D" />
      
       
      </div>
    </div>
  );
}

function SkillItem({ icon, name }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <img src={icon} alt={name} className="w-12 h-12 mx-auto" />
      <p className="mt-2">{name}</p>
    </div>
  );
}

export default App;
