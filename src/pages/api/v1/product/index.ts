import { NextApiRequest, NextApiResponse } from "next"
import MariaDB from "../../../../../lib/mariadb"

import { withCatch } from "../../../../../utils/withCatch"
const mariaDB = MariaDB.getInstance()

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		const query = `SELECT * FROM coupangItem ORDER BY RAND() LIMIT 8;`
		const items = await mariaDB.query<Product.Coupang[]>(query)
		res.status(200).json(items)
	}
}

export default withCatch(handler)
