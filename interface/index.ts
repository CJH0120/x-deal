namespace Product {
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
		//상품명
		productName: string
		//상품이미지
		productImage: string
		//상품 할인 퍼센트
		productPercent: string
		//원래 가격
		productOriginPrice: string
		//파는 가격
		productPrice: string
		//상품 정도 상/중/하/새것
		productStatus: string
		//상품 카테고리
		productCategory: string
		//newLink
		productUrl: string
	}
}
