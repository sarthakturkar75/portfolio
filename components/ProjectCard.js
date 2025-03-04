import React from 'react';
import styled from 'styled-components';

export default function ProjectCard({ title, subtitle, description, imageUrl }) {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-bg" style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="card-content">
          <p className="heading">{title}</p>
          <p>{subtitle}</p>
          <p>{description}</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 190px;
    height: 254px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 12px;
    gap: 12px;
    border-radius: 8px;
    cursor: pointer;
  }

  /* Pseudo-element for the primary gradient overlay (lowest layer) */
  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: 200px;
    height: 264px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
    z-index: -4;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  /* Pseudo-element for the secondary gradient overlay with blur */
  .card::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
    z-index: -3;
  }

  /* Image layer placed above the pseudo-elements */
  .card-bg {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    z-index: -2;
    border-radius: 8px;
    filter: brightness(0.4); /* Darken image further for neon text contrast */
  }

  /* Text content layer placed on top */
  .card-content {
    position: relative;
    z-index: 1;
  }

  .heading {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
    color: #fff;
  }

  .card-content p:not(.heading) {
    font-size: 14px;
    color: #fff;
  }

  .card-content p:last-child {
    color: #e81cff;
    font-weight: 600;
  }

  .card:hover::after {
    filter: blur(30px);
  }

  .card:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }
`;