import React, { useState } from 'react';
import { Award, Code, Star, Activity, X } from 'lucide-react';
import '../styles/components/Profile.scss';

const ExpandableProfile = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 }
  ];

  const achievements = [
    { icon: <Star size={16} />, text: 'Top Contributor 2023' },
    { icon: <Code size={16} />, text: '1000+ Commits' },
    { icon: <Award size={16} />, text: 'Open Source Champion' }
  ];

  return (
    <>
      <div 
        className={`card profile ${isExpanded ? 'expanded' : ''}`}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        {isExpanded && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(false);
            }}
            className="close-button"
          >
            <X size={24} />
          </button>
        )}

        <div className="profile-content">
          <img 
            src="./assets/images/me.jpg" 
            alt="Profile" 
            className={`profile-image ${isExpanded ? 'large' : ''}`}
          />
          
          <h2>Егор Абрамов</h2>
          <p className="username">kurays</p>

          {isExpanded && (
            <div className="expanded-content">
              {/* Status */}
              <div className="status-section">
                <div className="section-header">
                  <Activity size={20} />
                  <h3>Current Status</h3>
                </div>
                <div className="status-indicator">
                  <div className="status-dot"></div>
                  <p>Available for collaboration</p>
                </div>
              </div>

              {/* Skills */}
              <div className="skills-section">
                <h3>Skills</h3>
                <div className="skills-list">
                  {skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="achievements-section">
                <h3>Achievements</h3>
                <div className="achievements-grid">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="achievement-card">
                      <div className="achievement-icon">
                        {achievement.icon}
                      </div>
                      <span>{achievement.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isExpanded && (
        <div
          className="profile-overlay"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
};

export default ExpandableProfile;