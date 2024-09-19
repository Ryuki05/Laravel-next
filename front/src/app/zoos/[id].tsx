import React from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ZooDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [zoo,setZoo] = React.useState(null);

    React.useEffect(() => {
        const fetchZoo = async () => {
            if (id) {
                const response = await fetch(`/api/zoos/${id}`);
                const data = await response.json();
                setZoo(data);
            }
        };
        fetchZoo();
    }, [id]);
    if (!zoo) return <div>Loading...</div>;

    return (
        <div>
            <Header />
            <h1>{zoo.name}</h1>
            <p>Location: {zoo.Location}</p>
            <p>Description: {zoo.description}</p>
            <Footer />
        </div>
    );
};

export default ZooDetail;