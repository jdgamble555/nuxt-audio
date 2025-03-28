export const useAudio = (filename: string) => {

    const audio = ref<HTMLAudioElement | null>(null)

    const isPlaying = ref<boolean>(false)
    const currentTime = ref<number>(0)
    const duration = ref<number>(0)

    const seek = () => {
        if (audio.value) audio.value.currentTime = currentTime.value
    }

    const updateTime = () => {
        if (audio.value) currentTime.value = audio.value.currentTime
    }

    const pause = () => {
        if (!audio.value) {
            return
        }
        if (audio.value.paused) {
            audio.value.play()
            return;
        }
        audio.value.pause()
    }

    watchEffect(() => {

        if (!audio.value) {
            return
        }

        audio.value.src = filename
        audio.value.autoplay = true
        audio.value.ontimeupdate = updateTime
        audio.value.onplay = () => {
            isPlaying.value = true
        }
        audio.value.onpause = () => {
            isPlaying.value = false
        }
        audio.value.onloadedmetadata = () => {
            duration.value = audio.value!.duration
        }
    })

    return {
        audio,
        pause,
        isPlaying,
        currentTime,
        duration,
        seek
    }
}