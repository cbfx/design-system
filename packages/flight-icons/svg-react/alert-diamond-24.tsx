import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconAlertDiamond24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M8.464 8.464a.75.75 0 011.06 0l3.183 3.182a.75.75 0 01-1.06 1.061L8.463 9.525a.75.75 0 010-1.06zM14.121 14.121a1 1 0 001.414 1.415l.007-.008a1 1 0 00-1.414-1.414l-.007.007z" />
                    <path
                        fillRule="evenodd"
                        d="M3.472 17.779V6.222a2.75 2.75 0 012.75-2.75h11.556a2.75 2.75 0 012.75 2.75v11.556a2.75 2.75 0 01-2.75 2.75H6.222a2.75 2.75 0 01-2.75-2.75zm1.5-11.557v11.556c0 .69.56 1.25 1.25 1.25h11.556c.69 0 1.25-.56 1.25-1.25V6.222c0-.69-.56-1.25-1.25-1.25H6.222c-.69 0-1.25.56-1.25 1.25z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
