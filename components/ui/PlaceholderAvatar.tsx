import React from 'react';
import { User } from 'lucide-react';

const PlaceholderAvatar = ({ size = 48, backgroundColor = '#1DA1F2', iconColor = '#ffffff' }) => {
  return (
    <div 
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: backgroundColor,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <User size={size * 0.6} color={iconColor} />
    </div>
  );
};

export default PlaceholderAvatar;
