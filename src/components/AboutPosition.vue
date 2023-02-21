<script>
import { useSettingsStore } from '@/stores/settingsStore'
import { useAboutStore } from '@/stores/aboutStore'

export default {
    setup() {
        const store = useSettingsStore()
        const about = useAboutStore()
        return { store, about }
    },

    data() {
        return {
            contentHeight: null,
            travelDistance: null,
            scrollPosition: null,
            scrollPercentage: null,
            padding: 65,
            canvasLinePercentage: null,
            circleDiameter: null,
            circle2Position: null,
            circle3Position: null,

            secondaryColor: null,
            canvasColor: null,
            accentColor: null,

            //Container boundries
            container: null,
            containerTop: null,
            containerBottom: null,
            containerTopAboutMe: null,
            containerTopWorkExperience: null,
            containerTopEducation: null,
            containerBottomEducation: null,
            containerViewNameHeight: null,
            containerRightViewName: null,
            containerBottomViewName: null,
            
            //Canvas
            containerCanvas: null,
            canvasLineHeight: null,
            canvasLineWidth: null,
            canvasPositionLine: null,
            canvasCircle1: null,
            canvasCircle1Text: null,
            canvasCircle2: null,
            canvasCircle2Text: null,
            canvasCircle3: null,
            canvasCircle3Text: null,
        }
    },
    methods: {
        handleScroll() {
            this.containerTopAboutMe = document.getElementsByClassName('about-container__about-me')[0].getBoundingClientRect().top
            this.containerTopWorkExperience = document.getElementsByClassName('about-container__my-work-experience')[0].getBoundingClientRect().top
            this.containerTopEducation = document.getElementsByClassName('about-container__my-education')[0].getBoundingClientRect().top
            this.scrollPosition = Math.abs(this.containerTopAboutMe - this.padding)
            this.scrollPercentage = Math.round((this.scrollPosition / this.travelDistance) * 100)
            
            //Get the line
            const canvasLinePercentage = this.canvasLineHeight / 100
            
            //Set the height of the line position
            const canvasPositionLineHeight = Math.round(canvasLinePercentage * this.scrollPercentage)
            this.canvasPositionLine.style.height = canvasPositionLineHeight + 'px'

            //Set the color of the circles
            if (canvasPositionLineHeight >= 0) {
                this.canvasCircle1.style.backgroundColor = this.secondaryColor
            } else {
                this.canvasCircle1.style.backgroundColor = this.canvasColor
            }

            if (canvasPositionLineHeight >= 0 && canvasPositionLineHeight <= this.circle2Position) {
                this.canvasCircle1Text.style.color = this.secondaryColor
            } else {
                this.canvasCircle1Text.style.color = this.canvasColor
            }

            if (canvasPositionLineHeight >= this.circle2Position) {
                this.canvasCircle2.style.backgroundColor = this.secondaryColor
            } else {
                this.canvasCircle2.style.backgroundColor = this.canvasColor
            }

            if (canvasPositionLineHeight >= this.circle2Position && canvasPositionLineHeight <= this.circle3Position) {
                this.canvasCircle2Text.style.color = this.secondaryColor
            } else {
                this.canvasCircle2Text.style.color = this.canvasColor
            }

            if (canvasPositionLineHeight >= this.circle3Position) {
                this.canvasCircle3Text.style.color = this.secondaryColor
                this.canvasCircle3.style.backgroundColor = this.secondaryColor
            } else {
                this.canvasCircle3Text.style.color = this.canvasColor
                this.canvasCircle3.style.backgroundColor = this.canvasColor
            }
        },
        scrollTo(index) {
            if (index === 1) {
                this.container.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            } else if (index === 2) {
                this.container.scrollTo({
                    top: this.containerTopWorkExperience - this.containerTopAboutMe,
                    behavior: 'smooth'
                })
            } else if (index === 3) {
                this.container.scrollTo({
                    top: this.containerTopEducation - this.containerTopAboutMe,
                    behavior: 'smooth'
                })
            }
        },

        handleThemeChange() {
            this.secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color')
            this.canvasColor = getComputedStyle(document.documentElement).getPropertyValue('--canvas-color')
            this.accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color')

            //Doesnt work without??
            this.canvasPositionLine.style.backgroundColor = this.secondaryColor
        },

        handleResize() {
            //Get the container boundries
            this.container = document.getElementsByClassName('about-container')[0]
            this.containerTop = document.getElementsByClassName('about-container')[0].getBoundingClientRect().top
            this.containerBottom = document.getElementsByClassName('about-container')[0].getBoundingClientRect().bottom
            this.containerTopAboutMe = document.getElementsByClassName('about-container__about-me')[0].getBoundingClientRect().top
            this.containerTopWorkExperience = document.getElementsByClassName('about-container__my-work-experience')[0].getBoundingClientRect().top
            this.containerTopEducation = document.getElementsByClassName('about-container__my-education')[0].getBoundingClientRect().top
            this.containerBottomEducation = document.getElementsByClassName('about-container__my-education')[0].getBoundingClientRect().bottom
            this.containerViewNameHeight = document.getElementsByClassName('view-name')[0].getBoundingClientRect().height
            this.containerRightViewName = document.getElementsByClassName('view-name')[0].getBoundingClientRect().right
            this.containerBottomViewName = document.getElementsByClassName('view-name')[0].getBoundingClientRect().bottom
            
            const lineHeight = this.containerViewNameHeight
            document.getElementsByClassName('canvas__line')[0].style.height = lineHeight + 'px'
        
            //Get the canvas elements
            this.containerCanvas = document.getElementsByClassName('position-container')[0]
            this.canvasLineHeight = document.getElementsByClassName('canvas__line')[0].getBoundingClientRect().height
            this.canvasLineWidth = document.getElementsByClassName('canvas__line')[0].getBoundingClientRect().width
            this.canvasPositionLine = document.getElementsByClassName('canvas__line__position')[0]
            this.canvasCircle1 = document.getElementsByClassName('canvas__circle')[0]
            this.canvasCircle1Text = document.getElementsByClassName('position-container__text__about-me')[0]
            this.canvasCircle2 = document.getElementsByClassName('canvas__circle')[1]
            this.canvasCircle2Text = document.getElementsByClassName('position-container__text__work-experience')[0]
            this.canvasCircle3 = document.getElementsByClassName('canvas__circle')[2]
            this.canvasCircle3Text = document.getElementsByClassName('position-container__text__education')[0]
            
            //Position the canvas
            this.containerCanvas.style.left = this.containerRightViewName + 'px'
            this.containerCanvas.style.height = this.containerViewNameHeight + 'px'
            
            //Get 1% of the line height
            this.canvasLinePercentage = this.canvasLineHeight / 100
            
            //Set the height of the position line to zero
            this.canvasPositionLine.style.height = 0
            this.canvasPositionLine.style.color = this.secondaryColor
        
            //Get diameter of the circles
            this.circleDiameter = this.canvasCircle1.getBoundingClientRect().width
            
            //Calculate the height of the container
            this.contentHeight = this.containerBottomEducation - this.containerTopAboutMe
            
            //Calculate the positions of the container
            const workExperiencePosition = Math.round(((this.containerTopWorkExperience - this.containerTopAboutMe) / this.contentHeight) * 100)
            const educationPosition = Math.round(((this.containerTopEducation - this.containerTopAboutMe) / this.contentHeight) * 100)
            
            //Calculate the position of the circles on the line
            const canvasCircle1Top = (- this.circleDiameter / 2) + 'px'
            const canvasCircle2Percentage = workExperiencePosition * this.canvasLinePercentage
            const canvasCircle2Top = (canvasCircle2Percentage - (this.circleDiameter / 2)) + 'px'
            const canvasCircle3Percentage = educationPosition * this.canvasLinePercentage
            const canvasCircle3Top = (canvasCircle3Percentage - (this.circleDiameter / 2)) + 'px'
            const canvasCircleLeft = (- this.circleDiameter / 2) + (this.canvasLineWidth / 2) + 'px'
            
            //Position the circles on the line
            this.canvasCircle1.style.top = canvasCircle1Top
            this.canvasCircle1.style.left = canvasCircleLeft
            this.canvasCircle2.style.top = canvasCircle2Top
            this.canvasCircle2.style.left = canvasCircleLeft
            this.canvasCircle3.style.top = canvasCircle3Top
            this.canvasCircle3.style.left = canvasCircleLeft
        
            this.circle2Position = canvasCircle2Top.replace('px', '')
            this.circle3Position = canvasCircle3Top.replace('px', '')
        
            //Set the position of the text of the circles to zero
            this.canvasCircle1Text.style.top = 0
            this.canvasCircle2Text.style.top = 0
            this.canvasCircle3Text.style.top = 0
        
            //Calculate the middle of the text
            const canvasCircle1TextMiddle = this.canvasCircle1Text.getBoundingClientRect().top
            const canvasCircle2TextMiddle = this.canvasCircle2Text.getBoundingClientRect().top 
            const canvasCircle3TextMiddle = this.canvasCircle3Text.getBoundingClientRect().top
        
            //Calculate the middle of the circles on the line
            const canvasCircle1Middle = this.canvasCircle1.getBoundingClientRect().top
                - this.canvasCircle1.getBoundingClientRect().height / 2
            const canvasCircle2Middle = this.canvasCircle2.getBoundingClientRect().top
                - this.canvasCircle2.getBoundingClientRect().height / 2
            const canvasCircle3Middle = this.canvasCircle3.getBoundingClientRect().top
                - this.canvasCircle3.getBoundingClientRect().height / 2
        
            //Calculate the difference between the middle of the text and the middle of the circle
            const canvasCircle1Difference = canvasCircle1Middle - canvasCircle1TextMiddle
            const canvasCircle2Difference = canvasCircle2Middle - canvasCircle2TextMiddle
            const canvasCircle3Difference = canvasCircle3Middle - canvasCircle3TextMiddle
        
            //Position the Text to the middle of the circle
            this.canvasCircle1Text.style.top = canvasCircle1Difference + 'px'
            this.canvasCircle2Text.style.top = canvasCircle2Difference + 'px'
            this.canvasCircle3Text.style.top = canvasCircle3Difference + 'px'

            this.travelDistance = (this.containerBottomEducation - this.containerTopAboutMe) - (this.containerBottom - this.containerTop) + this.padding
        },
    },

    watch: {
        theme() {
            this.handleThemeChange()
            this.handleScroll()
        }
    },

    computed: {
        theme() {
            return this.store.darkMode
        }
    },

    mounted () {
        this.handleResize()
        this.handleThemeChange()
        
        this.canvasCircle1Text.addEventListener('mouseover', () => {
            this.canvasCircle1Text.style.color = this.accentColor
            this.canvasCircle1.style.backgroundColor = this.accentColor
        })
        this.canvasCircle1Text.addEventListener('mouseout', () => {
            this.handleScroll()
        })

        this.canvasCircle2Text.addEventListener('mouseover', () => {
            this.canvasCircle2Text.style.color = this.accentColor
            this.canvasCircle2.style.backgroundColor = this.accentColor
        })
        this.canvasCircle2Text.addEventListener('mouseout', () => {
            this.handleScroll()
        })

        this.canvasCircle3Text.addEventListener('mouseover', () => {
            this.canvasCircle3Text.style.color = this.accentColor
            this.canvasCircle3.style.backgroundColor = this.accentColor
        })
        this.canvasCircle3Text.addEventListener('mouseout', () => {
            this.handleScroll()
        })

        this.canvasCircle1Text.style.color = this.secondaryColor
        this.canvasCircle2Text.style.color = this.canvasColor
        this.canvasCircle3Text.style.color = this.canvasColor
        this.canvasCircle1.style.backgroundColor = this.secondaryColor
        this.canvasCircle2.style.backgroundColor = this.canvasColor
        this.canvasCircle3.style.backgroundColor = this.canvasColor
        this.canvasPositionLine.style.backgroundColor = this.canvasColor

        //Add event listener to the about container
        this.container.addEventListener('scroll', this.handleScroll)
        setTimeout(this.handleScroll, 500)
        this.canvasPositionLine.style.backgroundColor = '#fff'
    },
    
    unmounted() {
        this.container.removeEventListener('scroll', this.handleScroll)
        this.canvasCircle1Text.removeEventListener('mouseover', () => {
            this.canvasCircle1Text.style.color = this.accentColor
            this.canvasCircle1.style.backgroundColor = this.accentColor
        })
        this.canvasCircle1Text.removeEventListener('mouseout', () => {
            this.handleScroll()
        })
        this.canvasCircle2Text.removeEventListener('mouseover', () => {
            this.canvasCircle2Text.style.color = this.accentColor
            this.canvasCircle2.style.backgroundColor = this.accentColor
        })
        this.canvasCircle2Text.removeEventListener('mouseout', () => {
            this.handleScroll()
        })
        this.canvasCircle3Text.removeEventListener('mouseover', () => {
            this.canvasCircle3Text.style.color = this.accentColor
            this.canvasCircle3.style.backgroundColor = this.accentColor
        })
        this.canvasCircle3Text.removeEventListener('mouseout', () => {
            this.handleScroll()
        })
    },
}
</script>

