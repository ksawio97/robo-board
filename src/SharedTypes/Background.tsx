type Background = undefined | "bg1" | "bg2";

const convertToBackground = (value: any): Background => {
    if (value === "bg1" || value === "bg2")
        return value as Background;
    return undefined;
}

export default Background;
export { convertToBackground };