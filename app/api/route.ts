import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const { userId } = auth()
        if(!userId){ 
            return new NextResponse('User not found', { status:401 })
        }

        const {title, description, templateUsed } = await req.json()

        const createNewDoc = await db.aiOutput.create({
            data: {
                userId: userId,
                title: title,
                description: description,
                templateUsed,
            }
        })

        revalidatePath('/')
        return  NextResponse.json(createNewDoc, { status: 201 })
    } catch (err) {
        return new NextResponse('AI GENERATED: Error AI Generated',  {status: 500})
    }
}