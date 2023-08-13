import { useRouter } from "next/router";
import LayOut from "../../components/layouts/layout";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Chip, Image, Tab, Tabs } from "@nextui-org/react";
import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPageContext } from "next";
import Link from "next/link";
import ItemList from "../../components/layouts/ItemList";
import { CommerceData, commerceStore } from "../../utils/props";
import { useEffect, useState } from "react";
import { CardItemProps } from "../../components/Card";
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
                                    {commerce !== "coupang" && <p className="text-gray-800	text-xs sm:text-sm  hidden sm:block">이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다</p>}

                                </div>
                            </div>
                            <Button color="primary" size="sm" >둘러보기</Button>
                        </div>
                    </div>
                    {meta.displayName === "coupang" && <p className="text-gray-800	text-xs sm:text-sm mt-5 sm:hidden">이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다</p>}
                    {commerce !== "coupang" && <p className="text-gray-800	text-xs	sm:text-sm mt-2 sm:hidden">이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다</p>}
                </Link>

                {commerce === "coupang" && <CoupangList />}
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
    const [data, setData] = useState<CardItemProps[]>([])
    const [selected, setSelected] = useState<React.Key>("전체");
    useEffect(() => {
        const filteredData = selected === "전체"
            ? dummy
            : dummy.filter(v => v.productCategory === selected);
        setData(filteredData);
    }, [selected]);
    return (
        <div className="relative mt-5">
            <p className="text-base sm:text-2xl font-bold my-4 sm:my-10 ">해당 상품을 누르시면 구매 페이지로 이동합니다</p>
            <Tabs aria-label="Options" className="w-full" onSelectionChange={setSelected}>
                {categories.map(v =>
                    <Tab key={v} title={v}  >
                    </Tab>
                )}
            </Tabs>
            <ItemList data={data} />
        </div >
    )
}