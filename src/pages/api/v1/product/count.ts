import { NextApiRequest, NextApiResponse } from "next"
import MariaDB from "../../../../../lib/mariadb"

import { withCatch } from "../../../../../utils/withCatch"
const mariaDB = MariaDB.getInstance()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		const { category, storeName } = req.query
		if (!category || !storeName) return res.status(400).json([])
		if (category === "전체") {
			const query = `SELECT COUNT(*) as total FROM ProductItem WHERE storeName = ?`
			const result = await mariaDB.query(query, [storeName])
			const total = Math.ceil(result[0].total / 16)
			res.status(200).json(total)
		} else {
			const countQuery = `SELECT COUNT(*) as total FROM ProductItem WHERE productCategory = ? AND storeName = ?;
                `
			const query = await mariaDB.query<any>(countQuery, [category, storeName])
			const total = Math.ceil(query[0].total / 16)
			res.status(200).json(total)
		}
	}
}

export default withCatch(handler)
