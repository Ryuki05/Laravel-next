'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Zoo {
    id: number;
    name: string;
    location: string;
    description?: string; // Optional property
}

const ZooDetails = () => {
    const { id } = useParams(); // URLからIDを取得
    const [zoo, setZoo] = useState<Zoo | null>(null); // 単一のZooの情報を保持

    useEffect(() => {
        const fetchZoo = async () => {
            if (typeof id === 'string') { // idがstring型であることを確認
                const response = await fetch(`/api/zoos/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setZoo(data);
                } else {
                    console.error('Failed to fetch zoo:', response.status);
                }
            }
        };

        // IDが存在する場合のみfetchZooを呼び出す
        if (id) {
            fetchZoo();
        }
    }, [id]); // idを依存配列に追加

    return (
        <div>
            {/* 空の配列を渡す */}
            <Header zoos={[]} />
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