<template>
    <div class="position-container">
        <div class="canvas">
            <div class="canvas__line"></div>
            <div class="canvas__line__position"></div>
            <div class="canvas__circle"></div>
            <div class="canvas__circle"></div>
            <div class="canvas__circle"></div>
        </div>
        <div class="position-container__text">
            <div class="position-container__text__about-me" @click="scrollTo(1)">{{ about.canvasMe }}</div>
            <div class="position-container__text__work-experience" @click="scrollTo(2)">{{ about.canvasExperience }}</div>
            <div class="position-container__text__education" @click="scrollTo(3)">{{ about.canvasEducation }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.position-container {
    position: absolute;
    width: 6rem;
    box-sizing: border-box;
    bottom: 2.5rem;
    display: grid;
    grid-template-columns: auto 1fr;
    z-index: 3;

    &__text {
        position: absolute;
        height: 100%;
        left: 1rem;
        font-size: 1rem;

        &__about-me, &__work-experience, &__education {
            position: absolute;
            cursor: default;
        }
    }
}

.canvas {
    width: 10px;
    height: 100%;
    position: relative;

    &__line {
        position: absolute;
        top: 0;
        left: 0;
        width: 2px;
        height: 100%;
        background-color: var(--canvas-color);

        &__position {
            position: absolute;
            top: 0;
            left: 0;
            width: 2px;
            background-color: var(--secondary-color);
        }
    }

    &__circle {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: var(--canvas-color);
    }
}
</style>