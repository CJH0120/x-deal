import { useRouter } from "next/router";
import LayOut from "../../components/layouts/layout";
import { useEffect, useState } from "react";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Image, Link } from "@nextui-org/react";
import ArrowRight from "../../components/icon/ArrowRight";
const commerceData = {
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
interface CommerceData {
    [key: string]: {
        displayName: string;
        logoPath: string;
    };
}
interface CommerceProps {
    meta: {
        displayName: string;
        logoPath: string;
    };
}
const Commerce: React.FC<CommerceProps> = ({ meta }: any) => {
    const router = useRouter();
    const { commerce } = router.query;
    const [loading, setLoading] = useState<boolean>(true)

    const { displayName: commerceDisplayName, logoPath: commerceDisplayLogo } = meta;
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
            <LayOut meta={{ ogTitle: `엑스딜 X ${meta.displayName}` }}>
                <Link target="_blank" href="https://link.coupang.com/a/6qRXH" className="w-full flex grow flex sm:hidden">
                    <div className="flex justify-between items-center  w-full"  >
                        <div className="flex  "  >
                            <Image className="border  object-cover" width={56} src={commerceDisplayLogo as string} />
                            <div className="flex flex-col ml-4 text-gray-800	 ">
                                <p>{commerce}</p>
                                <p>{commerceDisplayName}</p>
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
        )



    )
}











interface ServerSidePropsContext {
    query: {
        commerce: string;
    };
}

// Define type for the props returned by getServerSideProps
interface ServerSideProps {
    meta: {
        displayName: string;
        logoPath: string;
    };
}

export async function getServerSideProps(context: ServerSidePropsContext): Promise<{ props: ServerSideProps }> {
    const { commerce } = context.query;
    const meta: { displayName: string; logoPath: string } = {
        displayName: commerce,
        logoPath: commerce,
    };
    return {
        props: {
            meta,
        },
    };
}







export default Commerce