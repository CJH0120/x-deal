import { Card, CardFooter, Image, Button, CardHeader, CardBody, Link, Chip, Skeleton } from '@nextui-org/react'



export interface CardItemProps {
    card: Product.Coupang
    isload?: boolean
}


const CoupangCard = ({ card, isload }: CardItemProps) => {
    const { category, image, name, originPrice, percent, price, productUrl, status } = card
    return (
        <Link target="_blank" href={productUrl} >
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
            }
        </Link>
    )
}
export default CoupangCard