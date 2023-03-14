<script>
import { RouterLink } from 'vue-router'
import Settings from '@/components/Settings.vue'
import { useLandingPageStore } from '@/stores/landingPageStore'

export default {
    components: {
        RouterLink,
        Settings
    },

    setup() {
        const landingPage = useLandingPageStore()
        return { landingPage }
    },

    data() {
        return {
            firstName: null,
            lastName: null,
            firstNameText: null,
            lastNameText: null,
            letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            interval: null,
            endEffect: false
        }
    },

    mounted() {
        const link = document.getElementById('routerLink')

        this.firstName = document.getElementById('first-name')
        this.lastName = document.getElementById('last-name')

        this.firstNameText = document.getElementById('first-name').innerText.split('')
        this.lastNameText = document.getElementById('last-name').innerText.split('')

        link.addEventListener('mouseenter', () => {
            if (!this.endEffect) {
                this.startHackerEffect()
                this.handleMouseOver()
            }
        })

        link.addEventListener('mouseleave', () => {
            if (!this.endEffect) {
                this.stopHackerEffect()
                this.handleMouseLeave()
            }
        })

        link.addEventListener('click', () => {
            this.endHackerEffect()
            this.handleMouseClick()
        })
    },

    unmounted() {
        const link = document.getElementById('routerLink')

        link.removeEventListener('mouseenter', () => {
            if (!this.endEffect) {
                this.startHackerEffect()
                this.handleMouseOver()
            }
        })

        link.removeEventListener('mouseleave', () => {
            if (!this.endEffect) {
                this.stopHackerEffect()
                this.handleMouseLeave()
            }
        })

        link.removeEventListener('click', () => {
            this.endHackerEffect()
            this.handleMouseClick()
        })

        this.handleMouseLeave()
    },

    methods: {
        startHackerEffect() {
            this.interval = setInterval(() => {
                this.firstName.innerText = this.firstName.innerText.split('')
                    .map(letter => this.letters[Math.floor(Math.random() * this.letters.length)])
                    .join('')

                this.lastName.innerText = this.lastName.innerText.split('')
                    .map(letter => this.letters[Math.floor(Math.random() * this.letters.length)])
                    .join('')
            }, 20)
        },

        stopHackerEffect() {
            clearInterval(this.interval)
        },

        endHackerEffect() {
            if (this.endEffect) {
                this.$router.push('/portfolio')
            }

            this.stopHackerEffect()
            this.endEffect = true

            const nameLength = this.firstNameText.length + this.lastNameText.length
            let iterations = 0
            let count = 0

            console.log("endHackerEffect")

            this.interval = setInterval(() => {
                this.firstName.innerText = this.firstName.innerText.split('')
                    .map((letter, index) => {
                        if (index < iterations) {
                            return this.firstNameText[index]
                        }
                        return this.letters[Math.floor(Math.random() * this.letters.length)]
                    })
                    .join('')

                if (iterations >= this.firstNameText.length) {
                    this.lastName.innerText = this.lastName.innerText.split('')
                        .map((letter, index) => {
                            if (index < iterations - this.firstNameText.length) {
                                return this.lastNameText[index]
                            }
                            return this.letters[Math.floor(Math.random() * this.letters.length)]
                        })
                        .join('')
                } else {
                    this.lastName.innerText = this.lastName.innerText.split('')
                        .map(letter => this.letters[Math.floor(Math.random() * this.letters.length)])
                        .join('')
                }

                if (iterations >= nameLength) {
                    clearInterval(this.interval)
                    setTimeout(() => {
                        this.$router.push('/portfolio')
                    }, 500)
                }

                count++
                if (count === 10) {
                    count = 0
                    iterations++
                }
            }, 10)

            const occupation = document.getElementsByClassName('title-card__content__occupation')[0]
        },

        handleMouseOver() {
            const cursor = document.getElementById('cursor')
            cursor.classList.add('cursor--active')
        },

        handleMouseLeave() {
            const cursor = document.getElementById('cursor')
            cursor.classList.remove('cursor--active')
        },

        handleMouseClick() {
            const cursor = document.getElementById('cursor')
            cursor.classList.add('cursor--click')
            setTimeout(() => {
                cursor.classList.remove('cursor--click')
            }, 300)
        },
    }
}
</script>

<template>
    <div class="body">
        <Settings class="landing-page-settings"></Settings>
        <div id="routerLink">
            <div
            class="title-card"
            @mouseenter="showChevron"
            @mouseleave="hideChevron"
            >
            
                <div class="title-card__content">
                    <div class="title-card__content__name">
                        <h1>
                            <span id="first-name">Tobias</span>
                            <span>&nbsp;</span>
                            <span id="last-name">Weinlich</span>
                        </h1>
                    </div>
                    
                    <div class="title-card__content__occupation">
                        <h2 id="title-card-occupation">{{ landingPage.occupation }}</h2>
                    </div>
                </div>
                
                <font-awesome-icon
                    icon="fa-solid fa-chevron-right"
                    size="10x"
                    class="title-card__chevron"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Martian+Mono&display=swap');

#first-name,
#last-name {
    font-family: 'Martian Mono', monospace;
}

.body {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 3;
}

.landing-page-settings {
    font-size: 1.2rem;
    z-index: 4;
}

.title-card {
    box-sizing: border-box;
    width: 100vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: var(--title-card-color);
    color: var(--secondary-color);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    position: relative;
    z-index: 3;

    &__content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 1rem;
        box-sizing: border-box;
        z-index: 4;
        
        &__name {
            h1 {
                font-size: 5vw;
            }
        }
        
        &__occupation {
            h2 {
                font-size: 2vw;
            }
        }
    }
    
    &__chevron {
        position: absolute;
        left: 0;
        font-size: 4vw;
        color: var(--secondary-color);
        opacity: 0;
        transition: opacity 0.4s ease, left 0.8s ease;
    }

    &:hover &__chevron {
        opacity: 1;
        left: calc(100% - 5rem);
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        transition: width 0.8s ease;
        background: linear-gradient(
            to right,
            transparent,
            var(--accent-color)
        );
    }

    &:hover:before {
        width: 100%;
    }
}

a {
    text-decoration: none;
    color: var(--secondary-color);
}

//screen size < 768px
@media only screen and (max-width: 768px) {
    .title-card {
        &__content {
            &__name {
                h1 {
                    font-size: 7vw;
                }
            }
            
            &__occupation {
                h2 {
                    font-size: 4vw;
                }
            }
        }
    }
}

//screen height < 600px
@media only screen and (max-height: 600px) {
    .title-card {
        &__content {
            &__name {
                h1 {
                    font-size: 8vh;
                }
            }
            
            &__occupation {
                h2 {
                    font-size: 4vh;
                }
            }
        }
    }
}
</style>