import { Card, CardFooter, Image, Button, CardHeader, CardBody, Link, Chip } from '@nextui-org/react'



export interface CardItemProps {
    productName: string
    productHref: string
    productPrice: string
    productImage: string
    storeName: string
    isDetail: boolean
    productCategory: string
}
const CardItem = ({ productHref, productName, productPrice, productImage, isDetail, storeName }: CardItemProps) => {
    return (
        <Link target="_blank" href={productHref} >
            <Card shadow="sm" className=' max-w-[212px] lg:max-w-[212px] ] '   >
                <CardBody className="overflow-visible p-0  ">
                    <Image
                        loading='lazy'
                        shadow="sm"
                        draggable={false}
                        radius="lg"
                        className="w-full max-w-[212px]  lg:max-w-[212px]  object-cover"
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
        </Link>
    )
}
export default CardItem