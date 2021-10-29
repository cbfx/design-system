import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconReplicationPerf24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path
                        fillRule="evenodd"
                        d="M2 4.75A2.75 2.75 0 014.75 2h10.5A2.75 2.75 0 0118 4.75v2.19l.78.78A.75.75 0 0118 8.957v2.982l2.78 2.78a.75.75 0 11-1.06 1.061L18 14.06v1.19c0 .495-.13.959-.36 1.36.05.03.097.067.14.11l4 4a.75.75 0 11-1.06 1.06l-4-4a.751.751 0 01-.11-.14c-.401.23-.865.36-1.36.36h-1.19l.72.72a.75.75 0 11-1.06 1.06L11.94 18H9.06l2.72 2.72a.75.75 0 11-1.06 1.06L6.94 18H4.75A2.75 2.75 0 012 15.25V4.75zM4.75 3.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25V4.75c0-.69-.56-1.25-1.25-1.25H4.75z"
                        clipRule="evenodd"
                    />
                    <path d="M16.78 20.72a.75.75 0 10-1.06 1.06l1 1a.75.75 0 101.06-1.06l-1-1zM22.68 16.62a.75.75 0 00-1.06 1.06l.1.1a.75.75 0 001.06-1.06l-.1-.1zM19.72 9.72a.75.75 0 011.06 0l1 1a.75.75 0 11-1.06 1.06l-1-1a.75.75 0 010-1.06z" />
                </g>
            </svg>
        );
    }
);
