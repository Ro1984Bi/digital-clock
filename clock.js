const hour = document.getElementById('hour')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds') 
const ampmEl = document.getElementById('ampm')

let setTime = () => {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let amp = 'AM'

    if (h > 12) {
        h = h - 12
        amp = 'PM'
    }

    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s

    hour.innerText = h
    minutes.innerText = m
    seconds.innerText = s
    ampmEl.innerText = amp
    setTimeout(() => {
        setTime()
    })
}

setTime()