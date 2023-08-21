import { useRouter } from "next/router";
import LayOut from "../../components/layouts/layout";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Chip, Image, } from "@nextui-org/react";
import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import ItemList from "../../components/layouts/ItemList";
import { CommerceData, commerceStore } from "../../utils/props";
import { cardPorps } from "../../components/Card";
import CoupangList from "../../components/layouts/CoupangList";
import CardList from "../../components/layouts/CardList";
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
                                    {commerce !== "coupang" && <div className="text-gray-800 w-[400px]	text-xs sm:text-sm  hidden sm:block">
                                        <Image src="https://d2nkkkpf88oxbk.cloudfront.net/static/v3.adpick/images/adpicksponser_03.png" />
                                    </div>}

                                </div>
                            </div>
                            <Button style={{ color: "black", borderColor: "black" }} variant="bordered" size="md"  >방문하기</Button>
                        </div>
                    </div>
                    {commerce === "coupang" && <p className="text-gray-800 flex	text-xs sm:text-sm mt-5  sm:hidden">이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다</p>}
                    {commerce !== "coupang" && <div className="text-gray-800	text-xs	sm:text-sm mt-2 sm:hidden">
                        <Image src="https://d2nkkkpf88oxbk.cloudfront.net/static/v3.adpick/images/adpicksponser_03.png" />
                    </div>}
                </Link>
                {commerce === "coupang" && <CoupangList />}
                {commerce !== "coupang" && <CardList storeName={commerce as string} />}
            </LayOut >
        </>
    )
}











export const getStaticPaths: GetStaticPaths = async () => {
    const commercePaths = ["coupang", "wemakeprice", "hmall", "eleven"];
    //"auction", "11st", "gmarket", "gsmall", "himart", "lotte",`
    const paths = commercePaths.map(commerce => ({
        params: { commerce },
    }));
    return { paths, fallback: false }; // fallback: false는 경로에 없는 경우 404 반환
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const { params } = context;
    const commerce = params?.commerce;

    if (["coupang", "wemakeprice", "hmall", "eleven"].includes(commerce as string)) {
        const metaKey = commerce as keyof typeof commerceStore;
        const meta = commerceStore.find(v => v.key === metaKey);
        return {
            props: {
                meta: meta ?? null
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

