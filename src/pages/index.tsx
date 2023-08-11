import { Inter } from 'next/font/google'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter, CardHeader, Chip, Image, Link } from '@nextui-org/react'
import CardItem from '../../components/Card'
import LayOut from '../../components/layouts/layout'
import { useRouter } from 'next/router'
import ItemList from '../../components/layouts/ItemList'

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
      <ItemList />

    </LayOut>
  )
}


interface siteProps {
  title: string
  img: string
  link: string
  pageLink: string

}
const SiteGather = () => {
  const list: siteProps[] = [
    {
      title: "쿠팡",
      img: "/logo/coupang.png",
      link: "https://link.coupang.com/a/6qRXH",
      pageLink: "/coupang"
    },
    {
      title: "11번가",
      img: "/logo/11.png",
      link: "https://bitl.bz/UNlyEZ",
      pageLink: "/11st"

    },
    {
      title: "옥션",
      img: "/logo/autcion.png",
      link: "https://bitl.bz/HsHOw6",
      pageLink: "/auction"
    },
    {
      title: "지마켓",
      img: "/logo/gMarket.png",
      link: "https://bitl.bz/XfmPia",
      pageLink: "/gmarket"

    },
    {
      title: "지에스몰",
      img: "/logo/gsMall.jpeg",
      link: "https://bitl.bz/Wb8EmX",
      pageLink: "/gsmall"

    },
    {
      title: "위메프",
      img: "/logo/we.jpeg",
      link: "https://bitl.bz/f53jjo",
      pageLink: "/wemakeprice"
    },
    {
      title: "하이마트",
      img: "/logo/hiMart.jpeg",
      link: "https://bitl.bz/cBSLxW",
      pageLink: "/himart"
    },
    {
      title: "롯데몰",
      img: "/logo/lotte.jpeg",
      link: "https://bitl.bz/GsWQR3",
      pageLink: "lotte"
    },
  ];
  const router = useRouter()
  return (
    <div className='' style={{ width: "100%", maxWidth: "1024px", }}>
      <p className='mb-3 sm:mb-4 text-xl sm:text-2xl font-bold'>저렴한 가격과 최고의 품질을 만나보세요!</p>
      <p className='mb-4 sm:mb-8 text-small' style={{ color: "#A1A1AA" }}> 클릭하시면 해당 웹사이트의 특별 할인 상품을 확인하실 수 있습니다. 지금 놓치지 마세요</p>
      <div className="gap-4 grid grid-cols-2 sm:grid-cols-4" >
        {list.map((item, index) => (
          <Card shadow="sm" key={index} isPressable onClick={() => { router.push(item.pageLink) }}  >
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




