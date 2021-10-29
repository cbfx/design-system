import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconNode24 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M7 9.25A2.75 2.75 0 019.75 6.5h5a2.75 2.75 0 012.75 2.75V11h4.75a.75.75 0 010 1.5H17.5v1.75A2.75 2.75 0 0114.75 17h-5A2.75 2.75 0 017 14.25V12.5H2.25a.75.75 0 010-1.5H7V9.25zm9 0C16 8.56 15.44 8 14.75 8h-5c-.69 0-1.25.56-1.25 1.25v5c0 .69.56 1.25 1.25 1.25h5c.69 0 1.25-.56 1.25-1.25v-5z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
