import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconAzureVms24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M9.152 7.703L12 6.088l2.848 1.615L12 9.36 9.152 7.703zM12.497 9.65L15.1 8.135v3.03L12.497 9.65zM12.25 10.085l2.598 1.512-2.598 1.474v-2.986zM11.75 10.085v2.986l-2.598-1.474 2.598-1.512zM8.9 8.135v3.03l2.603-1.515L8.9 8.135z" />
                    <path
                        fillRule="evenodd"
                        d="M21.333 3H2.667A.667.667 0 002 3.667v12c0 .368.298.666.667.666h7.366c0 2.3-.066 3.723-2.044 4.034A1.111 1.111 0 007 21.477h10a1.11 1.11 0 00-.989-1.11c-1.978-.312-2.055-1.734-2.055-4.034h7.377a.667.667 0 00.667-.666v-12A.667.667 0 0021.333 3zM15.6 7.554L12 5.513 8.4 7.554v4.192l3.6 2.041 3.6-2.041V7.554z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
