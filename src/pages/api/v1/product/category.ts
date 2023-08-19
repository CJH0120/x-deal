import { NextApiRequest, NextApiResponse } from "next"
import MariaDB from "../../../../../lib/mariadb"

import { withCatch } from "../../../../../utils/withCatch"
const mariaDB = MariaDB.getInstance()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		const { storeName } = req.query
		const query = `SELECT DISTINCT productCategory FROM ProductItem WHERE storeName = ? AND NewLink IS NOT NULL ;`
		const result = await mariaDB.query(query, [storeName])
		const valuesOnly = result.map((item) => item.productCategory)
		res.status(200).json(valuesOnly)
	}
}

export default withCatch(handler)
