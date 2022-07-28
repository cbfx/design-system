import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconAwsS3Color24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fillRule="evenodd" clipRule="evenodd">
                    <path
                        fill="#E25444"
                        d="M18.897 5.254l-3.49 6.789 3.49 6.789 1.43-.816V6.07l-1.43-.816z"
                    />
                    <path
                        fill="#7B1D13"
                        d="M18.897 5.254l-6.981.816-3.554 5.973 3.554 5.973 6.981.816V5.254z"
                    />
                    <path
                        fill="#58150D"
                        d="M4.808 5.254l-1.135.516v12.546l1.135.516 7.108-6.789-7.108-6.79z"
                    />
                    <path
                        fill="#E25444"
                        d="M4.793 5.24l7.132 2.024v9.74l-7.132 1.833V5.24z"
                    />
                    <path
                        fill="#58150D"
                        d="M11.929 8.333l-3.028-.496 3.028-3.514 3.02 3.514-3.02.496z"
                    />
                    <path
                        fill="#58150D"
                        d="M14.95 7.837l-3.025.504-3.024-.504V4.323M11.929 15.705l-3.028.573 3.028 3.017 3.02-3.017-3.02-.573z"
                    />
                    <path
                        fill="#7B1D13"
                        d="M11.916 1.688L8.888 3.32v4.512l3.037-.874-.009-5.27zM11.925 9.441l-3.024.336v4.505l3.024.353V9.441zM11.925 17.042l-3.024-.775v4.428l3.024 1.617v-5.27z"
                    />
                    <path
                        fill="#E25444"
                        d="M14.95 16.267l-3.025.775v5.27l3.025-1.617v-4.428zM11.925 9.441l3.025.336v4.505l-3.025.353V9.441zM11.916 1.688l3.028 1.632v4.512l-3.028-.86V1.688z"
                    />
                </g>
            </svg>
        );
    }
);
