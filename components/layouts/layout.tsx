import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Image } from "@nextui-org/react"
import Head from "next/head"
import { useState } from "react"
import Logo from "../icon/Logo"
interface LayOutProps {
    children?: React.ReactNode
}


interface NavProps {
    link: string
    pageName: string
}
const LayOut = ({ children }: LayOutProps) => {
    const navList: NavProps[] = [{ link: "/", pageName: "공지사항" }, { link: "/", pageName: "자주하는 질문" }, { link: "/", pageName: "문의" }]
    return (
        <>
            <Head>
            </Head>
            <Navbar shouldHideOnScroll className="border" >
                <NavbarBrand>
                    <Logo height={"100%"} />
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">

                </NavbarContent>
                <NavbarContent justify="end">
                    {navList.map(v =>
                        <NavbarItem key={v.pageName}>
                            <Link href={v.link} color="foreground">{v.pageName}</Link>
                        </NavbarItem>
                    )}

                </NavbarContent>
            </Navbar>
            <div className="py-4  m-auto px-6 " style={{ width: "100%", maxWidth: "1024px", margin: "0 auto" }}>
                {children}
            </div>
        </>
    )
}
export default LayOut