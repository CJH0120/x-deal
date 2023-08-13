import { Card, CardFooter, Image, Button, CardHeader, CardBody, Link, Chip } from '@nextui-org/react'



export interface CardItemProps {
    productName: string
    productHref: string
    productPrice: string
    productImage: string
    storeName: string
    isDetail: boolean
}
const CardItem = ({ productHref, productName, productPrice, productImage, isDetail, storeName }: CardItemProps) => {
    return (
        <Link target="_blank" href={productHref} >
            <Card shadow="sm" className=' max-w-[212px] lg:max-w-[212px] ] '   >
                <CardBody className="overflow-visible p-0  ">
                    <Image
                        shadow="sm"
                        radius="lg"
                        className="w-full max-w-[212px]  lg:max-w-[212px]  object-cover"
                        src={productImage}
                    />
                </CardBody>
                <CardFooter className="text-small justify-between">
                    <b className='truncate ... '>{productName}</b>
                </CardFooter>

                <div className='p-3 flex flex-col gap-2'>
                    <p color='default' className='font-semibold	 text-sm lg:text-xl	'>{productPrice}</p>
                    <Chip size="sm" color='primary' variant='flat'>
                        {storeName}
                    </Chip>
                </div>
            </Card>
        </Link>
    )
}
export default CardItem