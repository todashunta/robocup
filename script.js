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
            bluePoint: 0,
            yellowPoint: 0
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
            if (this.startFlag) {
                this.stopTime = new Date().getTime()
                this.startFlag = false
                this.stopFlag = true
            }
        },
        blueUp() {
            this.bluePoint += 1
        },
        blueDown() {
            this.bluePoint -= 1
        },
        yellowUp() {
            this.yellowPoint += 1
        },
        yellowDown() {
            this.yellowPoint -= 1
        }
    },
}).mount('#app')

setInterval(app.draw, 1)