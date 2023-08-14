import { fetcher } from "./fetcher"

const category = async () => {
	fetcher(`/api/v1/product/coupang`)
}

export default () => ({ category })
