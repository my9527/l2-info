
import { css } from "styled-components"
import { Styles } from "styled-components/dist/types";
export const points = {
    desktop: 1920,
    tablet: 1080,
    mobile: 860
}

type SizeLabel = keyof typeof points;

type MediaQuery = Record<SizeLabel, (...args: Styles<object>[]) => ReturnType<typeof css>>;


// Iterate through the sizes and create a media template
export const media: MediaQuery = (Object.keys(points) as SizeLabel[]).reduce((acc, label) => {

    acc[label] = (ruleString: Styles<object>) => css`
        @media (max-width: ${points[label]}px) {
            ${css(ruleString)}
        }
    `
    return acc
}, {} as MediaQuery)

