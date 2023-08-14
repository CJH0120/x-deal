import { useRouter } from "next/router";
import LayOut from "../../components/layouts/layout";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Chip, Image, Pagination, PaginationItem, Tab, Tabs } from "@nextui-org/react";
import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextApiResponse, NextPageContext } from "next";
import Link from "next/link";
import ItemList from "../../components/layouts/ItemList";
import { CommerceData, commerceStore } from "../../utils/props";
import { useEffect, useMemo, useState } from "react";
import { CardItemProps, cardPorps } from "../../components/Card";
import CoupangLists from "../../components/layouts/CoupangList";
import { useCoupangCategory } from "../../utils/apiHook";
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
                            <Button style={{ color: "black", borderColor: "black" }} variant="bordered" size="md"  >방문하기</Button>
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

const CoupangList = () => {
    const [page, setPage] = useState<number>(1)
    const [category, setCategory] = useState<React.Key>("전체")
    const { data, mutate, isLoading } = useCoupangCategory(category as string, page)
    const [datas, setData] = useState<Product.Coupang[]>([])
    const [isorder, setIsOrder] = useState<React.Key>(0)
    useEffect(() => {
        setPage(1)
    }, [category])

    useEffect(() => {
        setData(sortData(data?.items ?? [], isorder))
    }, [isorder, data])
    return (
        <div className="relative mt-5">
            <div className="flex justify-between items-center w-full grow flex-col sm:flex-row gap-4 sm:gap-0 mb-5 sm:mb-0">
                <Tabs aria-label="Options" className="w-full " onSelectionChange={setCategory}>
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
            <CoupangLists isload={isLoading} data={datas} />
            {!!data?.items.length && <Pagination className="mt-5" onChange={(page) => setPage(page)} total={data.totalItems} initialPage={page} size={"lg"} />}
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

function sortData(data: Product.Coupang[], order: string | number): Product.Coupang[] {
    if (order === 0 || order === "0") {
        return [...data].sort((a, b) => convertPrice(a.price) - convertPrice(b.price));
    } else if (order === 1 || order === "1") {
        return [...data].sort((a, b) => convertPrice(b.price) - convertPrice(a.price));
    } else if (order === 2 || order === "2") {
        return [...data].sort((a, b) => a.name.localeCompare(b.name));
    } else {
        return data; // 예외 처리: 유효하지 않은 order 값일 경우 정렬하지 않고 원본 데이터 반환
    }
}
function convertPrice(price: string): number {
    return parseFloat(price.replace(/[^0-9.-]+/g, ""));
}
