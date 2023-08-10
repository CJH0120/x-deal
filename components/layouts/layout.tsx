import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react"
import Head from "next/head"
import { useState } from "react"
import Logo from "../icon/Logo"
import Menu from "../icon/menu"
import open from '../../public/open.png'
interface LayOutProps {
    children?: React.ReactNode
}


interface NavProps {
    link: string
    pageName: string
}
const LayOut = ({ children }: LayOutProps) => {
    const navList: NavProps[] = [{ link: "/", pageName: "공지사항" }, { link: "/", pageName: "자주하는 질문" }, { link: "/", pageName: "문의" }]
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <>
            <Head>
                <meta name="description" content="저렴한 가격의 제품을 추천하는 다른 쇼핑몰 비교 웹사이트입니다. 다양한 제품 카테고리에서 가장 저렴한 옵션을 찾아보세요. 최고의 거래를 확인하고 비용을 절약하세요!" />
                <meta name="keywords" content="쇼핑몰 추천, 저렴한 상품, 가격 비교, 할인 상품, 비용 절약, 쇼핑 가이드" />
                <meta property="og:title" content="🔥 엑스딜(Xdeal) - 최저가 상품 추천으로 신나는 쇼핑 여정 시작하기! 🔥" />
                <meta property="og:site_name" content="엑스딜(Xdeal)" />
                <title>X-DEAL :: 최저가 상품 추천</title>
                <meta name="copyright" content="Copyright © 2023 by Your Website" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="한국어" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:image" content="../../public/open.png" />
                <meta name="naver-site-verification" content="831643bd3a4a9ef983886171be497fd96764c34b" />
                <meta property="og:type" content="website" />









            </Head>
            <Navbar shouldHideOnScroll className="border-b-1" >
                <NavbarBrand>
                    <Link href="/" >
                        <Logo className="text-large" />
                    </Link>
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
                                size="lg"
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
        </>
    )
}
export default LayOut