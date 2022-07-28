import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconSnykColor16 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill="#fff"
                    d="M11.689 4.222H4.335c0-.466.664-1.873 1.994-4.222l.552 3.717h2.247L9.679 0c1.34 2.38 2.01 3.787 2.01 4.222z"
                />
                <path
                    fill="#fff"
                    d="M8 16l-5-3.544V4.185s1.849-.69 5.007-.69c3.158 0 4.993.69 4.993.69v8.271L8 16z"
                />
                <path
                    fill="#DBDBDB"
                    d="M8 15.502l-4.68-3.304V4.517S5.07 3.876 8 3.876v11.626z"
                />
                <path
                    fill="#C6C6C6"
                    d="M8.007 3.876H8v11.616l4.64-3.294V4.517s-1.703-.641-4.633-.641z"
                />
                <path
                    fill="#3B3B63"
                    d="M10.533 13.694l-.395-3.47H7.97v5.286l.031.03c.844-.584 1.688-1.2 2.533-1.846z"
                />
                <path
                    fill="#53537A"
                    d="M5.469 13.722L8 15.54l.002-5.42H5.809l-.34 3.602z"
                />
                <path
                    fill="#BC9375"
                    d="M9.084 12.695c0 .596-.56.891-1.073.891-.513 0-1.083-.295-1.083-.891"
                />
                <path
                    fill="#fff"
                    d="M8.006 13.003c-.412 0-.612-.3-.612-.92h.196c0 .725.28.725.416.725.135 0 .416 0 .416-.724h.196c0 .618-.2.919-.612.919z"
                />
                <path
                    fill="#C49A7E"
                    d="M8 12.235c.127.332.372.497.735.497.356 0 .726-.186.895-.646.236-.644.234-1.54.234-1.54s1.049-1.307 1.049-1.75H8v3.439z"
                />
                <path
                    fill="#D8B7A0"
                    d="M5.046 8.797c0 .512 1.04 1.748 1.04 1.748s-.003.896.233 1.54c.168.46.54.647.895.647.364 0 .625-.165.786-.497V8.797H5.046z"
                />
                <path
                    fill="#3B3B63"
                    d="M10.788 5.855c-.809-.825-1.01-2.546-1.01-2.546-.152.542-.48 2.14-.48 2.14s-.637-.204-1.323-.206c-.023 0-.023 2.154 0 6.46l.653-.47.122-2.28.695.79.896.26.336-.237c.142-.198.19-.367.224-.455.124-.32-.155-2.76-.155-2.76-.1-.207.042-.696.042-.696z"
                />
                <path
                    fill="#53537A"
                    d="M6.72 5.45S6.39 3.85 6.24 3.31c0 0-.201 1.72-1.01 2.545 0 0 .141.489.042.695 0 0-.28 2.442-.155 2.76.034.088.082.257.224.456l.336.237.896-.261.695-.79.122 2.281.61.458V5.23c-.688.002-1.28.219-1.28.219z"
                />
                <path
                    fill="#333152"
                    d="M10.222 1.715c.134.249 1.287 2.549 1.287 3.346l-.511 1.386c.086.782.258 2.482.128 2.814-.08.206-.386.628-.647.97l.357 3.248-.483.346-.268-2.373c-.037.241-.093.498-.178.73-.112.305-.31.536-.562.673-.015.733-.694 1.128-1.334 1.128-.644 0-1.329-.395-1.344-1.127a1.23 1.23 0 01-.564-.675 3.828 3.828 0 01-.173-.7l-.257 2.388-.486-.352.351-3.276c-.263-.343-.575-.772-.656-.98-.13-.332.036-2.032.122-2.814l-.542-1.435v-.047c0-.796 1.184-3.001 1.318-3.25l.383-.698.35 2.43.189 1.31.248.407a3.47 3.47 0 011.053-.191c.41 0 .818.111 1.058.191l.248-.406.538-3.741.375.698zm-2.21 11.748c.282 0 .686-.128.786-.465h-.032c-.055 0-.106-.004-.156-.011-.146.202-.374.263-.604.263-.23 0-.457-.062-.603-.263-.05.007-.102.012-.158.012l-.031-.001c.101.337.51.465.797.465zm-.332-.555a.532.532 0 00.326.101.53.53 0 00.325-.101 1.055 1.055 0 01-.19-.108c-.05.014-.098.014-.135.014-.038 0-.087 0-.137-.015-.056.04-.12.078-.19.109zm2.011-2.52c.348-.43.872-1.122.947-1.315.058-.2-.04-1.522-.164-2.63l-.007-.062.103-.275c-.339-.359-.575-.85-.736-1.315l-.02.146-.535.874-.209-.089c-.005-.002-.55-.229-1.066-.229-.52 0-1.057.227-1.062.229l-.209.09-.535-.875-.015-.112c-.163.46-.4.943-.737 1.294l.099.263-.007.061c-.125 1.108-.222 2.43-.163 2.635.074.189.598.88.945 1.31l.058.072v.092c0 .009 0 .859.218 1.45a.67.67 0 00.65.475c.36 0 .511-.328.518-.342.084-.165.126-.436.126-.813h.217c0 .303.046.575.136.815.006.012.162.341.523.341a.671.671 0 00.65-.475c.217-.594.218-1.442.218-1.45v-.093l.057-.072z"
                />
                <path
                    fill="#333152"
                    d="M9.632 8.077H8.585v.011c0 .364.316.659.687.659.371 0 .687-.295.687-.659v-.01h-.327z"
                />
                <path
                    fill="#fff"
                    d="M8.847 8.077v.011a.392.392 0 10.785 0v-.01h-.785z"
                />
                <path
                    fill="#333152"
                    d="M9.177 8.077l-.005.002c.022.004.035.056.03.09a.105.105 0 01-.103.09.173.173 0 00.145.134.173.173 0 00.197-.147c.01-.07-.024-.169-.08-.169h-.184zM7.105 8.077H6.058v.011c0 .364.316.659.687.659.37 0 .687-.295.687-.659v-.01h-.327z"
                />
                <path
                    fill="#fff"
                    d="M6.32 8.077v.011a.392.392 0 00.785 0v-.01h-.786z"
                />
                <path
                    fill="#333152"
                    d="M6.833 8.077H6.65l-.005.002c.023.004.036.056.03.09a.105.105 0 01-.103.09.173.173 0 00.146.134.173.173 0 00.196-.147c.01-.07-.023-.169-.08-.169z"
                />
                <path
                    fill="#C49A7E"
                    d="M9.553 7.767c.044-.048.417-.469-.082-.469-.451 0-.776.362-.862.47h.944z"
                />
                <path
                    fill="#D8B7A0"
                    d="M7.4 7.767c-.086-.107-.41-.469-.862-.469-.499 0-.125.421-.082.47H7.4zM5 4.923c.03-.413.462-1.403.874-2.238l.11.763c-.042.285-.233 1.404-.747 2.109L5 4.923z"
                />
                <path
                    fill="#C49A7E"
                    d="M10.036 3.389l.101-.704c.412.835.845 1.825.875 2.238l-.232.619c-.555-.776-.729-2.038-.744-2.153z"
                />
                <path
                    fill="#fff"
                    d="M7.62 11.785c-.193-.146-.391-.33-.391-.472 0-.092.165-.379.165-.379h1.228s.161.254.161.38c0 .131-.2.31-.4.457-.069-.117-.155-.137-.195-.045a.367.367 0 00-.015.188 4.4 4.4 0 01-.189.115s-.061-.036-.149-.094a.387.387 0 00-.011-.21c-.04-.093-.129-.07-.198.05a.397.397 0 00-.005.01z"
                />
                <path
                    fill="#333152"
                    d="M7.62 11.785c-.193-.146-.391-.33-.391-.472 0-.092.165-.379.165-.379h1.228s.161.254.161.38c0 .131-.2.31-.4.457-.069-.117-.155-.137-.195-.045a.367.367 0 00-.015.188 4.4 4.4 0 01-.189.115s-.061-.036-.149-.094a.387.387 0 00-.011-.21c-.04-.093-.129-.07-.198.05a.397.397 0 00-.005.01z"
                />
            </svg>
        );
    }
);
