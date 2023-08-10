import * as React from "react"
import { SVGProps } from "react"
const Logo = React.memo((props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="7em"
        height="7em"
        viewBox="0 0 154 48"
        fill="none"
        {...props}
    >
        <path fill="#fff" d="M0 0h154v48H0z" />
        <path
            fill="#191919"
            d="m27.344 21.64-3.688-5.39 2.422-3.984h7.406l-6.14 9.375ZM12 33l6.61-9.656 3.703 5.625L19.89 33H12Zm21.781 0H26.25L12.422 12.266h7.453L33.781 33Zm2.5-11.563h13.797v3.735H36.281v-3.735ZM62.828 33v-4.14h5.125V16.405h-5.125v-4.14h7.89l4.157 4.14V28.86L70.719 33h-7.89Zm-8-20.734h6.906V33h-6.906V12.266Zm30.125 12.218V33h-6.906V12.266h6.906v8.218h6.61v4h-6.61Zm1.094-8.203v-4.015h10.797v6h-6.5V16.28h-4.297Zm0 16.719v-4.14h3.89V26.78h6.907V33H86.047Zm27.734-2.266H107l1.438-4.109h3.75l-5.547-14.36h6.734L121.641 33h-6.985l-.875-2.266ZM105.156 33h-6.672l7.407-19.797 3.062 8.235L105.156 33Zm18.453 0V12.266h6.907V33h-6.907Zm8 0v-4.14h3.422v-2.626h6.266V33h-9.688Z"
        />
    </svg>
))
export default Logo
