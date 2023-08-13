import { useRouter } from "next/router";
import LayOut from "../../components/layouts/layout";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Chip, Image, Tab, Tabs } from "@nextui-org/react";
import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPageContext } from "next";
import Link from "next/link";
import ItemList from "../../components/layouts/ItemList";
import { CommerceData, commerceStore } from "../../utils/props";
import { useEffect, useState } from "react";
import { CardItemProps, cardPorps } from "../../components/Card";
import { CardList } from "../../dummy";


interface CommerceProps {
    meta: CommerceData
}
const Commerce = ({ meta }: CommerceProps) => {
    const router = useRouter();
    const { commerce } = router.query;
    const { displayName, logoPath, link, pageLink, ogImg } = meta;
    return (
        <>
            <LayOut meta={{ ogTitle: `X-DEAL X ${meta.displayName}`, title: `최저가 상품 추천앱, X-DEAL :: ${meta.displayName}`, ogImage: ogImg }}>
                <Link target="_blank" href={link} className="w-full">
                    <div className="w-full flex grow">
                        <div className="flex justify-between items-center  w-full"  >
                            <div className="flex"  >
                                <Image className="border  object-cover" width={56} alt={`X-DEAL X ${meta.displayName}`} src={logoPath as unknown as string} />
                                <div className="flex flex-col justify-between  ml-4 text-gray-800 ">
                                    <h2 className="text-sm font-bold text-sm sm:text-lg	">{displayName}의 새로운 상품들로 더욱 특별한 쇼핑을 즐겨보세요!</h2>
                                    {commerce === "coupang" && <p className="text-gray-800	text-xs sm:text-sm  hidden sm:block">이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다</p>}
                                    {commerce !== "coupang" && <p className="text-gray-800	text-xs sm:text-sm  hidden sm:block">쿠팡이외</p>}

                                </div>
                            </div>
                            <Button style={{ color: "black", borderColor: "black" }} variant="bordered" size="md"  >둘러보기</Button>
                        </div>
                    </div>
                    {commerce === "coupang" && <p className="text-gray-800 flex	text-xs sm:text-sm mt-5  sm:hidden">이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다</p>}
                    {commerce !== "coupang" && <p className="text-gray-800	text-xs	sm:text-sm mt-2 sm:hidden">쿠팡이외</p>}
                </Link>
                {commerce === "coupang" && <CoupangList />}
                {commerce !== "coupang" && <OtherList />}
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
        const metaKey = commerce as keyof typeof commerceStore;
        const meta = commerceStore.find(v => v.key === metaKey);
        return {
            props: {
                meta: meta
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

//가전0 /핸드폰1 인테리어6 /식품7   /주방용품8 /생활용품10/문구완구11

const categories = ["전체", "가전", "핸드폰", "인테리어", "식품", "주방용품", "생활용품", "문구완구"]

interface CoupangListProps {
    data: CardItemProps[]
}
const CoupangList = () => {
    const dummy = CardList
    const [data, setData] = useState<cardPorps[]>([])
    const [selected, setSelected] = useState<React.Key>("전체");
    const [order, setIsOrder] = useState<React.Key>(3)
    const [isload, setIsLoad] = useState<boolean>(true)
    useEffect(() => {
        setIsLoad(true)
        const filteredData = selected === "전체"
            ? dummy
            : dummy.filter(v => v.productCategory === selected);
        setData(filteredData);

        setTimeout(() => {
            setIsLoad(false)
        }, 250);
    }, [selected]);


    useEffect(() => {
        if (order === 0 || order === "0") {
            setData(v => [...v].sort((a, b) => convertPrice(a.productPrice) - convertPrice(b.productPrice)));
        } else if (order === 1 || order === "1") {
            setData(v => [...v].sort((a, b) => convertPrice(b.productPrice) - convertPrice(a.productPrice)));
        } else if (order === 2 || order === "2") {
            setData(v => [...v].sort((a, b) => a.productName.localeCompare(b.productName)));
        }
    }, [order]);

    const convertPrice = (priceString: string) => {
        const priceWithoutCommas = priceString.replace(/,/g, '');
        return parseInt(priceWithoutCommas);
    };

    return (
        <div className="relative mt-5">
            <div className="flex justify-between items-center w-full grow flex-col sm:flex-row gap-4 sm:gap-0 mb-5 sm:mb-0">
                <Tabs aria-label="Options" className="w-full " onSelectionChange={setSelected}>
                    {categories.map(v =>
                        <Tab key={v} title={v}  >
                        </Tab>
                    )}
                </Tabs>
                <div className="w-full sm:my-6 flex justify-start sm:justify-end items-center  ">
                    <Tabs color="primary" aria-label="Tabs colors" className="flex" onSelectionChange={setIsOrder} >
                        <Tab key={2} title="이름순" />
                        <Tab key={0} title="가격 낮은순" />
                        <Tab key={1} title="가격 높은순" />
                    </Tabs>
                </div>
            </div>
            <ItemList data={data} isload={isload} />
        </div >
    )
}


const OtherList = () => {
    const data: cardPorps[] = []
    return (
        <div>
            <ItemList data={data} />
        </div>
    )
}