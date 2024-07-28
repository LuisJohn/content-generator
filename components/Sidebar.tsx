'use client'
import { cn } from '@/lib/utils';
import Logo from './Logo'
import { CreditCard, History, WandSparkles } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const menuList = [
    {
        name: "Magic Content",
        icon: WandSparkles,
        path: '/dashboard'
    },
    {
        name: "Generated History",
        icon: History,
        path: '/dashboard/history'
    },
    {
        name: "Upgrade",
        icon: CreditCard,
        path: '/dashboard/upgrade'
    },
]

function Sidebar() {
    const path = usePathname();
    
  return (
    <div className='p-5 bg-white flex flex-col h-[800px]'>
        <Logo/>
        <div className="mt-10 h-max flex flex-col justify-between">
            {menuList.map((menu)=> 
                <Link href={menu.path} key={menu.name} className={cn('flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg items-center', path === menu.path && 'bg-primary text-white rounded-lg')}>
                    <menu.icon className='h-6 w-6'></menu.icon>
                    <h2>{menu.name}</h2>
                </Link>
            )}
        </div>
        
    </div>
  )
}

export default Sidebar