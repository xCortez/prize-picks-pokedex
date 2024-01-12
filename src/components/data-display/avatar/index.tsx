import React from 'react';
import { AvatarFrame, AvatarImage } from './index.css';

interface AvatarInterface {
  imageSrc: string;
}

export default function Avatar({ imageSrc }: AvatarInterface) {
  return (
    <AvatarFrame>
      <AvatarImage src={imageSrc} />
    </AvatarFrame>
  );
}