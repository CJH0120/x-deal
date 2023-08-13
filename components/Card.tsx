import { Card, CardFooter, Image, Button, CardHeader, CardBody, Link, Chip, Skeleton } from '@nextui-org/react'



export interface CardItemProps {
    card: cardPorps
    isload?: boolean
}

export interface cardPorps {
    productName: string
    productHref: string
    productPrice: string
    productImage: string
    storeName: string
    productCategory: string
}
const CardItem = ({ card, isload = false }: CardItemProps) => {
    const { productCategory, productHref, productImage, productName, productPrice, storeName } = card
    return (
        <Link target="_blank" href={productHref} >
            {
                isload ?
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

                    :
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

                        <div className='p-3 flex flex-col gap-2'>
                            <p color='default' className='font-semibold	 text-sm lg:text-xl	'>{productPrice}</p>
                            <Chip size="sm" color='primary' variant='flat'>
                                {storeName}
                            </Chip>
                        </div>
                    </Card>
            }
        </Link>
    )
}
export default CardItem