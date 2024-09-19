'use client';
import React, {useEffect,useState} from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ZooCard from '@/components/ZooCard';

interface Zoo {
  id: number;
  name: string;
  location: string;
  description?: string; // Optional property if not always present
}

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
    <div>
      <Header />
      <h1>Zoo List</h1>
      <div>
        {zoos.map(zoo =>(
          <ZooCard key={zoo.id} id={zoo.id} name={zoo.name} location={zoo.location}/>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Page;