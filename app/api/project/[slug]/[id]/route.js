import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function PUT(request , {params}){
    try{
        const { slug, id } = await params;

        const body = await request.json();

        const filePath = path.join(process.cwd(),"data",`${slug}.json`);

        const fileContent = await fs.readFile(filePath, "utf-8");
        let projects = JSON.parse(fileContent);

        const projectIndex = projects.findIndex((project) => project.id === parseInt(id));

        if (projectIndex === -1) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 });
        }

        projects[projectIndex] = { ...projects[projectIndex], ...body };

        await fs.writeFile(filePath, JSON.stringify(projects, null, 2));

        return NextResponse.json({success:true},{status:200});
    }catch(error){
        return NextResponse.json({ error: "Failed to update data" }, { status: 500 });
    }
}