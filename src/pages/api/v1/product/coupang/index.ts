import { NextApiRequest, NextApiResponse } from "next"
import MariaDB from "../../../../../../lib/mariadb"

import { withCatch } from "../../../../../../utils/withCatch"
const mariaDB = MariaDB.getInstance()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		const { page, category, order } = req.query
		const itemsPerPage = 28
		const offset = ((page as any) - 1) * itemsPerPage

		if (!category || category === "전체") {
			let query = "SELECT * FROM coupangItem"
			if (order === "DESC") {
				query +=
					" ORDER BY CAST(REGEXP_REPLACE(price, '[^0-9]', '') AS DECIMAL(10, 2)) DESC"
			} else if (order === "ASC") {
				query +=
					" ORDER BY CAST(REGEXP_REPLACE(price, '[^0-9]', '') AS DECIMAL(10, 2)) ASC"
			}
			query += " LIMIT ? OFFSET ?;"
			const items = await mariaDB.query<Product.Coupang[]>(query, [
				itemsPerPage,
				offset,
			])
			res.status(200).json(items)
		} else {
			let query = "SELECT * FROM coupangItem WHERE category = ?"
			if (order === "DESC") {
				query +=
					" ORDER BY CAST(REGEXP_REPLACE(price, '[^0-9]', '') AS DECIMAL(10, 2)) DESC"
			} else if (order === "ASC") {
				query +=
					" ORDER BY CAST(REGEXP_REPLACE(price, '[^0-9]', '') AS DECIMAL(10, 2)) ASC"
			}
			query += " LIMIT ? OFFSET ?;"
			const items = await mariaDB.query<Product.Coupang[]>(query, [
				category,
				itemsPerPage,
				offset,
			])
			res.status(200).json(items)
		}
	}
}

export default withCatch(handler)
