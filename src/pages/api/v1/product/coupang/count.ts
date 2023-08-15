import { NextApiRequest, NextApiResponse } from "next"
import MariaDB from "../../../../../../lib/mariadb"

import { withCatch } from "../../../../../../utils/withCatch"
const mariaDB = MariaDB.getInstance()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		const { category } = req.query
		if (!category || category === "전체") {
			const query = "SELECT COUNT(*) as total FROM coupangItem_memory"
			const result = await mariaDB.query(query)
			const total = Math.ceil(result[0].total / 16)
			res.status(200).json(total)
		} else {
			const countQuery =
				"SELECT COUNT(*) as total FROM coupangItem_memory WHERE category = ?;"
			const query = await mariaDB.query<any>(countQuery, [category])
			const total = Math.ceil(query[0].total / 16)
			res.status(200).json(total)
		}
	}
}

export default withCatch(handler)
