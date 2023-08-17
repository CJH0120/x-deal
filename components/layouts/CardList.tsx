import { useEffect, useState } from "react"
import { useProducCategory, useProducCategoryCount, useProductData } from "../../utils/apiHook"
import { CardBody, CardFooter, Chip, Image, Link, Tab, Tabs, Card, Pagination } from "@nextui-org/react"
import { LoadCard } from "./LoadCard"





interface CardListProps {
    storeName: string
}
const CardList = ({ storeName }: CardListProps) => {
    const [name, setName] = useState<string>("")
    const [page, setPage] = useState<number>(1)
    const [order, setOrder] = useState<React.Key>("")
    const [category, setCategory] = useState<React.Key>("전체")
    const [categories, setCategories] = useState<string[]>(["전체"])
    useEffect(() => {
        switch (storeName) {
            case "wemakeprice": setName("위메프")
        }
    }, [storeName])
    const { data: count } = useProducCategoryCount(name, category as string)
    const { data: categoryList, isLoading: isCategoryLoding } = useProducCategory(name)
    const { data, isLoading } = useProductData(name, category as string, page, order as string)
    useEffect(() => {
        setCategories(prevList => [...prevList, ...categoryList ?? []])
    }, [categoryList])
    const handleTabSelectionChange = (key: React.Key) => {
        setCategory(key);
    };
    const handelChange = (page: number) => {
        setPage(page)
    }
    const handleTabOrder = (key: React.Key) => {
        setOrder(key);
    };
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

            {
                categories.length > 1 &&
                <>
                    <Tabs variant="solid" className="flex" aria-label="Tabs variants" onSelectionChange={handleTabSelectionChange}>
                        {categories.map(v => <Tab key={v} title={v} />)}
                    </Tabs>
                    <Tabs variant="light" color="primary" className="flex my-5" aria-label="Tabs variants" onSelectionChange={handleTabOrder} >
                        <Tab key={""} title="기본순" />
                        <Tab key={"ASC"} title="가격 낮은순" />
                        <Tab key={"DESC"} title="가격 높은순" />
                    </Tabs>
                </>
            }

            <>
                {!data?.length && !isLoading ? <div className="flex gap-4 flex-col justify-center items-center h-[300px]">
                    <p className="text-2xl font-bold">준비된 상품이 없습니다</p>
                    <p className="text-xl font-bold">추후에 이용해주세요</p>

                </div> :
                    <div className="h-full min-h-[250px] sm:min-h-[500px] grid gap-4 grid-cols-2 sm:grid-cols-4 ">
                        {data?.map((v, idx) => <CardItem key={idx} {...v} storeName={storeName} />)}
                        {isLoading && new Array(16).fill([]).map((_, idx) => <LoadCard key={idx} />)}
                    </div>
                }
            </>

            {!!count && !!data && <div className="flex justify-center sm:justify-end sm:w-full mt-5"> < Pagination className="overflow-auto" onChange={handelChange} total={Number(count) as number} initialPage={page} /></div>}


        </section>
    )


}

export default CardList







const CardItem = ({ NewLink, productCategory, productImage, productName, productOriginPrice, productPercent, productPrice, productStatus, productUrl, storeName }: Product.Card) => {

    const [store, setStore] = useState<string>('')
    switch (storeName) {
        case "wemakeprice": "위메프"

        default: storeName
    }

    useEffect(() => {
        switch (storeName) {
            case "wemakeprice": setStore("위메프")

            default: storeName
        }
    }, [storeName])
    return (
        <Link target="_blank" href={NewLink} >
            <Card shadow="sm" className=' max-w-[212px] lg:max-w-[232px] lg:w-[232px]  '   >
                <CardBody className="overflow-visible p-0  ">
                    <Image
                        loading='lazy'
                        shadow="sm"
                        draggable={false}
                        radius="lg"
                        className="w-full max-w-[212px]  lg:max-w-[232px] lg:w-[232px]    object-cover"
                        src={productImage}
                        alt={productName}
                    />

                </CardBody>

                <CardFooter className="text-small justify-between">
                    <h3 className='truncate ... font-bold '>{productName}</h3>
                </CardFooter>

                <div className='px-3 py-2 flex flex-col gap-2'>
                    <div className='flex justify-start items-center'>
                        <p className="font-semibold text-sm lg:text-xl mr-1 	" style={{ color: "#0369a1" }}>{productPercent}</p>
                        <p className='font-bold text-sm lg:text-xl	'>{productPrice}</p>
                    </div>
                    <div className='flex flex-col justify-start itmes-center gap-2'>
                        <Chip size='sm' variant='dot' radius="md" color="primary" className="mr-2" >{store}</Chip>
                        <Chip size='sm' variant='dot' radius="md" color="danger" className="mr-2" >{store === "위메프" && "모바일 전용"}</Chip>
                        {/* <Button size='sm' variant='flat' color="default"  >{status}</Button> */}
                    </div>
                </div>
            </Card>
        </Link>
    )
}