import { useRouter } from "next/router";
import LayOut from "../../components/layouts/layout";
import { useEffect, useState } from "react";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Image, Link } from "@nextui-org/react";
import ArrowRight from "../../components/icon/ArrowRight";
import { GetServerSideProps, GetServerSidePropsContext, NextPageContext } from "next";
import { Props } from "next/script";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";


interface CommerceProps {
    meta: {
        displayName: string;
        logoPath: string;
    };
}
const Commerce = ({ meta }: CommerceProps) => {
    const router = useRouter();
    const { commerce } = router.query;
    const [loading, setLoading] = useState<boolean>(true)
    const { displayName, logoPath } = meta;


    useEffect(() => {
        if (!!meta) {
            setLoading(false)
            if (["coupang", "auction", "11st", "gmarket", "gsmall", "himart", "lotte", "wemakeprice"].includes(commerce as string)) {
            } else {
                router.push('/')
            }

        }
    }, [meta])

    console.log(meta)


    return (
        !loading && (
            <>
                <Head>
                    <meta property="og:title" content={`엑스딜 X ${meta.displayName}`} />
                    <meta property="og:description" content={`${meta.displayName} &&저렴한 가격의 제품을 추천하는 다른 쇼핑몰 비교 웹사이트입니다. 다양한 제품 카테고리에서 가장 저렴한 옵션을 찾아보세요. 최고의 거래를 확인하고 비용을 절약하세요!`} />
                    <meta property="og:image" content={`/favicon/og.png`} />

                </Head>
                <LayOut meta={{ ogTitle: `엑스딜 X ${meta.displayName}`, title: `X-DEAL :: ${meta.displayName}` }}>
                    <Link target="_blank" href="https://link.coupang.com/a/6qRXH" className="w-full flex grow flex sm:hidden">
                        <div className="flex justify-between items-center  w-full"  >
                            <div className="flex  "  >
                                <Image className="border  object-cover" width={56} src={logoPath as string} />
                                <div className="flex flex-col ml-4 text-gray-800	 ">
                                    <p>{commerce}</p>
                                    <p>{displayName}</p>
                                </div>
                            </div>
                            <Button color="primary" size="md" >둘러보기</Button>
                        </div>
                    </Link>


                    <div className="mt-5">
                        <p className="h[20px]">오늘 업데이트된 상품을 확인하세요</p>
                        {commerce === "coupang" && <p className="text-gray-800	text-sm mt-5	">이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다</p>}
                    </div>
                </LayOut >
            </>
        )



    )
}










export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext<ParsedUrlQuery>) => {
    const { query } = context;
    const { commerce } = query;

    const meta = commerceData[commerce as keyof typeof commerceData];
    return {
        props: {
            meta,
        },
    };
}




export default Commerce
interface CommerceData {
    [key: string]: {
        displayName: string;
        logoPath: string;
    };
}
const commerceData: CommerceData = {
    "coupang": {
        displayName: "쿠팡",
        logoPath: "/logo/coupang.webp",
    },
    "auction": {
        displayName: "옥션",
        logoPath: "/logo/autcion.webp",
    },
    "11st": {
        displayName: "11번가",
        logoPath: "/logo/11.webp",
    },
    "gmarket": {
        displayName: "지마켓",
        logoPath: "/logo/gMarket.webp",
    },
    "gsmall": {
        displayName: "지스몰",
        logoPath: "/logo/gsMall.webp",
    },
    "himart": {
        displayName: "하이마트",
        logoPath: "/logo/himart.webp",
    },
    "lotte": {
        displayName: "롯데",
        logoPath: "/logo/lotte.webp",
    },
    "wemakeprice": {
        displayName: "위메프",
        logoPath: "/logo/we.webp",
    },
};