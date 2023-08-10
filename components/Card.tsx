import { Card, CardFooter, Image, Button, CardHeader, CardBody, Link, Chip } from '@nextui-org/react'



interface CardItemProps {
    productName: string
    productHref: string
    productPrice: string
    productImage: string

}
const CardItem = ({ productHref, productName, productPrice, productImage }: CardItemProps) => {

    return (
        <Link target="_blank" href={productHref}>
            <Card className="py-4">
                <CardHeader className="pb-0 pt-1 px-4 flex-col items-start">
                    <div className='flex items-center mb-2 '>
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src="/favicon/coupang.png"
                            width={20}
                        />
                        <Chip variant="light" size="sm">쿠팡</Chip>
                    </div>

                    <h4 className="font-bold text-large">{productName ?? ""}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-0">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2018/09/12/17/0/08e18b54-5026-4414-866c-310eb01cc5d4.jpg"
                        width={230}
                    />
                    <Button color="primary" variant="solid">29,000원</Button>
                </CardBody>

            </Card>
        </Link>
    )
}
export default CardItem