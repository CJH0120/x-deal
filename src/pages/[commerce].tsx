import { useRouter } from "next/router";
import LayOut from "../../components/layouts/layout";
import { useEffect, useState } from "react";
import { Image } from "@nextui-org/react";
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

const Commerce = () => {
    const router = useRouter();
    const { commerce } = router.query;
    const [loading, setLoading] = useState<boolean>(true)

    const selectedCommerce = commerceData[commerce as keyof typeof commerceData] || {
        displayName: commerce,
        logoPath: commerce,
    };

    const { displayName: commerceDisplayName, logoPath: commerceDisplayLogo } = selectedCommerce;
    useEffect(() => {
        if (router.isReady && commerce) {
            if (["coupang", "auction", "11st", "gmarket", "gsmall", "himart", "lotte", "wemakeprice"].includes(commerce as string)) {
                setLoading(false)
            } else {
                router.push('/')
            }

        }
    }, [router, commerce])



    return (

        !loading && (
            <LayOut meta={{ ogTitle: `엑스딜 X ${commerceDisplayName}` }}>
                <div className="flex sm:hidden" >
                    <Image className="border" width={56} src={commerceDisplayLogo as string} />
                    <div className="flex flex-col">
                        <p>{commerce}</p>
                        <p>{commerceDisplayName}</p>
                    </div>
                </div>

            </LayOut>
        )



    )
}

export default Commerce