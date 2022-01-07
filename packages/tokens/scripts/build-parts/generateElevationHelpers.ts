import { TransformedTokens }  from 'style-dictionary';

import { PREFIX } from './generateCssHelpers';

type Helpers = string[];

export function generateElevationHelpers(tokens: TransformedTokens): Helpers {

    const helpersElevation: Helpers = [];
    const helpersSurface: Helpers = [];

    Object.keys(tokens).forEach((key: string) => {

        if (key === 'color') return;

        const levelName = key;
        const levelValues = tokens[key];

        let shadows: string[] = [];
        let borders: string[] = [];
        Object.keys(levelValues).forEach((property: string) => {
            switch (property) {
                case 'shadow-01':
                    shadows.push(getDropShadow(levelName, 'shadow-01'));
                    break;
                case 'shadow-02':
                    shadows.push(getDropShadow(levelName, 'shadow-02'));
                    break;
                case 'border':
                    borders.push(`0 0 0 var(--token-elevation-${levelName}-border-width) var(--token-elevation-${levelName}-border-color)`);
                    break;
            }
        });

        if (shadows.length > 0) {
            const selector = `.${PREFIX}-elevation-${levelName}`;
            helpersElevation.push(`${selector} { box-shadow: ${shadows.join(', ')}; }`);
        }
        if (borders.length > 0) {
            const selector = `.${PREFIX}-surface-${levelName}`;
            // notice: we put the "border-shadow" first because the final rendering in the browser looks better
            // see: https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow - "The z-ordering of multiple box shadows is the same as multiple text shadows (the first specified shadow is on top)."
            helpersSurface.push(`${selector} { box-shadow: ${[...borders, ...shadows].join(', ')}; }`);
        }
    });

    return [...helpersElevation, ...helpersSurface];
}

function getDropShadow(level: string, shadow: string) {
    return [
        `var(--token-elevation-${level}-${shadow}-x)`,
        `var(--token-elevation-${level}-${shadow}-y)`,
        `var(--token-elevation-${level}-${shadow}-blur)`,
        `var(--token-elevation-${level}-${shadow}-spread)`,
        `var(--token-elevation-${level}-${shadow}-color)`,
    ].join(' ');
}
