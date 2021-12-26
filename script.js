const date = new Date()
const app = Vue.createApp({
    data() {
        return {
            startTime: 0,
            startFlag: false,
            stopTime: 0,
            stopFlag: false,
            time: 0,
            timeText: '0:00',
        }
    },
    methods: {
        start() {
            if (!this.startFlag) {
                this.startTime = date.getTime()
            }
            if (this.stopFlag) {
                this.startTime = new Date().getTime() - this.stopTime
                this.stopFlag = false
            }
            this.startFlag = true
        },
        draw() {
            if (this.startFlag) {
                time = Math.floor((new Date().getTime() - this.startTime) / 1000)
                sec = 60 - time % 60
                min = 4 - Math.floor(time / 60)
                this.timeText = `${min}:${sec}`
            }
        },
        stop() {
            this.
            this.startFlag = false
            this.stopFlag = true
            this.stopTime = new Date().getTime()
        }
    },
}).mount('#app')

setInterval(app.draw, 1)