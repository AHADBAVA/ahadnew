import React from 'react';

function Project() {
  const projects = [
    {
      id: 1,
      imageSrc: "./src/assets/images/Screenshot 2023-09-21 235143.png",
      description: "Login & SignUp Page With Firebase BackEnd",
      liveDemoLink: "https://glistening-queijadas-f6bb8f.netlify.app/",
      Source: "",
    },
    {
      id: 2,
      imageSrc: "./src/assets/images/Screenshot 2023-09-21 013859.png",
      description: "Memory Game With Html,Css,Js",
      liveDemoLink: "https://ahadbava.github.io/Memory-Game/",
      Source: "https://github.com/AHADBAVA/Memory-Game",
    },
    {
        id: 3,
        imageSrc: "./src/assets/images/Screenshot 2023-09-18 192721.png",
        description: "Chat Bot With Html,Css,Js",
        liveDemoLink: "https://ahadbava.github.io/Chat-bot-javascript/",
        Source: "https://github.com/AHADBAVA/Chat-bot-javascript",
      },
      {
        id: 4,
        imageSrc: "./src/assets/images/Screenshot 2023-09-22 003207.png",
        description: "BROTOTYPE Clone Website With Html,Css,Js,Bootstrap",
        liveDemoLink: "https://ahadbava.github.io/Brototype-new-desgin-clone-website/",
        Source: "https://github.com/AHADBAVA/Brototype-new-desgin-clone-website",
      },
      {
        id: 5,
        imageSrc: "./src/assets/images/Screenshot 2023-09-22 004218.png",
        description: "BROtoPRO Programers Supporting Website",
        liveDemoLink: "https://ahadbava.github.io/BROTOPRO/",
        Source: "https://github.com/AHADBAVA/BROTOPRO",
      },
      {
        id: 6,
        imageSrc: "./src/assets/images/Screenshot 2023-09-22 004402.png",
        description: "Calculator With Html,Css,Js",
        liveDemoLink: "https://ahadbava.github.io/calculator/",
        Source: "https://github.com/AHADBAVA/calculator",
      },
    // Add more project objects as needed
  ];

  // Function to open the live demo link in a new tab
  const openLiveDemo = (url) => {
    window.open(url, "_blank");
  };
  const Source = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen flex flex-col justify-center items-center pt-10 pb-10 md:pt-40 md:pb-40">
      <h1 className="text-3xl text-black md:text-4xl lg:text-5xl font-bold mb-4 pb-10">My Projects</h1>
      <div className="container mx-auto grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full bg-gray-300 rounded-lg overflow-hidden relative group"
          >
            <img
              src={project.imageSrc}
              alt={`Project ${project.id}`}
              className="object-cover w-full h-64 md:h-80 transition-transform transform group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 bg-black bg-opacity-80 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-center mb-2">{project.description}</p>
              <button
                onClick={() => openLiveDemo(project.liveDemoLink)}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full"
              >
                Live Demo
              </button>
              <button
                onClick={() => openLiveDemo(project.Source)}
                className="bg-blue-400 hover:bg-blue-600 text-white font-semibold mt-10 px-4 py-2 rounded-full"
              >
                Source Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
