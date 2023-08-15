import useSWR, { KeyedMutator, SWRConfiguration, BareFetcher } from "swr"
import { fetcher } from "./fetcher"
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

//쿠팡

export const useCoupangCategory = <Data = Product.Coupang[], Error = any>(
	category: string,
	page: number,
	order: string,
	fetcherConfig?: SWRConfiguration<Data, Error, BareFetcher<Data>>
) => {
	const url = `/api/v1/product/coupang${qs({ category, page, order })}` // URL 생성
	const { data, error, mutate, isLoading } = useSWR<Data, Error>(
		url,
		fetcher,
		fetcherConfig
	)
	return { data, error, mutate, isLoading } // 데이터와 에러를 반환
}

export const useCoupangCategoryCount = <Data = number, Error = any>(
	category: string,
	fetcherConfig?: SWRConfiguration<Data, Error, BareFetcher<Data>>
) => {
	const { data } = useSWR<Data, Error>(
		`/api/v1/product/coupang/count${qs({ category })}`,
		fetcher,
		fetcherConfig
	)
	return { data }
}

export const useProduct = <Data = Product.Coupang[], Error = any>(
	fetcherConfig?: SWRConfiguration<Data, Error, BareFetcher<Data>>
) => {
	const url = `/api/v1/product`
	const { data, error, mutate, isLoading } = useSWR<Data, Error>(
		url,
		fetcher,
		fetcherConfig
	)
	return { data, error, mutate, isLoading } // 데이터와 에러를 반환
}
