import { NextApiRequest, NextApiResponse } from "next"
import MariaDB from "../../../../../lib/mariadb"

import { withCatch } from "../../../../../utils/withCatch"
const mariaDB = MariaDB.getInstance()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		const query = `SELECT *
        FROM (
            SELECT *,
                   ROW_NUMBER() OVER (PARTITION BY storeName ORDER BY CAST(productPrice AS DECIMAL(10,2))) AS AscRowNum,
                   ROW_NUMBER() OVER (PARTITION BY storeName ORDER BY CAST(productPrice AS DECIMAL(10,2)) DESC) AS DescRowNum
            FROM ProductItem
        ) AS RankedProducts
        WHERE AscRowNum <= 2 OR DescRowNum <= 2;`
		const result = await mariaDB.query(query)
		res.status(200).json(result)
	}
}

export default withCatch(handler)
