import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar';
import { cn } from '@/lib/utils';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


function DashboardLayout({children}: {
    children: Readonly<React.ReactNode>
}) {
  return (
    <div className={cn(inter.className, 'bg-gray-50 h-screen')}>
      <div className='md:w-64 hidden md:block fixed'><Sidebar/></div>
      <div className='md:ml-64 h-fit pb-5 bg-gray-50'>{children}</div>
    </div>
    // <body className={inter.className}>
    //     <Navbar/>
    //     {children}
    // </body>
  )
}

export default DashboardLayout