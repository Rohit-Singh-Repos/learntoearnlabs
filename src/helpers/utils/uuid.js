export const uuid = () => {
    let first = Date.now().toString(36);
    let second = Math.random().toString(36).substring(2,9)

    return first + second
}