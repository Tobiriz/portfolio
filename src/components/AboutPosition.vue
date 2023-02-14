<script>
export default {
    data() {
        return {
            distance: null,
            position: null,
            percentagePosition: null,
            difference: 66,
            circle2: null,
            circle3: null,
        }
    },
    methods: {
        handleScroll() {
            const aboutMeTop = document.getElementsByClassName('about-container__about-me')[0].getBoundingClientRect().top

            this.position = Math.abs(aboutMeTop - this.difference)
            this.percentagePosition = Math.round((this.position / this.distance) * 100)
            
            //Get the line
            const canvasLine = document.getElementsByClassName('canvas__line')[0]
            const canvasLineHeight = canvasLine.getBoundingClientRect().height
            const canvasLinePercentage = canvasLineHeight / 100

            //Get the "line position"
            const canvasLinePosition = document.getElementsByClassName('canvas__line__position')[0]

            //Get the text of the circles
            const canvasCircle1Text = document.getElementsByClassName('position-container__text__about-me')[0]
            const canvasCircle2Text = document.getElementsByClassName('position-container__text__work-experience')[0]
            const canvasCircle3Text = document.getElementsByClassName('position-container__text__education')[0]
            
            //Get the circles
            const canvasCircles = document.getElementsByClassName('canvas__circle')
            const canvasCircle1 = canvasCircles[0]
            const canvasCircle2 = canvasCircles[1]
            const canvasCircle3 = canvasCircles[2]

            //Set the height of the line position
            const canvasLinePositionHeight = Math.round(canvasLinePercentage * this.percentagePosition)
            canvasLinePosition.style.height = canvasLinePositionHeight + 'px'

            if (canvasLinePositionHeight >= 0) {
                canvasCircle1.style.backgroundColor = '#fff'
            } else {
                canvasCircle1.style.backgroundColor = '#888'
            }

            if (canvasLinePositionHeight >= 0 && canvasLinePositionHeight <= this.circle2) {
                canvasCircle1Text.style.color = '#fff'
            } else {
                canvasCircle1Text.style.color = '#888'
            }

            if (canvasLinePositionHeight >= this.circle2) {
                canvasCircle2.style.backgroundColor = '#fff'
            } else {
                canvasCircle2.style.backgroundColor = '#888'
            }

            if (canvasLinePositionHeight >= this.circle2 && canvasLinePositionHeight <= this.circle3) {
                canvasCircle2Text.style.color = '#fff'
            } else {
                canvasCircle2Text.style.color = '#888'
            }

            if (canvasLinePositionHeight >= this.circle3) {
                canvasCircle3Text.style.color = '#fff'
                canvasCircle3.style.backgroundColor = '#fff'
            } else {
                canvasCircle3Text.style.color = '#888'
                canvasCircle3.style.backgroundColor = '#888'
            }
        },
        scrollTo(index) {
            const aboutContainer = document.getElementsByClassName('about-container')[0]
            const aboutMeTop = document.getElementsByClassName('about-container__about-me')[0].getBoundingClientRect().top
            const myWorkExperienceTop = document.getElementsByClassName('about-container__my-work-experience')[0].getBoundingClientRect().top
            const myEducationTop = document.getElementsByClassName('about-container__my-education')[0].getBoundingClientRect().top

            if (index === 1) {
                aboutContainer.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            } else if (index === 2) {
                aboutContainer.scrollTo({
                    top: myWorkExperienceTop - aboutMeTop - 100,
                    behavior: 'smooth'
                })
            } else if (index === 3) {
                aboutContainer.scrollTo({
                    top: myEducationTop - aboutMeTop - 100,
                    behavior: 'smooth'
                })
            }
        }
    },
    mounted () {
        //Get boundries
        const aboutContainer = document.getElementsByClassName('about-container')[0]
        const aboutContainerTop = aboutContainer.getBoundingClientRect().top
        const aboutContainerBottom = aboutContainer.getBoundingClientRect().bottom
        const aboutMeTop = document.getElementsByClassName('about-container__about-me')[0].getBoundingClientRect().top
        const myWorkExperienceTop = document.getElementsByClassName('about-container__my-work-experience')[0].getBoundingClientRect().top
        const myEducationTop = document.getElementsByClassName('about-container__my-education')[0].getBoundingClientRect().top
        const myEducationBottom = document.getElementsByClassName('about-container__my-education')[0].getBoundingClientRect().bottom
    
        //Get the right position of the view name
        const aboutViewName = document.getElementsByClassName('view-name')[0]
        const aboutViewNameRight = aboutViewName.getBoundingClientRect().right
        const aboutViewNameBottom = aboutViewName.getBoundingClientRect().bottom
        
        //Set the position of the position container
        const aboutPosition = document.getElementsByClassName('position-container')[0]
        aboutPosition.style.left = aboutViewNameRight + 'px'
    
        //Set the height of the position container to the height of the aboutViewName
        const aboutViewNameHeight = aboutViewName.getBoundingClientRect().height
        aboutPosition.style.height = aboutViewNameHeight + 'px'
    
        //Get canvas line height and width
        const canvasLine = document.getElementsByClassName('canvas__line')[0]
        const canvasLineHeight = canvasLine.getBoundingClientRect().height
        const canvasLineWidth = canvasLine.getBoundingClientRect().width
        
        const canvasLinePercentage = canvasLineHeight / 100
        
        //Get canvas line position
        const canvasLinePosition = document.getElementsByClassName('canvas__line__position')[0]
        
        //Set the height of the line position to zero
        canvasLinePosition.style.height = 0
        
        //Get canvas circles
        const canvasCircles = document.getElementsByClassName('canvas__circle')
        const canvasCircle1 = canvasCircles[0]
        const canvasCircle2 = canvasCircles[1]
        const canvasCircle3 = canvasCircles[2]
    
        //Get width and height of circles
        const canvasCircleWidth = canvasCircle1.getBoundingClientRect().width
        const canvasCircleHeight = canvasCircle1.getBoundingClientRect().height
        
        //Position the first circle on the line
        canvasCircle1.style.top = (- canvasCircleHeight / 2) + 'px'
        canvasCircle1.style.left = (- canvasCircleWidth / 2) + (canvasLineWidth / 2) + 'px'
        
        //Calculate the height of the container
        const height = myEducationBottom - aboutMeTop
        
        //Calculate the positions of the container
        const workExperiencePosition = Math.round(((myWorkExperienceTop - aboutMeTop) / height) * 100)
        const educationPosition = Math.round(((myEducationTop - aboutMeTop) / height) * 100)
        
        //Calculate the position of the circles on the line
        const circle2Position = workExperiencePosition * canvasLinePercentage
        const circle3Position = educationPosition * canvasLinePercentage
        
        //Position the second circle on the line
        canvasCircle2.style.top = (circle2Position - (canvasCircleHeight / 2)) + 'px'
        canvasCircle2.style.left = (- canvasCircleWidth / 2) + (canvasLineWidth / 2) + 'px'
        
        //Position the third circle on the line
        canvasCircle3.style.top = (circle3Position - (canvasCircleHeight / 2)) + 'px'
        canvasCircle3.style.left = (- canvasCircleWidth / 2) + (canvasLineWidth / 2) + 'px'
        
        //Get the text of the circles
        const canvasCircle1Text = document.getElementsByClassName('position-container__text__about-me')[0]
        const canvasCircle2Text = document.getElementsByClassName('position-container__text__work-experience')[0]
        const canvasCircle3Text = document.getElementsByClassName('position-container__text__education')[0]
    
        //Set the position of the text of the circles to zero
        canvasCircle1Text.style.top = 0
        canvasCircle2Text.style.top = 0
        canvasCircle3Text.style.top = 0
    
        //Calculate the middle of the text
        const canvasCircle1TextMiddle = canvasCircle1Text.getBoundingClientRect().top
        const canvasCircle2TextMiddle = canvasCircle2Text.getBoundingClientRect().top
        const canvasCircle3TextMiddle = canvasCircle3Text.getBoundingClientRect().top
    
        //Calculate the middle of the circles on the line
        const canvasCircle1Middle = canvasCircle1.getBoundingClientRect().top
            - canvasCircle1.getBoundingClientRect().height / 2
        const canvasCircle2Middle = canvasCircle2.getBoundingClientRect().top
            - canvasCircle2.getBoundingClientRect().height / 2
        const canvasCircle3Middle = canvasCircle3.getBoundingClientRect().top
            - canvasCircle3.getBoundingClientRect().height / 2
    
        //Calculate the difference between the middle of the text and the middle of the circle
        const canvasCircle1Difference = canvasCircle1Middle - canvasCircle1TextMiddle
        const canvasCircle2Difference = canvasCircle2Middle - canvasCircle2TextMiddle
        const canvasCircle3Difference = canvasCircle3Middle - canvasCircle3TextMiddle
    
        //Position the Text to the middle of the circle
        canvasCircle1Text.style.top = canvasCircle1Difference + 'px'
        canvasCircle2Text.style.top = canvasCircle2Difference + 'px'
        canvasCircle3Text.style.top = canvasCircle3Difference + 'px'
        
        //Set the data
        this.distance = (myEducationBottom - aboutMeTop) - (aboutContainerBottom - aboutContainerTop) + this.difference
        this.circle2 = circle2Position
        this.circle3 = circle3Position
        
        //Add event listener to the about container
        aboutContainer.addEventListener('scroll', this.handleScroll)
        setInterval(this.handleScroll, 10)
    },
    
    unmounted() {
        const aboutContainer = document.getElementsByClassName('about-container')[0]
        aboutContainer.removeEventListener('scroll', this.handleScroll)
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
            <div class="position-container__text__about-me" @click="scrollTo(1)">Me</div>
            <div class="position-container__text__work-experience" @click="scrollTo(2)">Experience</div>
            <div class="position-container__text__education" @click="scrollTo(3)">Education</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.position-container {
    position: absolute;
    width: 10rem;
    box-sizing: border-box;
    bottom: 2.5rem;
    display: grid;
    grid-template-columns: auto 1fr;

    &__text {
        position: absolute;
        height: 100%;
        left: 1rem;
        color: #fff;
        font-size: 1rem;

        &__about-me, &__work-experience, &__education {
            position: absolute;
            cursor: pointer;
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
        background-color: #888;

        &__position {
            position: absolute;
            top: 0;
            left: 0;
            width: 2px;
            background-color: #fff;
        }
    }

    &__circle {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #888;
    }
}
</style>