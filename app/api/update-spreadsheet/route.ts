import updateSpreadsheet from '@/lib/updateSpreadsheet';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { totalUsers } = await req.json();

    if (typeof totalUsers !== 'number') {
        return NextResponse.json({ message: 'Invalid totalUsers value' }, { status: 400 });
    }

    try {
        await updateSpreadsheet(totalUsers);
        return NextResponse.json({ message: 'Spreadsheet updated successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error updating spreadsheet:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
