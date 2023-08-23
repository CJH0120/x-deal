import { Button, Image, Link } from "@nextui-org/react"
import { MainListProps } from "../../interface"
import { Product } from "../../interface"
import { CardItem } from "./CardList"
import { LoadCard } from "./LoadCard"



const MainList = ({ desc, items, link, title, isLoading = false }: MainListProps) => {
    return (
        <div className="flex flex-col justify-between items-center w-full mt-10">
            <div className="flex justify-between items-center w-full ">
                <div className="flex-col flex justify-center items-start w-full my-3 sm:my-5 sm:flex-row sm:justify-start sm:items-center ">
                    <h3 className="text-xl my-1 sm:my-0 sm:text-2xl font-bold rmr-10">{title}</h3>
                    <p className="text-sm flex items-end justify-start font-bold ml-5" style={{ color: "#b91c1c" }}>{desc}</p>
                </div>
                <div className="hidden sm:flex justify-end w-[100px]"><Link href={link} className="text-sm " >더보기</Link></div>
            </div>
            <div className="w-full my-5">
                {title !== "쿠팡" ? <Image height={30} width={500} src="https://d2nkkkpf88oxbk.cloudfront.net/static/v3.adpick/images/adpicksponser_03.png" /> :
                    <p className="text-small" style={{ color: "rgb(161, 161, 170)" }}>이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다</p>}
            </div>
            <div className="h-full min-h-[250px]  grid gap-4 grid-cols-2 sm:grid-cols-4 ">
                {items.map(v => <CardItem {...v} key={v.NewLink} />)}
                {isLoading && new Array(4).fill([]).map((_, idx) => <LoadCard key={items[idx]?.productImage ?? idx} />)}

            </div>
            <Link className="w-full sm:hidden flex mt-5" href={link} ><Button className="w-full " color="primary">특가 더보기 </Button></Link>
        </div>


    )


}

export default MainList





