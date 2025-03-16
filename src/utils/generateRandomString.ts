export const generateRandomString = (length: number) => [...Array(length)].map(() => "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.random() * 62)).join("");

