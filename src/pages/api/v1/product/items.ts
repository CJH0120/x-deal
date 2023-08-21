import { NextApiRequest, NextApiResponse } from "next"
import MariaDB from "../../../../../lib/mariadb"

import { withCatch } from "../../../../../utils/withCatch"
const mariaDB = MariaDB.getInstance()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		const query = `WITH RankedProducts AS (
            SELECT *,
                   ROW_NUMBER() OVER(PARTITION BY storeName ORDER BY CAST(REPLACE(productPercent, '%', '') AS DECIMAL(5,2)) DESC) AS RowNum
            FROM ProductItem
        )
        SELECT *
        FROM RankedProducts
        WHERE RowNum <= 4;`
		const result = await mariaDB.query(query)
		res.status(200).json(result)
	}
}

export default withCatch(handler)
