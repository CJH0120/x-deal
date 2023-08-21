export interface CommerceData {
	displayName: string
	logoPath: string
	link: string
	pageLink: string
	key: string
	ogImg: string
}

export const commerceStore: CommerceData[] = [
	{
		key: "coupang",
		displayName: "쿠팡",
		logoPath: "/logo/coupang.png",
		link: "https://link.coupang.com/a/6qRXH",
		pageLink: "/coupang",
		ogImg: "/og/xcoupang.png",
	},
	{
		key: "hmall",
		displayName: "현대몰",
		logoPath: "/logo/hmall.jpg",
		link: "https://bitl.bz/2qbbr6",
		pageLink: "/hmall",
		ogImg: "",
	},
	// {
	// 	key: "auction",
	// 	displayName: "옥션",
	// 	logoPath: "/logo/autcion.webp",
	// 	link: "https://bitl.bz/HsHOw6",
	// 	pageLink: "/auction",
	// 	ogImg: "/og/xauction.png",
	// },
	{
		key: "eleven",
		displayName: "11번가",
		logoPath: "/logo/11.webp",
		link: "https://bitl.bz/UNlyEZ",
		pageLink: "/eleven",
		ogImg: "/og/x11st.png",
	},
	// {
	// 	key: "gmarket",
	// 	displayName: "지마켓",
	// 	logoPath: "/logo/gMarket.webp",
	// 	link: "https://bitl.bz/XfmPia",
	// 	pageLink: "/gmarket",
	// 	ogImg: "/og/gmarket.png",
	// },
	// {
	// 	key: "gsmall",
	// 	displayName: "지에스몰",
	// 	logoPath: "/logo/gsMall.webp",
	// 	link: "https://bitl.bz/Wb8EmX",
	// 	pageLink: "/gsmall",
	// 	ogImg: "/og/wgsmall.png",
	// },
	// {
	// 	key: "himart",
	// 	displayName: "하이마트",
	// 	logoPath: "/logo/hiMart.webp",
	// 	link: "https://bitl.bz/cBSLxW",
	// 	pageLink: "/himart",
	// 	ogImg: "/og/xhimart.png",
	// },
	// {
	// 	key: "lotte",
	// 	displayName: "롯데",
	// 	logoPath: "/logo/lotte.webp",
	// 	link: "https://bitl.bz/GsWQR3",
	// 	pageLink: "/lotte",
	// 	ogImg: "/og/xlotte.png",
	// },
	{
		key: "wemakeprice",
		displayName: "위메프",
		logoPath: "/logo/we.webp",
		link: "https://bitl.bz/f53jjo",
		pageLink: "/wemakeprice",
		ogImg: "/og/xwe.png",
	},
]
