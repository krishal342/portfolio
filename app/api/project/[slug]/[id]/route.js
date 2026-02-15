import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function PUT(request, { params }) {
    try {
        const { slug, id } = await params;

        const body = await request.json();

        let project = await prisma.project.findUnique({
            where:{
                id
            }
        });

        if (!project) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 });
        }

        project = {
            ...project,
            ...body
        };

        const updatedProject = await prisma.project.update({
            where: {
                id
            },
            data: project
        });

        return NextResponse.json(updatedProject);

    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { slug, id } = await params;

        const project = await prisma.project.delete({
            where: {
                id
            }
        });

        return NextResponse.json({message:"Project deleted successfully", project});
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}