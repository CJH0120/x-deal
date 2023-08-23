import useSWR, { KeyedMutator, SWRConfiguration, BareFetcher } from "swr"
import { fetcher } from "./fetcher"
import { Product } from "../interface"
type Result<Data, Error> = {
	data?: Data
	isLoading: boolean
	isError?: Error
	mutate: KeyedMutator<Data>
}
const result = <Data, Error>(
	mutate: KeyedMutator<Data>,
	data?: Data,
	error?: Error
): Result<Data, Error> => ({
	data,
	isLoading: !error && !data,
	isError: error,
	mutate,
})

export const qs = (obj: { [key: string]: any }) => {
	const tmp = Object.entries(obj)
		.reduce<string[]>((p, [k, v]) => (v ? [...p, `${k}=${v}`] : p), [])
		.join("&")
	if (tmp) return "?" + tmp
	return ""
}

//Product

export const useProductData = <Data = Product.Card[], Error = any>(
	storeName: string,
	category: string,
	page: number,
	order: string,
	fetcherConfig?: SWRConfiguration<Data, Error, BareFetcher<Data>>
) => {
	const url = `/api/v1/product${qs({ storeName, category, page, order })}`
	const { data, error, mutate, isLoading } = useSWR<Data, Error>(
		url,
		fetcher,
		fetcherConfig
	)
	return { data, error, mutate, isLoading } // 데이터와 에러를 반환
}

export const useProducCategory = <Data = string[], Error = any>(
	storeName: string,
	fetcherConfig?: SWRConfiguration<Data, Error, BareFetcher<Data>>
) => {
	const url = `/api/v1/product/category${qs({ storeName })}`
	const { data, error, mutate, isLoading } = useSWR<Data, Error>(
		url,
		fetcher,
		fetcherConfig
	)
	return { data, error, mutate, isLoading } // 데이터와 에러를 반환
}

export const useProducCategoryCount = <Data = string[], Error = any>(
	storeName: string,
	category: string,
	fetcherConfig?: SWRConfiguration<Data, Error, BareFetcher<Data>>
) => {
	const url = `/api/v1/product/count${qs({ storeName, category })}`
	const { data } = useSWR<Data, Error>(url, fetcher, fetcherConfig)
	return { data }
}

export const useProductMain = <Data = Product.Card[], Error = any>(
	fetcherConfig?: SWRConfiguration<Data, Error, BareFetcher<Data>>
) => {
	const url = `/api/v1/product/items${qs({})}`
	const { data, isLoading } = useSWR<Data, Error>(url, fetcher, fetcherConfig)
	return { data, isLoading }
}
