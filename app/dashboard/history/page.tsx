import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { auth } from "@clerk/nextjs/server"
import { db } from "@/lib/db"
import { format } from "date-fns";


const History = async () => {

  const { userId } = auth()
  const userHistory = await db.aiOutput.findMany({
    where:{
      userId : userId as string
    }
  })
  return (
    <div className='mx-5 py-2'>
      <div className="mt-5 py-6 px-4 bg-white rounded">
        <h2 className='font-medium'>Output History</h2>
      </div>
      <div>
        <Table className='mt-5 py-6 px-4 bg-white rounded'>
          <TableCaption>List of all your AI Content History</TableCaption>
          <TableRow>
            <TableHead className="w-[250px]">Template</TableHead>
            <TableHead className="w-[250px]">Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Created At</TableHead>
          </TableRow>
          <TableBody>
            {
              userHistory && userHistory.length > 0 ? 
              userHistory.reverse().map((item)=> 
                <TableRow key={item.id} className="cursor-pointer">
                  <TableCell>{item.templateUsed}</TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell className="whitespace-pre-wrap">{item.description}</TableCell>
                  <TableCell>{format(item.createdAt, "MM/dd/yyyy")}</TableCell>
                </TableRow>
              ) :
              null
            }
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default History