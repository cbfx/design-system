import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconNetwork24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M10.25 2.5A1.75 1.75 0 008.5 4.25v3.5c0 .966.784 1.75 1.75 1.75H11V11H3a.75.75 0 000 1.5h3.5v2H5.25a1.75 1.75 0 00-1.75 1.75v3.5c0 .966.784 1.75 1.75 1.75h3.5a1.75 1.75 0 001.75-1.75v-3.5a1.75 1.75 0 00-1.75-1.75H8v-2h8v2h-.75a1.75 1.75 0 00-1.75 1.75v3.5c0 .966.784 1.75 1.75 1.75h3.5a1.75 1.75 0 001.75-1.75v-3.5a1.75 1.75 0 00-1.75-1.75H17.5v-2H21a.75.75 0 000-1.5h-8.5V9.5h1.25a1.75 1.75 0 001.75-1.75v-3.5a1.75 1.75 0 00-1.75-1.75h-3.5zM10 4.25a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zm-5 12a.25.25 0 01.25-.25h3.5a.25.25 0 01.25.25v3.5a.25.25 0 01-.25.25h-3.5a.25.25 0 01-.25-.25v-3.5zM15.25 16a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
