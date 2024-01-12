import React from 'react';
import { AvatarFrame, AvatarImage } from './index.css';

export default function Avatar({ imageSrc}: { imageSrc: string } ) {
  return (
    <AvatarFrame>
      <AvatarImage src={imageSrc} />
    </AvatarFrame>
  );
}