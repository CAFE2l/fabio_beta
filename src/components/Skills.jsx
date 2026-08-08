import React from 'react';
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import './Skills.css';

const Skills = () => {
  const skills = [
    { subject: 'Criação no Canva', value: 92, fullMark: 100 },
    { subject: 'Identidade Visual', value: 86, fullMark: 100 },
    { subject: 'Social Media', value: 90, fullMark: 100 },
    { subject: 'Apresentações', value: 82, fullMark: 100 },
    { subject: 'Tipografia', value: 80, fullMark: 100 },
  ];

  const tools = ['Canva'];

  return (
    <section id="skills" className="skills">
      <div className="container skills-container">
        <div className="skills-grid">
          <div className="skills-radar-card">
            <div className="skills-card-header">
              <span className="skills-label skills-label-blue">
                habilidades
              </span>
              <h2 className="skills-title">Um radar de pontos fortes.</h2>
            </div>
            <div className="skills-radar">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={skills}>
                  <PolarGrid stroke="rgba(26, 46, 74, 0.18)" strokeDasharray="3 3" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: '#94A3B8', fontSize: 12, fontFamily: 'Inter, sans-serif' }}
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
                  <Radar
                    name="Skills"
                    dataKey="value"
                    stroke="#4A90A4"
                    strokeWidth={2}
                    fill="#4A90A4"
                    fillOpacity={0.3}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(250, 247, 242, 0.95)',
                      borderRadius: '12px',
                      border: '1px solid rgba(44, 62, 80, 0.1)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="skills-tools-card">
            <div className="skills-card-header">
              <span className="skills-label skills-label-warm">
                ferramentas
              </span>
              <h2 className="skills-title">O que eu uso no dia a dia.</h2>
            </div>
            <div className="skills-tools">
              {tools.map((tool, index) => (
                <div
                  key={tool}
                  className="skills-tool-tag"
                >
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;