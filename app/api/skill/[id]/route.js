import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// update a skill
export async function PUT(request, {params}){
    try{
        const {id} = await params;
        const body = await request.json();
        let skill = await prisma.skill.findUnique({
            where:{
                id
            }
        });

        skill = {...skill, ...body};

        const updatedSkill = await prisma.skill.update({
            where: {
                id
            },
            data: skill
        });

        return NextResponse.json(updatedSkill);

    }catch(err){
        return NextResponse.json({error:err.message},{status:500});
    }
}