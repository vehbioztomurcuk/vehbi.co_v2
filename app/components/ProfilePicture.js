import React from 'react';
import Image from 'next/image';

const ProfilePicture = ({ alt }) => {
  return (
    <div className="relative w-16 h-16 mr-4">
      <Image
        src="/pp.jpeg"
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
    </div>
  );
};

export default ProfilePicture;