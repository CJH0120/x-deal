export namespace Product {
	export interface Card {
		storeName: string
		productName: string
		productImage: string
		productPercent: string
		productOriginPrice: string
		productPrice: string
		productStatus: string
		productCategory: string
		productUrl: string
		NewLink: string
	}
}
export interface MainListProps {
	title: string
	desc: string
	link: string
	items: Product.Card[]
	storeName: string
	isLoading?: boolean
}
