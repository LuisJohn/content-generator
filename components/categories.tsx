import CategoryItem from "./category-items";

export interface CategoryProps{
    name: string
    value: string
}

function Categories({items}: {items: CategoryProps[]}) {
  return (
    <div className="flex gap-2 flex-wrap">
    {
        items.map((category)=>
            <CategoryItem
                key={category.name}
                name={category.name}
                value={category.value}
            ></CategoryItem>
        )
    }</div>
  )
}

export default Categories