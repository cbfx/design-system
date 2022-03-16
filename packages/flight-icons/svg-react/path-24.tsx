import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconPath24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M19.5 1a3.5 3.5 0 00-1.668 6.578c-.665 1.8-1.174 2.997-2.267 4.503a2.001 2.001 0 00-1.605.21c-1.859-1.251-3.599-1.917-5.978-2.56A2 2 0 104.48 11.3c-.616 1.268-1.071 2.439-1.406 3.674-.344 1.267-.556 2.585-.694 4.125a2 2 0 101.497.103c.132-1.465.332-2.682.644-3.835.303-1.115.715-2.186 1.29-3.375a1.997 1.997 0 001.8-.806c2.236.605 3.801 1.208 5.454 2.311A2.002 2.002 0 0015 16a2 2 0 001.74-2.986c1.25-1.71 1.815-3.057 2.537-5.021A3.5 3.5 0 1019.5 1zm-2 3.5a2 2 0 114 0 2 2 0 01-4 0z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);