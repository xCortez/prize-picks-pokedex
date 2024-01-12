import React from 'react';
import { StyledCard } from './index.css';

export default function Card({ children }: { children: React.ReactNode }) {
  return <StyledCard>{children}</StyledCard>;
}