const date = new Date()
const app = Vue.createApp({
    data() {
        return {
            startTime: 0,
            startFlag: false,
            stopTime: 0,
            stopFlag: false,
            time: '00:00',
        }
    },
    methods: {
        start() {
            this.startFlag = true
            this.startTime = date.getTime()
            if (this.stopFlag) {
                this.startTime = new Date().getTime() - this.stopTime
                this.stopFlag = false
            }
        },
        draw() {
            if (this.startFlag) {
                time = Math.floor((new Date().getTime() - this.startTime) / 1000)
                sec = 60 - time % 60
                min = 4 - Math.floor(time / 60)
                this.time = `${min}:${sec}`
            }
        },
        stop() {
            this.startFlag = false
            this.stopFlag = true
            this.stopTime = new Date().getTime()
        }
    },
}).mount('#app')

setInterval(app.draw, 1)