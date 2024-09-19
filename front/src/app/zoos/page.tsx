'use client';
import React,{useEffect, useState} from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ZooCard from '@/components/ZooCard';

interface Zoo {
    id: number;
    name: string;
    location: string;
    description?: string; // Optional property if not always present
}

const ZooList = () => {
    const [zoos,setZoos] = useState<Zoo[]>([]);

    const fetchZoos = async () => {
        const response = await fetch(`/api/zoos`);
        const data = await response.json();
        setZoos(data);
    };
    useEffect(() => {
        fetchZoos();
    }, []);
  return (
    <div>
        <Header />
        <h1>Zoo List</h1>
        <div>
            {zoos.length > 0 ? (
                zoos.map(zoo => (
                    <ZooCard key={zoo.id} id={zoo.id} name={zoo.name} location={zoo.location} />
                ))
            ) : (
                <p>No zoos found.</p>
            )}
        </div>
        <Footer />
    </div>
  );
};

export default ZooList;
