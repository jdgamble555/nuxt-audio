export function useInterval(fn: () => void, delay: number) {
    let id: number | null = null

    const start = () => {
        if (!id) id = setInterval(fn, delay)
    }

    const stop = () => {
        if (id) {
            clearInterval(id)
            id = null
        }
    }

    return { start, stop }
}