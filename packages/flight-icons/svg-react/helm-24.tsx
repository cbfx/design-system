import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconHelm24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = useMemo(
            () =>
                title
                    ? 'title-' + Math.random().toString(36).substr(2, 9)
                    : undefined,
            [title]
        );
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path d="M7.44 6.825l.021.02c-.07.072-.14.142-.21.211-.153.154-.304.306-.448.462-.282.305-.531.646-.556.742h.39c.304 0 .607 0 .91.002a.19.19 0 00.155-.07c.209-.23.436-.442.68-.634a5.856 5.856 0 013.3-1.273 5.915 5.915 0 014.738 1.909.16.16 0 00.128.068c.284-.002.567-.002.85-.002h.422a.44.44 0 00.067-.012 7.112 7.112 0 00-1.064-1.235l.006-.005.013-.013A4.294 4.294 0 0017.87 5.82c.192-.305.337-.639.428-.988.035-.135.045-.275.031-.414-.018-.188-.123-.346-.374-.317a.69.69 0 00-.147.034 1.512 1.512 0 00-.473.275 4.346 4.346 0 00-1.316 1.87c-.005.016-.013.03-.02.044l-.003.007-.005.01a20.111 20.111 0 01-.23-.134c-.173-.1-.343-.2-.519-.288a7.542 7.542 0 00-.79-.343 7.46 7.46 0 00-.818-.24c-.193-.046-.389-.08-.585-.113l-.261-.046a4.506 4.506 0 00.055-2.117 2.123 2.123 0 00-.21-.587.692.692 0 00-.235-.269.281.281 0 00-.32.002.628.628 0 00-.127.113c-.098.121-.172.259-.22.407a3.363 3.363 0 00-.177.87 4.5 4.5 0 00.106 1.479l.011.055.007.033a7.054 7.054 0 00-3.241.994l-.012-.01c-.006-.005-.009-.007-.01-.01a4.501 4.501 0 00-.884-1.372c-.207-.224-.432-.429-.708-.567a1.092 1.092 0 00-.229-.088c-.252-.06-.424.07-.442.327a.784.784 0 00-.002.035v.022c-.01.2.04.39.107.575.236.662.626 1.223 1.13 1.708l.051.048zM16.822 17.003c.356-.328.678-.692.96-1.087l-.008-.023H17.355c-.286 0-.572.001-.858-.002a.306.306 0 00-.24.098c-1.358 1.326-2.98 1.897-4.864 1.714a5.598 5.598 0 01-1.988-.591 5.878 5.878 0 01-1.576-1.156.189.189 0 00-.149-.065c-.293.002-.586.002-.88.002H6.42a.557.557 0 00-.092.007c.328.461.71.882 1.138 1.253a.15.15 0 01-.014.026 1.463 1.463 0 01-.035.033l-.02.02a4.5 4.5 0 00-1.06 1.51c-.084.181-.142.373-.173.57-.02.141-.03.283.027.42a.285.285 0 00.216.18.483.483 0 00.261-.028c.176-.063.34-.157.482-.278a4.42 4.42 0 001.236-1.657l.013-.03.015-.032.016-.036a7.044 7.044 0 003.239 1l.002.01.002.005c.002.007.003.01.002.014a3.778 3.778 0 00-.13.832c-.022.354-.004.709.055 1.059.045.256.108.507.231.738.043.081.095.157.157.225.155.168.345.167.504.003a.535.535 0 00.094-.12c.062-.112.118-.229.166-.349.101-.29.161-.592.177-.899a4.37 4.37 0 00-.119-1.458l-.011-.055-.006-.031a7.51 7.51 0 001.132-.216 7.265 7.265 0 001.067-.389c.347-.162.682-.349 1-.56l.013.032.017.043c.262.73.718 1.376 1.317 1.869.114.09.237.168.367.232.086.041.177.068.271.08a.288.288 0 00.326-.2.592.592 0 00.03-.148 1.384 1.384 0 00-.088-.577 4.333 4.333 0 00-1.347-1.926l-.075-.062zM16.03 9.91l.102.002c.075.002.15.003.222-.004.12-.01.206.032.293.113.38.35.763.697 1.146 1.044l.002.001.374.34.054.047.03.028.03-.025.057-.05c.524-.476 1.047-.954 1.57-1.431a.218.218 0 01.168-.066c.091.004.182.003.275.002h.12v4.214c-.07.02-.996.024-1.106.003v-2.135l-.022-.01-1.09.994-1.098-.99-.02.008-.001.363V14.135h-1.097c-.02-.07-.03-3.986-.01-4.225zM6.996 9.915h-1.09v1.131l-.001.253v.11c-.119.021-1.277.017-1.355-.006V9.916H3.448v4.21c.093.023 1.024.02 1.106-.004v-1.59h1.351v1.062c0 .18 0 .361.003.542H7c.022-.102.018-4.15-.004-4.22zM8.303 14.135V9.928c.065-.021 2.462-.03 2.618-.008v.896l-.033.003c-.024.002-.05.004-.074.004h-1.4v.698h1.334v.928H9.426c-.022.08-.028.633-.01.786l.032.002a.895.895 0 00.074.005h1.4v.893H8.303zM12.175 9.916c-.02.076-.024 4.107-.004 4.22h2.618v-1.103h-1.407c-.024 0-.049-.002-.076-.004l-.044-.003v-3.11h-1.087z" />
                </g>
            </svg>
        );
    }
);
