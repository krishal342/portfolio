import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// get request to get all frameworks name
export async function GET(request) {
    try {
        const frameworks = await prisma.framework.findMany();
        return NextResponse.json(frameworks);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// create a framework name
export async function POST(request) {
    try {
        const { name } = await request.json();
        const framework = await prisma.framework.create({
            data: {
                name,
            },
        });
        return NextResponse.json(framework);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}