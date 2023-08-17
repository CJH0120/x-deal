import { useEffect, useState } from "react"
import { useCoupangCategory, useCoupangCategoryCount } from "../../utils/apiHook"
import { Button, Card, CardBody, CardFooter, Chip, Image, Link, Pagination, Skeleton, } from "@nextui-org/react"


import { Tabs, Tab } from "@nextui-org/tabs";
import { Cabin_Sketch } from "next/font/google";
import { LoadCard } from "./LoadCard";



interface ListProps {
    ismain: boolean
}


const CoupangList = () => {
    const Categories = ["전체", "가전", "핸드폰", "인테리어", "식품", "주방용품", "생활용품", "문구완구"]
    const [category, setCategory] = useState<React.Key>("전체")
    const [order, setOrder] = useState<React.Key>("")
    const [page, setPage] = useState<number>(1)
    const { data, mutate, isLoading } = useCoupangCategory(category as string, page, order as string)
    const { data: maxpage } = useCoupangCategoryCount(category as string)
    const handleTabSelectionChange = (key: React.Key) => {
        setCategory(key);
    };
    const handleTabOrder = (key: React.Key) => {
        setOrder(key);
    };
    const handelChange = (page: number) => {
        setPage(page)
    }
    useEffect(() => { setPage(1); }, [category, order])
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
    }, [page])
    return (
        <section className="my-10" >
            <Tabs variant="solid" className="flex" aria-label="Tabs variants" onSelectionChange={handleTabSelectionChange}>
                {Categories.map(v => <Tab key={v} title={v} />)}
            </Tabs>
            <Tabs variant="light" color="primary" className="flex my-5" aria-label="Tabs variants" onSelectionChange={handleTabOrder} >
                <Tab key={""} title="기본순" />
                <Tab key={"ASC"} title="가격 낮은순" />
                <Tab key={"DESC"} title="가격 높은순" />
            </Tabs>
            <>
                {!data?.length && !isLoading ? <div className="flex gap-4 flex-col justify-center items-center h-[300px]">
                    <p className="text-2xl font-bold">준비된 상품이 없습니다</p>
                    <p className="text-xl font-bold">추후에 이용해주세요</p>

                </div> :
                    <div className="h-full min-h-[250px] sm:min-h-[500px] grid gap-4 grid-cols-2 sm:grid-cols-4 ">
                        {data?.map((v, idx) => <CoupangCard key={idx} card={v} />)}
                        {isLoading && new Array(16).fill([]).map((_, idx) => <LoadCard key={idx} />)}
                    </div>
                }
            </>


            {!!maxpage && <div className="flex justify-center sm:justify-end sm:w-full mt-5"> < Pagination className="overflow-auto" onChange={handelChange} total={maxpage as number} initialPage={page} /></div>}


        </section>


    )


}

export default CoupangList

interface CardList {
    card: Product.Coupang

}

const CoupangCard = ({ card }: CardList) => {
    const { category, image, name, originPrice, percent, price, productUrl, status } = card

    return (
        <Link target="_blank" href={productUrl} >

            <Card shadow="sm" className=' max-w-[212px] lg:max-w-[232px] lg:w-[232px]  '   >
                <CardBody className="overflow-visible p-0  ">
                    <Image
                        loading='lazy'
                        shadow="sm"
                        draggable={false}
                        radius="lg"
                        className="w-full max-w-[212px]  lg:max-w-[232px] lg:w-[232px]    object-cover"
                        src={image}
                        alt={name}
                    />

                </CardBody>

                <CardFooter className="text-small justify-between">
                    <h3 className='truncate ... font-bold '>{name}</h3>
                </CardFooter>

                <div className='px-3 py-2 flex flex-col gap-2'>
                    <div className='flex justify-start items-center'>
                        <p className="font-semibold text-sm lg:text-xl mr-1 	" style={{ color: "#0369a1" }}>{percent}</p>
                        <p className='font-bold text-sm lg:text-xl	'>{price}</p>
                    </div>
                    <div className='flex flex-col justify-start itmes-center gap-2'>
                        <Chip size='sm' variant='dot' radius="md" color="primary" className="mr-2" >쿠팡</Chip>
                        <Chip size='sm' variant='dot' radius="md" color="danger" className="mr-2" >{status}</Chip>
                        {/* <Button size='sm' variant='flat' color="default"  >{status}</Button> */}
                    </div>
                </div>
            </Card>
        </Link>
    )
}


