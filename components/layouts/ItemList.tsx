import { Chip } from "@nextui-org/react"
import CardItem from "../Card"

const ItemList = () => {
    const mallName: string[] = ["쿠팡", "11번가", "옥션", "지마켓"]
    const img = "https://thumbnail9.coupangcdn.com/thumbnails/remote/292x292ex/image/retail/images/8408571224194430-fc223782-8ed2-4834-9048-45095b7b79b0.png"
    return (
        <section className="my-4 sm:my-10">
            <div className="w-full ">
                <p className="text-xl sm:text-2xl font-bold">오늘 업데이트된 최신 가격을 만나보세요</p>
                <div className="flex gap-2 my-4">
                    {mallName.map((v, index) => (
                        <Chip key={index} color="primary"  >{v}</Chip>
                    ))}
                </div>

            </div>


            {/* <CardItem productImage={img} productPrice="99,999원" productName='낚시대' productHref='https://link.coupang.com/a/6pRcM' />
            <CardItem productImage={img} productPrice="99,999원" productName='낚시대' productHref='https://link.coupang.com/a/6pRcM' />
            <CardItem productImage={img} productPrice="99,999원" productName='낚시대' productHref='https://link.coupang.com/a/6pRcM' />
            <CardItem productImage={img} productPrice="99,999원" productName='낚시대' productHref='https://link.coupang.com/a/6pRcM' />
            <CardItem productImage={img} productPrice="99,999원" productName='낚시대' productHref='https://link.coupang.com/a/6pRcM' />
            <CardItem productImage={img} productPrice="99,999원" productName='낚시대' productHref='https://link.coupang.com/a/6pRcM' />
            <CardItem productImage={img} productPrice="99,999원" productName='낚시대' productHref='https://link.coupang.com/a/6pRcM' />
            <CardItem productImage={img} productPrice="99,999원" productName='낚시대' productHref='https://link.coupang.com/a/6pRcM' />
            <CardItem productImage={img} productPrice="99,999원" productName='낚시대' productHref='https://link.coupang.com/a/6pRcM' />
            <CardItem productImage={img} productPrice="99,999원" productName='낚시대' productHref='https://link.coupang.com/a/6pRcM' />
            <CardItem productImage={img} productPrice="99,999원" productName='낚시대' productHref='https://link.coupang.com/a/6pRcM' />
            <CardItem productImage={img} productPrice="99,999원" productName='낚시대' productHref='https://link.coupang.com/a/6pRcM' />
            <CardItem productImage={img} productPrice="99,999원" productName='낚시대' productHref='https://link.coupang.com/a/6pRcM' /> */}

        </section>
    )
}

export default ItemList



