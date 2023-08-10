import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react"
import Head from "next/head"
import { useState } from "react"

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
            <Navbar shouldHideOnScroll >
                <NavbarBrand>
                    <p className="font-bold text-inherit">엑스딜</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">

                </NavbarContent>
                <NavbarContent justify="end">
                    {navList.map(v =>
                        <NavbarItem>
                            <Link href={v.link} color="foreground">{v.pageName}</Link>
                        </NavbarItem>
                    )}

                </NavbarContent>
            </Navbar>
            <div className="py-4">
                {children}
            </div>
        </>
    )
}
export default LayOut