import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconAlertDiamond16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M9.413 10.827a1 1 0 010-1.414l.005-.005a1 1 0 011.414 1.414l-.004.005a1 1 0 01-1.415 0zM6.939 5.877a.75.75 0 10-1.061 1.061l1.768 1.768a.75.75 0 101.06-1.06L6.94 5.876z" />
                    <path
                        fillRule="evenodd"
                        d="M1.748 12V4a2.25 2.25 0 012.25-2.25h8A2.25 2.25 0 0114.248 4v8a2.25 2.25 0 01-2.25 2.25h-8A2.25 2.25 0 011.748 12zm1.5-8v8c0 .415.336.75.75.75h8a.75.75 0 00.75-.75V4a.75.75 0 00-.75-.75h-8a.75.75 0 00-.75.75z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
