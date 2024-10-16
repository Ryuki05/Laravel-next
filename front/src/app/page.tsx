'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ZooCard from '@/components/ZooCard';
import { Irish_Grover } from 'next/font/google';

interface Zoo {
  id: number;
  name: string;
  location: string;
  description: string; // Optional property if not always present
}

const irishGrover = Irish_Grover({
  subsets: ['latin'],
  weight: '400',
});

const Page = () => {
  const [zoos, setZoos] = useState<Zoo[]>([]);

  useEffect(() => {
    const fetchZoos = async () => {
      const response = await fetch(`http://localhost:8000/api/zoos`);
      const data = await response.json();
      setZoos(data);
    };

    fetchZoos();
  }, []);

  return (
    <div className={`footer_position ${irishGrover.className}`}>
      {/* Headerにzoosを渡す */}
      <Header zoos={zoos} /> 
      <div className='container-wrap'>
        {zoos.map(zoo => (
          <ZooCard key={zoo.id} id={zoo.id} name={zoo.name} location={zoo.location} description={zoo.description} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
