import { NextResponse } from "next/server";

export async function GET(){
    try {
        const res = await fetch(`http://localhost:8000/api/zoos`);
        const zoos = await res.json();
        return NextResponse.json(zoos);
    } catch (error) {
        console.error('Error fetching zoos:', error);
        return NextResponse.json({ error: 'Failed to fetch zoos' }, {status:500});
    }
}