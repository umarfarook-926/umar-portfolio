
import React from 'react';

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: 'HTML',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      id: 2,
      name: 'CSS',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      id: 3,
      name: 'JavaScript',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      id: 4,
      name: 'Python',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
      id: 5,
      name: 'Bootstrap',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    },
    {
      id: 6,
      name: 'React.js',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      id: 7,
      name: 'Node.js',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      id: 8,
      name: 'Express.js',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    },
    {
      id: 9,
      name: 'MongoDB',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      id: 10,
      name: 'SQL',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    },
    {
      id: 11,
      name: 'Git',
      image:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div key={skill.id} className="bg-slate-800 rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:bg-slate-700 group">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img 
                    src={skill.image} 
                    alt={skill.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-gray-300 font-medium text-sm text-center group-hover:text-cyan-400 transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            Always learning and exploring new technologies to stay current with industry trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
