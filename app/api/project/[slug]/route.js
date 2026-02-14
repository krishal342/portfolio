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
        return NextResponse.json({ messgae: "Failed to read data", error:error });
    }
    
}

export async function POST(request, {params}) {
    try{

        const { slug } = await params;

        const { title, context, description, github_link, live_link, api_link } = await request.json();

        const filePath = path.join(process.cwd(),"data",`${slug}.json`);

        let existingData = [];
        let lengthOfData = 0;
        try{
            const fileContent = await fs.readFile(filePath, "utf-8");
            console.log(fileContent);
            existingData = JSON.parse(fileContent);
            lengthOfData = existingData.length;
        }catch(error){
            // if file does not exist or is empty, start with an empty array
            existingData = [];
            lengthOfData = 0;
        }

        existingData.push({id:lengthOfData + 1, title, context, description, github_link, live_link, api_link });

        await fs.writeFile(filePath, JSON.stringify(existingData,null,2));


        return NextResponse.json({success:true},{status:200});

    }catch(error){
        return NextResponse.json({ message: "Failed to write data", error:error });
    }
}