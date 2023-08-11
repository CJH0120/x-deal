import { Chip } from "@nextui-org/react"

const ItemList = () => {
    const mallName: string[] = ["쿠팡", "11번가", "옥션", "지마켓"]
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


            <div>
                CONTENT
            </div>
        </section>
    )
}

export default ItemList



