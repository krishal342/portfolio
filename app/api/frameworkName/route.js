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