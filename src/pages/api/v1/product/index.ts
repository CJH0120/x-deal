import { NextApiRequest, NextApiResponse } from "next"
import MariaDB from "../../../../../lib/mariadb"

import { withCatch } from "../../../../../utils/withCatch"
const mariaDB = MariaDB.getInstance()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		const { storeName, category, page, order } = req.query
		if (!storeName || !category || !page) return res.status(400).json([])
		const itemsPerPage = 28
		const pageValue = parseInt(page as string)
		const offset = (pageValue - 1) * itemsPerPage // Removed unnecessary 'as any'

		if (category === "전체") {
			let query =
				"SELECT productCategory, productImage, productName, productPercent, " +
				"productPrice, productStatus, NewLink, regDate " +
				"FROM ProductItem " +
				"WHERE StoreName = ? AND NewLink IS NOT NULL "
			query += buildOrderByClause(order as string)
			query += " LIMIT ? OFFSET ?;"

			const items = await mariaDB.query<Product.Card[]>(query, [
				storeName,
				itemsPerPage,
				offset,
			])
			res.status(200).json(items)
		} else {
			let query =
				"SELECT productCategory, productImage, productName, productPercent, " +
				"productPrice, productStatus, NewLink, regDate " +
				"FROM ProductItem " + // Added a space before "FROM"
				"WHERE StoreName = ? AND productCategory = ? AND NewLink IS NOT NULL " // Added "productCategory"
			query += buildOrderByClause(order as string)
			query += " LIMIT ? OFFSET ?;"
			const items = await mariaDB.query<Product.Coupang[]>(query, [
				storeName,
				category,
				itemsPerPage,
				offset,
			])
			res.status(200).json(items)
		}
	}
}

export default withCatch(handler)

function buildOrderByClause(order: string): string {
	if (order === "DESC") {
		return " ORDER BY CAST(REGEXP_REPLACE(productPrice, '[^0-9]', '') AS DECIMAL(10, 2)) DESC" // Corrected column name to "productPrice"
	} else if (order === "ASC") {
		return " ORDER BY CAST(REGEXP_REPLACE(productPrice, '[^0-9]', '') AS DECIMAL(10, 2)) ASC" // Corrected column name to "productPrice"
	}
	return ""
}
