import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Mohamed Umar Farook, a passionate full-stack developer with a
              love for creating innovative web solutions. My journey in tech
              began with curiosity and has evolved into a career focused on
              building scalable, user-friendly applications that make a real
              impact.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and staying
              up-to-date with the latest technologies. When I'm not coding,
              you'll find me exploring new frameworks, contributing to open
              source projects, or mentoring fellow developers.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-slate-700 text-cyan-400 rounded-lg text-sm font-semibold">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-slate-700 text-cyan-400 rounded-lg text-sm font-semibold">
                Team Player
              </span>
              <span className="px-4 py-2 bg-slate-700 text-cyan-400 rounded-lg text-sm font-semibold">
                Continuous Learner
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-slate-700 rounded-2xl transform -rotate-6"></div>
              <div className="relative bg-slate-600 rounded-2xl p-8 flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-slate-900">
                      MU
                    </span>
                  </div>
                  <p className="text-gray-300 font-semibold">
                    Mohamed Umar Farook
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
