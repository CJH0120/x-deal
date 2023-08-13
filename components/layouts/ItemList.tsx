import { Chip, Image } from "@nextui-org/react"
import CardItem, { CardItemProps } from "../Card"
import { CardList } from "../../dummy"
import { useEffect } from "react"


interface ItemListProps {
    data: CardItemProps[]
}
const ItemList = ({ data }: ItemListProps) => {
    return (
        <section className="my-4 sm:my-10">
            <div className="w-full ">
                {/* <p className="text-base sm:text-2xl font-bold my-4 sm:my-10 ">해당 상품을 누르시면 구매 페이지로 이동합니다</p> */}
            </div>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
                {data?.map((v, idx) => <CardItem key={idx}  {...v} />)
                }
            </div>
        </section>
    )
}

export default ItemList



