import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react"
import Head from "next/head"
import { useState } from "react"
import Logo from "../icon/Logo"
import Menu from "../icon/menu"
import open from '../../public/open.png'
import { useRouter } from "next/router"
import Link from "next/link"


interface NavProps {
    link: string
    pageName: string
}

interface MetaData {
    title: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
}
interface LayOutProps {
    children?: React.ReactNode
    meta?: MetaData
    loading?: boolean
}

const LayOut = ({ children, meta, loading = false }: LayOutProps) => {
    const navList: NavProps[] = [{ link: "/", pageName: "공지사항" }, { link: "/", pageName: "자주하는 질문" }, { link: "/", pageName: "문의" }]
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const router = useRouter()
    return (
        <>
            <Head>
                <title>{meta?.title ?? `최저가 상품 추천앱, 엑스딜::X-DEAL`}</title>
                <meta name="description" content={meta?.description ?? `저렴한 가격의 제품을 추천하는 쇼핑몰. 다양한 제품 카테고리에서 가장 저렴한 옵션을 찾아보세요.`} />
                <meta name="keywords" content={meta?.keywords ?? `베스트100,베스트셀러,경매,할인쿠폰,베스트셀러,공동구매,컴퓨터/핸드폰,에어컨/TV/디카,MP3/게임,패션/명품/브랜드,여성의류/속옷,남성의류/정장/빅사이즈,분유/기저귀/식품/생리대/임부복,유아동/장난감,쌀/과일/한우/생선,건강식품/음료,화장품/자동차,스포츠/다이어트,골프/등산/스키/낚시,운동화,네비게이션,리빙/침구/인테리어,애완/성인/공구,꽃배달,도서/여행/항공권,만화`} />
                <meta name="copyright" content="Copyright © 2023 by X-Deal" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="한국어" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="naver-site-verification" content="831643bd3a4a9ef983886171be497fd96764c34b" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="최저가 상품 추천앱, 엑스딜::X-DEAL" />
                <meta property="og:title" content={meta?.ogTitle ?? `최저가 상품 추천앱, 엑스딜::X-DEAL`} />
                <meta property="og:description" content={meta?.ogDescription ?? `저렴한 가격의 제품을 추천하는 쇼핑몰. 다양한 제품 카테고리에서 가장 저렴한 옵션을 찾아보세요.`} />
                <meta property="og:image" content={meta?.ogImage ?? `/favicon/og.png`} />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
            </Head>
            <Navbar shouldHideOnScroll className="border-b-1" >
                <NavbarBrand onClick={() => { router.push('/') }}>
                    <h1 className="text-large cursor-pointer"> <Logo /></h1>
                </NavbarBrand>
                <NavbarContent justify="end" className="hidden sm:flex">
                    {navList.map(v =>
                        <NavbarItem key={v.pageName} >
                            <Link href={v.link} color="foreground">{v.pageName}</Link>
                        </NavbarItem>
                    )}
                </NavbarContent>
                <NavbarContent justify="end" className="flex sm:hidden" >
                    <NavbarMenuToggle
                        className="sm:hidden"
                    />
                </NavbarContent>
                <NavbarMenu>
                    {navList.map((v, index) => (
                        <NavbarMenuItem key={`${v}-${index}`}>
                            <Link
                                color={"foreground"}
                                className="w-full"
                                href={v.link}
                            >
                                {v.pageName}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
            <div className="py-4  m-auto px-6 " style={{ width: "100%", maxWidth: "1024px", margin: "0 auto" }}>
                {children}
            </div>

            <footer className="footer p-10 bg-neutral text-neutral-content justify-center mt-10 sm:20 ">
                <div className="max-w-[1024px] w-full">
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover ml-3">@CJH</a>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default LayOut