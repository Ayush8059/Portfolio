import React from 'react';

export const GithubIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.62-.3 7.5-1.8 7.5-8.18a5.45 5.45 0 0 0-1.5-3.8 5.05 5.05 0 0 0 .1-3.7s-1.2-.4-3.9 1.4a13.38 13.38 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.05 5.05 0 0 0 .1 3.7 5.45 5.45 0 0 0-1.5 3.8c0 6.38 3.88 7.88 7.5 8.18a4.8 4.8 0 0 0-1 3.02v4"/>
  </svg>
);

export const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
