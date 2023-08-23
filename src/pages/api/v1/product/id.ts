import { NextApiRequest, NextApiResponse } from "next"
import MariaDB from "../../../../../lib/mariadb"

import { withCatch } from "../../../../../utils/withCatch"
import { IdProps, Product } from "../../../../../interface"
const mariaDB = MariaDB.getInstance()
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		const query = `SELECT id FROM ProductItem;`
		const result: IdProps[] = await mariaDB.query(query)

		console.log(result)

		res.status(200).json(result)
	}
}

export default withCatch(handler)
