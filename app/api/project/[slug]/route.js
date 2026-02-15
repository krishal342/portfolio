import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


// get all projects of a framework
export async function GET(request, { params}){
    try{
        const { slug } = await params;

        const framework = await prisma.framework.findUnique({
            where: {
                name: slug
            },
            include: {
                projects: true,
            }
        });

        return NextResponse.json(framework.projects);
    }catch(err){
        return NextResponse.json({error:err.message},{status:500});
    }
}

// create a project of a framework
export async function POST(request, { params}){
    try{
        const { slug } = await params;

        const { title, context, description, github_link, live_link, api_link } = await request.json();

        let framework = await prisma.framework.findUnique({
            where: {
                name: slug
            }
        });

        if(!framework){
            framework = await prisma.framework.create({
                data: {
                    name: slug
                }
            })
        }

        const project = await prisma.project.create({
            data: {
                title,
                context,
                description,
                github_link,
                live_link,
                api_link,
                framework:{
                    connect:{
                        id:framework.id
                    }
                }
            }
        });

        return NextResponse.json(project);
    }catch(err){
        return NextResponse.json({error:err.message},{status:500});
    }
}