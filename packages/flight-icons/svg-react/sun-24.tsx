import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconSun24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M12 .25a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0V1A.75.75 0 0112 .25z" />
                    <path
                        fillRule="evenodd"
                        d="M6 12a6 6 0 1112 0 6 6 0 01-12 0zm6-4.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
                        clipRule="evenodd"
                    />
                    <path d="M12.75 21a.75.75 0 00-1.5 0v2a.75.75 0 001.5 0v-2zM3.69 3.69a.75.75 0 011.06 0l1.42 1.42a.75.75 0 01-1.06 1.06L3.69 4.75a.75.75 0 010-1.06zM18.89 17.83a.75.75 0 10-1.06 1.06l1.42 1.42a.75.75 0 101.06-1.06l-1.42-1.42zM.25 12a.75.75 0 01.75-.75h2a.75.75 0 010 1.5H1A.75.75 0 01.25 12zM21 11.25a.75.75 0 000 1.5h2a.75.75 0 000-1.5h-2zM6.17 17.83a.75.75 0 010 1.06l-1.42 1.42a.75.75 0 11-1.06-1.06l1.42-1.42a.75.75 0 011.06 0zM20.31 4.75a.75.75 0 00-1.06-1.06l-1.42 1.42a.75.75 0 001.06 1.06l1.42-1.42z" />
                </g>
            </svg>
        );
    }
);