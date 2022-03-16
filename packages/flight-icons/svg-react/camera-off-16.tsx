import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconCameraOff16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path
                        fillRule="evenodd"
                        d="M1.22 1.22a.75.75 0 011.06 0l12.5 12.5a.75.75 0 11-1.06 1.06l-.78-.78H3.25A2.25 2.25 0 011 11.75V5.155a2.25 2.25 0 011.138-1.957L1.22 2.28a.75.75 0 010-1.06zm8.304 9.364l1.915 1.916H3.25a.75.75 0 01-.75-.75V5.155a.75.75 0 01.686-.748l.148-.012 2.081 2.081a3 3 0 004.108 4.108zM8.389 9.45L6.55 7.611A1.5 1.5 0 008.389 9.45z"
                        clipRule="evenodd"
                    />
                    <path d="M5.866 1h3.958c.475 0 .91.27 1.12.696l.54 1.093 1.457.124A2.25 2.25 0 0115 5.155v5.595a.75.75 0 01-1.5 0V5.155a.75.75 0 00-.686-.748l-1.878-.16a.75.75 0 01-.608-.414L9.668 2.5H5.866a.75.75 0 010-1.5z" />
                </g>
            </svg>
        );
    }
);