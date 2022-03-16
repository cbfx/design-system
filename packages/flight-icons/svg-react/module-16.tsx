import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconModule16 = forwardRef<SVGSVGElement, IconProps>(
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
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color} fillRule="evenodd" clipRule="evenodd">
                    <path d="M11.5 4.75a.75.75 0 00-.897-.735l-5.5 1.1a.75.75 0 00-.603.735v5.4a.75.75 0 00.897.735l5.5-1.1a.75.75 0 00.603-.735v-5.4zM6 10.335v-3.87l4-.8v3.87l-4 .8z" />
                    <path d="M15 2.33A2.25 2.25 0 0012.309.123l-9.5 1.9A2.25 2.25 0 001 4.23v9.44a2.25 2.25 0 002.691 2.207l9.5-1.9A2.25 2.25 0 0015 11.77V2.33zm-2.397-.736a.75.75 0 01.897.736v9.44a.75.75 0 01-.603.736l-9.5 1.9a.75.75 0 01-.897-.736V4.23a.75.75 0 01.603-.736l9.5-1.9z" />
                </g>
            </svg>
        );
    }
);