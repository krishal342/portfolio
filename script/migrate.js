import fs from 'fs/promises';
import path from 'path';
import { prisma } from '../lib/prisma.js';

async function migrate() {
    try {
        const folderPath = path.join(process.cwd(), "data");
        const files = await fs.readdir(folderPath);
        const filesNames = files.map((file) => file.replace(".json", ""));


        for (const fileName of filesNames) {
            const filePath = path.join(process.cwd(), "data", `${fileName}.json`);
            const data = await fs.readFile(filePath, "utf-8");
            const parsedData = JSON.parse(data);
            // console.log(parsedData[0])

            let framework = await prisma.framework.findUnique({
                where: {
                    name: fileName
                }
            });

            if (!framework) {
                framework = await prisma.framework.create({
                    data: {
                        name: fileName
                    }
                });
            }


            parsedData.map(async (item)=>{

                let project = await prisma.project.findUnique({
                    where: {
                        github_link: item.github_link
                    }
                })

                if (!project) {
                    await prisma.project.create({
                        data:{
                            title: item.title,
                            context: item.context,
                            description: item.description,
                            github_link: item.github_link,
                            live_link: item.live_link,
                            api_link: item.api_link,
                            framework: {
                                connect: {
                                    id: framework.id
                                }
                            }
                        }
                    })
                }


             
            })
            
        }
        
    } catch (error) {
        console.log(error.message);
    }
}

migrate();