import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";


export async function GET(request, { params }) {
    try{
        const { slug } = await params;

        const filePath = path.join(process.cwd(),"data",`${slug}.json`);

        const data = await fs.readFile(filePath, "utf-8");
        return NextResponse.json(JSON.parse(data));
    }catch(error){
        return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
    }
    
}

export async function POST(request) {
    return new Response('Node.js API is working!');
}