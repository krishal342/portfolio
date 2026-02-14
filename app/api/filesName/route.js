import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET(request){
    try{
        const folderPath = path.join(process.cwd(),"data");
        const files = await fs.readdir(folderPath);

        const filesName = files.map((file)=> file.replace(".json",""));

        return NextResponse.json(filesName);
    }catch(error){
        return NextResponse.json({error:error.message},{status:500});
    }
}