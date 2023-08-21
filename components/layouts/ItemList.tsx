import { Button, Chip, Image, Link, Tab, Tabs } from "@nextui-org/react"
import CardItem, { CardItemProps, cardPorps } from "../Card"
import { useEffect } from "react"
import { Product } from "../../interface"

interface ItemListProps {
    data: Product.Coupang[] | cardPorps[]
    isload?: boolean
    listTitle?: string
}
const ItemList = ({ data, isload }: ItemListProps) => {
    return (
        <section className="my-4 sm:my-0">
            {!!data?.length ?
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
                    {data?.map((v, idx) => <CardItem key={idx} card={v} isload={isload} />)
                    }
                </div>
                :
                <div className="flex gap-4 flex-col justify-center items-center h-[300px]">
                    <p className="text-2xl font-bold">준비된 상품이 없습니다</p>
                    <p className="text-xl font-bold">잠시 뒤에 이용해주세요.</p>

                </div>
            }
        </section>
    )
}

export default ItemList



