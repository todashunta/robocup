const app = Vue.createApp({
    data() {
        return {
            startTime: 0,
            startFlag: false,
            stopTime: 0,
            stopFlag: false,
            nextFlag: false,
            time: 0,
            timeText: '0:00',
            bluePoint: 0,
            yellowPoint: 0,
            gameMode: [
                '準備',
                '前半',
                'ハーフタイム',
                '後半',
            ],
            gameModeNum: 0,
            gameModeFlag: true,
            humbergerMenu: false,
            nextFlag: false,
        }
    },
    methods: {
        start() {
            const startBtn = document.querySelector('.start')
            if (this.stopFlag) {
                this.stopFlag = false
                this.startTime = new Date().getTime()
                this.startFlag = true
            }else if (!this.startFlag && this.gameModeNum <= 0) {
                this.startTime = new Date().getTime()
                this.time = 0
                this.gameModeNum++
                this.gameModeNum = this.gameModeNum % this.gameMode.length
                this.startFlag = true
                if (this.gameModeNum == 0) {
                    this.startFlag = false
                }
            }
        },
        draw() {
            const gameTime = document.getElementById('gameTime')
            const halfTime = document.getElementById('halfTime')
            if (this.startFlag) {
                this.time = this.time + new Date().getTime() - this.startTime
                this.startTime = new Date().getTime()
                const timeDisplay = Math.floor(this.time / 1000)
                sec = 59 - timeDisplay % 60
                if (this.gameMode[this.gameModeNum] != 'ハーフタイム') {
                    min = (gameTime.value - 1) - Math.floor(timeDisplay / 60)
                } else {
                    min = (halfTime.value - 1) - Math.floor(timeDisplay / 60)
                }
                this.timeText = `${min}:${('00' + String(sec)).slice(-2)}`
                if (min <= 0 && sec <= 0) {
                    this.nextFlag = true
                    this.startFlag = false
                    this.timeText = this.gameMode[this.gameModeNum] + '終了'
                    this.gameModeFlag = false
                    const h1 = document.querySelector('.time > div > h1')
                    h1.style.fontSize = "7rem"
                }
            }
        },
        stop() {
            if (this.startFlag) {
                this.stopTime = new Date().getTime()
                this.startFlag = false
                this.stopFlag = true
            }
        },
        reset() {
            this.startTime = 0
            this.startFlag = false
            this.stopTime = 0
            this.stopFlag = false
            this.time = 0
            this.timeText = '0:00'
            this.bluePoint = 0
            this.yellowPoint = 0
            this.gameModeNum = 0
        },
        next() {
            const h1 = document.querySelector('.time > div > h1')
            if (!this.startFlag) {
                this.startTime = new Date().getTime()
                this.time = 0
                this.gameModeNum++
                this.gameModeNum = this.gameModeNum % this.gameMode.length
                this.startFlag = true
                this.gameModeFlag = true
                this.nextFlag = false
                h1.style.fontSize = "10rem"
                if (this.gameModeNum == 0) {
                    this.reset()
                }
            }
        },
        humberger() {
            const hum = document.querySelector('.humberger')
            const menu = document.querySelector('.menu')
            const cover = document.querySelector('.cover')
            this.humbergerMenu = !this.humbergerMenu
            if (this.humbergerMenu) {
                hum.classList.add('active')
                cover.classList.add('active')
                menu.style.left = '0'
            } else {
                hum.classList.remove('active')
                cover.classList.remove('active')
                menu.style.left = '-50vw'
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
