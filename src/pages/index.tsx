import { Inter } from 'next/font/google'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter, CardHeader, Chip, Image, Link } from '@nextui-org/react'
import CardItem from '../../components/Card'
import LayOut from '../../components/layouts/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <LayOut>
      <SiteGather />
      <div className=" py-4 px-6 gap-3 grid grid-cols-2 sm:gap-4 sm:grid-cols-4" style={{ width: "100%", maxWidth: "1024px", margin: "0 auto" }}>
        {/* <CardItem productName='낚시대' productHref='https://link.coupang.com/a/6pRcM' />
        <CardItem productName='낚시대' productHref='https://link.coupang.com/a/6pRcM' />
        <CardItem productName='낚시대' productHref='https://link.coupang.com/a/6pRcM' />
        <CardItem productName='낚시대' productHref='https://link.coupang.com/a/6pRcM' />
        <CardItem productName='낚시대' productHref='https://link.coupang.com/a/6pRcM' /> */}
      </div>
    </LayOut>
  )
}



const SiteGather = () => {
  const list = [
    {
      title: "쿠팡",
      img: "/logo/coupang.png",
      link: "https://bitl.bz/D7jHv6",
    },
    {
      title: "11번가",
      img: "/logo/11.png",
      link: "https://bitl.bz/UNlyEZ",
    },
    {
      title: "옥션",
      img: "/logo/autcion.png",
      link: "https://bitl.bz/HsHOw6",
    },
    {
      title: "지마켓",
      img: "/logo/gMarket.png",
      link: "https://bitl.bz/XfmPia",
    },
    {
      title: "지에스몰",
      img: "/logo/gsMall.jpeg",
      link: "https://bitl.bz/Wb8EmX",
    },
    {
      title: "위메프",
      img: "/logo/we.jpeg",
      link: "https://bitl.bz/f53jjo",
    },
    {
      title: "하이마트",
      img: "/logo/hiMart.jpeg",
      link: "https://bitl.bz/cBSLxW",
    },
    {
      title: "롯데몰",
      img: "/logo/lotte.jpeg",
      link: "https://bitl.bz/GsWQR3",
    },
  ];

  return (
    <div className=' m-auto px-6' style={{ width: "100%", maxWidth: "1024px", }}>
      <p className='mb-3 sm:mb-4'>쇼핑몰에서 할인 상품을 저렴하게 구매하세요 !</p>
      <p className='mb-4 sm:mb-8'>네모 영역을 누르시면 해당 사이트의 할인 상품을 보실수있습니다</p>

      <div className="gap-4 grid grid-cols-2 sm:grid-cols-4" >
        {list.map((item, index) => (
          <Card shadow="sm" key={index} isPressable onClick={() => { }}  >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width={"100%"}
                alt={item.title}
                className="w-full object-cover h-[140px] "
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <Link href={item.link} target="_blank">
                <Chip radius="sm" color="primary">방문하기</Chip>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}




