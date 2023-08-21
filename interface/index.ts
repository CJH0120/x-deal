export namespace Product {
	export interface Coupang {
		name: string
		image: string
		percent: string
		originPrice: string
		price: string
		status: string
		category: string
		productUrl: string
	}

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
}
