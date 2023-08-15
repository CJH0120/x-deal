import { useEffect, useState } from "react"
import { useCoupangCategory, useCoupangCategoryCount } from "../../utils/apiHook"
import { Button, Card, CardBody, CardFooter, Chip, Image, Link, Pagination, Skeleton, } from "@nextui-org/react"


import { Tabs, Tab } from "@nextui-org/tabs";



interface ListProps {
    ismain: boolean
}


const CoupangList = () => {
    const Categories = ["전체", "가전", "핸드폰", "인테리어", "식품", "주방용품", "생활용품", "문구완구"]
    const [category, setCategory] = useState<React.Key>("전체")
    const [page, setPage] = useState<number>(1)
    const { data, mutate, isLoading } = useCoupangCategory(category as string, page)
    const { data: maxpage } = useCoupangCategoryCount(category as string)
    const handleTabSelectionChange = (key: React.Key) => {
        setCategory(key);
    };

    const handelChange = (page: number) => {
        setPage(page)
    }
    useEffect(() => { setPage(1) }, [category])
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
    }, [page])
    return (
        <section className="my-10" >

            <Tabs variant="solid" aria-label="Tabs variants" onSelectionChange={handleTabSelectionChange}>

                {Categories.map(v => <Tab key={v} title={v} />)}
            </Tabs>

            <>
                <div className="h-full min-h-[500px] grid gap-4 grid-cols-2 sm:grid-cols-4 my-5">
                    {data?.map((v, idx) => <CoupangCard key={idx} card={v} />)}
                    {isLoading && new Array(16).fill([]).map((_, idx) => <LoadCard key={idx} />)}
                </div>
            </>


            {!!maxpage && <div className="flex justify-end sm:w-full"> < Pagination className="overflow-auto" onChange={handelChange} total={maxpage as number} initialPage={1} /></div>}


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

                <div className='p-3 flex flex-col gap-2'>
                    <div className='flex justify-between items-center'>
                        <Chip color="danger" className='flex ' size="sm" variant='flat' >-{percent}</Chip>
                        <p className='font-semibold 	 text-sm lg:text-xl	'>{price}</p>
                    </div>
                    <div className='flex justify-between itmes-center'>
                        <Chip size="md" color='primary' variant='flat'>
                            쿠팡
                        </Chip>
                        <Button size='sm' variant='solid'  >{status}</Button>
                    </div>
                </div>
            </Card>
        </Link>
    )
}


const LoadCard = () => {
    return (
        <Card className=" flex flex-col grow w-full h-full space-y-5 " radius="lg">
            <Skeleton className="w-full h-[155px] sm:w-full sm:h-[212px] rounded-lg">
                <div className="h-24  rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="space-y-3 p-3">
                <Skeleton className="w-3/5 rounded-lg">
                    <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                    <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
            </div>
        </Card>
    )
}