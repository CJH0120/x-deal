import Link from "next/link"
import styles from "../styles/error.module.css"
import { Button, Chip, Image } from "@nextui-org/react"
import { List } from "."
const Error = () => {
	return (
		<section className="flex w-full h-screen flex-col grow items-center justify-center gap-9">
			<p className="text-8xl text-blue-600 font-bold"  >404</p>
			<p className="text-2xl sm:text-3xl	">요청하신 페이지가 없습니다 !</p>
			<Link href="/">	<Button size="lg" color="primary">돌아가기</Button></Link>
		</section>
	)
}
export default Error
