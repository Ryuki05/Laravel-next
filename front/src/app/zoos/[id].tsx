import React from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Zooの型を定義
interface Zoo {
    id: number;
    name: string;
    location: string;
    description: string;
}

const ZooDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [zoo, setZoo] = React.useState<Zoo | null>(null); // Zooまたはnullを指定

    React.useEffect(() => {
        const fetchZoo = async () => {
            if (id) {
                try {
                    const response = await fetch(`/api/zoos/${id}`);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data: Zoo = await response.json();
                    setZoo(data);
                } catch (error) {
                    console.error('Error fetching zoo:', error);
                }
            }
        };
        fetchZoo();
    }, [id]);

    if (!zoo) return <div>Loading...</div>; // カスタマイズ可能

    return (
        <div>
            <Header />
            <h1>{zoo.name}</h1>
            <p>Location: {zoo.location}</p>
            <p>Description: {zoo.description}</p>
            <Footer />
        </div>
    );
};

export default ZooDetail;
