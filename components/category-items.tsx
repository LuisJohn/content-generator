'use client'

import { cn } from "@/lib/utils"
import { CategoryProps } from "./categories"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import qs from "query-string";


function CategoryItem({name, value}: CategoryProps) {
  const pathName = usePathname()
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get('category')

  const isSelected = currentCategory === value;
  const handleClick = () => {
    const url = qs.stringifyUrl({
      url: pathName,
      query: {
        category: isSelected ? null : value,
      }
    },
    {
      skipNull: true,
      skipEmptyString: true
    });
    router.push(url)
  }
  return (
    <button 
    onClick={handleClick}
    className={cn('py-2 px-4 text-sm border rounded-full flex items-center cursor-pointer hover:bg-slate-100')}>
        {name}
    </button>
  )
}

export default CategoryItem