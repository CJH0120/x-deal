import { useRouter } from "next/router";
import LayOut from "../../components/layouts/layout";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPageContext } from "next";
import Link from "next/link";
import ItemList from "../../components/layouts/ItemList";


interface CommerceProps {
    meta: {
        displayName: string;
        logoPath: string;
    };
}
const Commerce = ({ meta }: CommerceProps) => {
    const router = useRouter();
    const { commerce } = router.query;
    const { displayName, logoPath } = meta;


    return (
        <>
            <LayOut meta={{ ogTitle: `X-DEAL X ${meta.displayName}`, title: `X-DEAL :: ${meta.displayName}` }}>
                <Link target="_blank" href="https://link.coupang.com/a/6qRXH" className="w-full 	  sm:hidden">
                    <div className="w-full flex grow">
                        <div className="flex justify-between items-center  w-full"  >
                            <div className="flex"  >
                                <Image className="border  object-cover" width={56} alt={`X-DEAL X ${meta.displayName}`} src={logoPath as string} />
                                <div className="flex flex-col ml-4 text-gray-800	 ">
                                    <p>{commerce}</p>
                                    <p>{displayName}</p>
                                </div>
                            </div>
                            <Button color="primary" size="md" >둘러보기</Button>
                        </div>
                    </div>
                    {commerce !== "coupang" && <p className="text-gray-800	text-xs	sm:text-sm mt-2  sm:mt-5">이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다</p>}
                </Link>


                <div className="mt-5">
                    <p className="text-sm font-bold">{displayName}의 새로운 상품들로 더욱 특별한 쇼핑을 즐겨보세요!</p>
                    {commerce === "coupang" && <p className="text-gray-800	text-xs sm:text-sm mt-2	sm:mt-5">이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다</p>}
                </div>

                <ItemList />
            </LayOut >
        </>
    )
}











export const getStaticPaths: GetStaticPaths = async () => {
    const commercePaths = ["coupang", "auction", "11st", "gmarket", "gsmall", "himart", "lotte", "wemakeprice"];

    const paths = commercePaths.map(commerce => ({
        params: { commerce },
    }));

    return { paths, fallback: false }; // fallback: false는 경로에 없는 경우 404 반환
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const { params } = context;
    const commerce = params?.commerce;

    if (["coupang", "auction", "11st", "gmarket", "gsmall", "himart", "lotte", "wemakeprice"].includes(commerce as string)) {
        const meta = commerceData[commerce as keyof typeof commerceData];
        return {
            props: {
                meta,
            },
            revalidate: 60,
        };
    }

    return {
        redirect: {
            permanent: false,
            destination: "/404",
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
        logoPath: "/logo/hiMart.webp",
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