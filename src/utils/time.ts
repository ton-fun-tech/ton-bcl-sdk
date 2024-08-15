export const unixtime = () => Math.floor(Date.now() / 1000);

export const delay = (ms: number) => {
    return new Promise<void>((resolve) => {
        setTimeout(() => resolve(), ms);
    });
};
