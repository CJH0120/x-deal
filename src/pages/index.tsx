import { Inter } from 'next/font/google'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter, Chip, Image } from '@nextui-org/react'
import LayOut from '../../components/layouts/layout'
import { useRouter } from 'next/router'
import ItemList from '../../components/layouts/ItemList'
import Link from 'next/link'
import { commerceStore } from '../../utils/props'


export default function Home() {

  return (
    <LayOut>
      <SiteGather />

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

  const router = useRouter()
  return (
    <div className='' style={{ width: "100%", maxWidth: "1024px", }}>
      <h2 className='mb-3 sm:mb-4 text-xl sm:text-2xl font-bold'>저렴한 가격과 최고의 품질을 만나보세요!</h2>
      <p className='mb-4 sm:mb-8 text-small' style={{ color: "#A1A1AA" }}> 클릭하시면 해당 웹사이트의 특별 할인 상품을 확인하실 수 있습니다. 지금 놓치지 마세요</p>
      <div className="hidden gap-4 sm:grid grid-cols-2 sm:grid-cols-4" >
        {commerceStore.map((v, index) => (
          <Card shadow="sm" className='hidden sm:flex' key={v.displayName} isPressable onClick={() => { router.push(v.pageLink) }}  >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width={"100%"}
                alt={v.displayName}
                loading='lazy'
                className="w-full object-cover h-[140px] "
                src={v.logoPath}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <h3 className='font-bold'>{v.displayName}</h3>
              <Link href={v.link} target="_blank" onClick={(e) => { e.stopPropagation() }}>
                <Chip radius="sm" color="primary">방문하기</Chip>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className='grid gap-4 grid-cols-4  justify-center items-center sm:hidden my-8'>
        {commerceStore.map((item, index) => (
          <Link href={item.pageLink} key={item.key}>
            <div className='flex gap-3 flex-col justify-center items-center m-auto' key={index}>
              <Image
                src={item.logoPath}
                alt={item.displayName}
                loading='lazy'
                className='w-12 h-12 p-0 border border-slate-200 rounded-full justify-center items-center'
              />
              <span className='truncate 	'  >{item.displayName} </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}




export const List: siteProps[] = [
  {
    title: "쿠팡",
    img: "/logo/coupang.png",
    link: "https://link.coupang.com/a/6qRXH",
    pageLink: "/coupang"
  },
  {
    title: "11번가",
    img: "/logo/11.webp",
    link: "https://bitl.bz/UNlyEZ",
    pageLink: "/11st"

  },
  {
    title: "옥션",
    img: "/logo/autcion.webp",
    link: "https://bitl.bz/HsHOw6",
    pageLink: "/auction"
  },
  {
    title: "지마켓",
    img: "/logo/gMarket.webp",
    link: "https://bitl.bz/XfmPia",
    pageLink: "/gmarket"

  },
  {
    title: "지에스몰",
    img: "/logo/gsMall.webp",
    link: "https://bitl.bz/Wb8EmX",
    pageLink: "/gsmall"

  },
  {
    title: "위메프",
    img: "/logo/we.webp",
    link: "https://bitl.bz/f53jjo",
    pageLink: "/wemakeprice"
  },
  {
    title: "하이마트",
    img: "/logo/hiMart.webp",
    link: "https://bitl.bz/cBSLxW",
    pageLink: "/himart"
  },
  {
    title: "롯데몰",
    img: "/logo/lotte.webp",
    link: "https://bitl.bz/GsWQR3",
    pageLink: "lotte"
  },
];