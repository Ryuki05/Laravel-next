import React from 'react';
import Link from 'next/link';

interface ZooCardProps{
    id:number;
    name:string;
    location:string;
}

const ZooCard: React.FC<ZooCardProps> = ({id, name, location}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>Location: {location}</p>
        <Link href={`/zoos/${id}`}>See details</Link>
    </div>
  );
};

export default ZooCard;
