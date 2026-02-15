import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request) {
    try{
        const profile = await prisma.profile.findMany();
        return NextResponse.json(profile[0]);
    }catch(err){
        return NextResponse.json({error:err.message},{status:500});
    }
}