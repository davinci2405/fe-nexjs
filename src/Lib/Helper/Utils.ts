export const getPathUrl = (url: string) => {
    if (url) {
        const [origin] = url.split("#");
        const [originUrl] = origin.split("?");
        return originUrl;
    }
    return url;
};