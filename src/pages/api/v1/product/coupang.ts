import { NextApiRequest, NextApiResponse } from "next"
import MariaDB from "../../../../../lib/mariadb"

import { withCatch } from "../../../../../utils/withCatch"
const mariaDB = MariaDB.getInstance()
export interface Param {
	items: Product.Coupang[]
	totalItems: number
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		const { page, category } = req.query
		const itemsPerPage = 16
		const offset = ((page as any) - 1) * itemsPerPage

		if (!category || category === "전체") {
			const query =
				"SELECT * FROM coupangItem ORDER BY category LIMIT ? OFFSET ?;"
			const items = await mariaDB.query<Product.Coupang[]>(query, [
				itemsPerPage,
				offset,
			])
			const countQuery = "SELECT COUNT(*) as total FROM coupangItem;"
			const [countResult] = await mariaDB.query<any>(countQuery)
			const totalItems = Math.ceil(countResult.total / itemsPerPage)
			res.status(200).json({ items, totalItems })
		} else {
			const query =
				"SELECT * FROM coupangItem WHERE category = ? ORDER BY id LIMIT ? OFFSET ?;"
			const countQuery =
				"SELECT COUNT(*) as total FROM coupangItem WHERE category = ?;"
			const [countResult] = await mariaDB.query<any>(countQuery, [category])
			const totalItems = Math.ceil(countResult.total / itemsPerPage)
			const items = await mariaDB.query<Product.Coupang[]>(query, [
				category,
				itemsPerPage,
				offset,
			])
			res.status(200).json({ items, totalItems })
		}
	}
}

export default withCatch(handler)
