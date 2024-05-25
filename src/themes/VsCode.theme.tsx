import { background, extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    global: {
        body: {
        fontFamily: "body",
        },
    },
    colors: {
        dark: {
            primary: {
                backgroundColor: "#1F2228",
                fontColor: "##C4CBDA",
                highlightColor1: "#569CD6",
                highlightColor2: "#4EC9B0"
            },
            secondary: {
                backgroundColor: "#24272E",
                fontColor: "#C4CBDA",
                highlightColor1: "#C586C0",
                highlightColor2: "#9CDCFE"
            },
            tertiary: {
                backgroundColor: "#31343D",
                highlightColor1: "#CE9178",                    
            },
        }
    }
})