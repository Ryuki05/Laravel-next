import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params; // URLからIDを取得
    try {
        // IDを使って特定の動物園の情報を取得
        const res = await fetch(`http://localhost:8000/api/zoos/${id}`);
        
        if (!res.ok) {
            return NextResponse.json({ error: 'Zoo not found' }, { status: 404 });
        }

        const zoo = await res.json();
        return NextResponse.json(zoo);
    } catch (error) {
        console.error('Error fetching zoo:', error);
        return NextResponse.json({ error: 'Failed to fetch zoo' }, { status: 500 });
    }
}
