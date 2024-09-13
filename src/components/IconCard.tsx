import React from 'react';
import '../styles/components/IconCard.scss';

interface IconCardProps {
    icon: React.ReactNode;
    progress: number; // Add a new prop for progress value
}

const IconCard: React.FC<IconCardProps> = ({ icon, progress }) => {
    const progressStyle = {
        strokeDashoffset: 440 - (440 * progress) / 100 // Calculate the stroke dash offset based on progress
    };

    return (
        <div className="card icon-card">
            <div className="icon-wrapper">
                <svg className="progress-ring" width="120" height="120">
                    <circle
                        className="progress-ring-circle"
                        stroke="#ccc"
                        strokeWidth="8"
                        fill="transparent"
                        r="52"
                        cx="60"
                        cy="60"
                    />
                    <circle
                        className="progress-ring-circle"
                        stroke="#007bff"
                        strokeWidth="8"
                        fill="transparent"
                        r="52"
                        cx="60"
                        cy="60"
                        style={progressStyle} // Apply the progress style
                    />
                </svg>
                {icon}
            </div>
        </div>
    );
};

export default IconCard;