import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(),"data","php.json");

export async function GET(request) {
    try{
        const data = fs.readFileSync(filePath, "utf-8");
        return NextResponse.json(JSON.parse(data));
    }catch(error){
        return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
    }
    
}

export async function POST(request) {
    return new Response('PHP API is working!');
}