import { Chip, Image } from "@nextui-org/react"
import CardItem from "../Card"
import { CardList } from "../../dummy"

const ItemList = () => {
    const mallName: string[] = ["쿠팡", "11번가", "옥션", "지마켓"]
    const img = "https://thumbnail9.coupangcdn.com/thumbnails/remote/292x292ex/image/retail/images/8408571224194430-fc223782-8ed2-4834-9048-45095b7b79b0.png"
    return (
        <section className="my-4 sm:my-10">
            <div className="w-full ">
                <p className="text-base sm:text-2xl font-bold my-4 sm:my-10 ">해당 상품을 누르시면 구매 페이지로 이동합니다</p>
            </div>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
                {CardList.map((v, idx) => <CardItem key={idx}  {...v} />)
                }
            </div>
        </section>
    )
}

export default ItemList



