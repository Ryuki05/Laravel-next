'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Zoo {
    id: number;
    name: string;
    location: string;
    description?: string; // Optional property
}

const ZooDetails = () => {
    const router = useRouter();
    const { id } = router.query; // URLからIDを取得
    const [zoo, setZoo] = useState<Zoo | null>(null); // 単一のZooの情報を保持

    const fetchZoo = async () => {
        if (id) {
            const response = await fetch(`/api/zoos/${id}`);
            if (response.ok) {
                const data = await response.json();
                setZoo(data);
            } else {
                console.error('Failed to fetch zoo:', response.status);
            }
        }
    };

    useEffect(() => {
        fetchZoo();
    }, [id]); // IDが変更されるたびに再取得

    return (
        <div>
            <Header />
            {zoo ? (
                <div>
                    <h1>{zoo.name}</h1>
                    <p>Location: {zoo.location}</p>
                    <p>Description: {zoo.description || 'No description available'}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <Footer />
        </div>
    );
};

export default ZooDetails;
