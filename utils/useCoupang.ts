import { fetcher } from "./fetcher"

const category = async (category: string) => {
	fetcher(`/api/v1/product/coupang`, {})
}

export default () => ({ category })
