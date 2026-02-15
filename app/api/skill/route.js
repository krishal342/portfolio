import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// get all skills
export async function GET(request){
    try{
        const skills = await prisma.skill.findMany();

        return NextResponse.json(skills);
    }catch(err){
        return NextResponse.json({error:err.message},{status:500});
    }
}

// create a skill
export async function POST(request){
    try{
        const {title, content} = await request.json();

        const skill = await prisma.skill.create({
            data: {
                title,
                content
            }
        });

        return NextResponse.json(skill);
    }catch(err){
        return NextResponse.json({error:err.message},{status:500});
    }
}