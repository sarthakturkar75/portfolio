import React from 'react';
import styled from 'styled-components';

const Card = () => {
  const skills = {
    'ML Algorithms & Frameworks': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'],
    'Computer Vision & Image Processing': ['OpenCV', 'YOLO', 'Segmentation', 'Object Detection'],
    'Frontend Development': ['JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
    'Backend Development': ['Node.js', 'Electron', 'MongoDB', 'SQL'],
    'Deployment & Version Control': ['Docker', 'Git', 'Linux'],
    'Other Tools & Libraries': ['Pandas', 'NumPy', 'Jupyter Notebooks']
  };

  return (
    <StyledWrapper>
      <div className="cube-container">
        <div className="cube">
          <div className="face front">
            <h2>ML Algorithms & Frameworks</h2>
            <ul>
              {skills['ML Algorithms & Frameworks'].map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="face back">
            <h2>Computer Vision & Image Processing</h2>
            <ul>
              {skills['Computer Vision & Image Processing'].map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="face right">
            <h2>Frontend Development</h2>
            <ul>
              {skills['Frontend Development'].map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="face left">
            <h2>Backend Development</h2>
            <ul>
              {skills['Backend Development'].map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="face top">
            <h2>Deployment & Version Control</h2>
            <ul>
              {skills['Deployment & Version Control'].map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="face bottom">
            <h2>Other Tools & Libraries</h2>
            <ul>
              {skills['Other Tools & Libraries'].map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cube-container {
    width: 200px;
    height: 200px;
    perspective: 800px;
    margin: 50px auto;
  }

  .cube {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: rotate 10s infinite linear;
  }

  .face {
    position: absolute;
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    font-size: 14px;
    text-align: center;
    border: 2px solid;
    border-image: linear-gradient(to right, #ff6b6b, #355c7d, #557d35, #cfcf16, #a51f1f) 1;
    box-shadow: 0 0 20px rgba(190, 8, 245, 0.8);
    opacity: 0.95;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  .front { transform: translateZ(100px); }
  .back { transform: rotateY(180deg) translateZ(100px); }
  .right { transform: rotateY(90deg) translateZ(100px); }
  .left { transform: rotateY(-90deg) translateZ(100px); }
  .top { transform: rotateX(90deg) translateZ(100px); }
  .bottom { transform: rotateX(-90deg) translateZ(100px); }

  .cube-container:hover .cube {
    animation-play-state: paused;
  }

  @keyframes rotate {
    0% { transform: rotateX(0) rotateY(0) rotateZ(0); }
    100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
  }

  h2 {
    font-size: 16px;
    text-transform: uppercase;
    color:rgba(230, 0, 255, 0.73);
    margin-bottom: 8px;
  }

  ul {
    list-style: none;
    padding: 0;
    font-size: 12px;
    text-align: center;
    color: #ddd;
    line-height: 1.5;
  }

  li {
    margin: 3px 0;
  }
`;

export default Card;