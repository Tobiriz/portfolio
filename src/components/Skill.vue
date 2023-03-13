<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Skill Title'
        },
        content: {
            type: String,
            default: 'Skill Content'
        },
        isActive: {
            type: Boolean,
            default: false
        }
    },

    methods: {
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
    },

    mounted() {
        const titles = document.getElementsByClassName('skill__title')

        for (let title of titles) {
            title.addEventListener('mouseover', () => {
                this.handleMouseOver()
            })
    
            title.addEventListener('mouseleave', () => {
                this.handleMouseLeave()
            })

            title.addEventListener('click', () => {
                this.handleMouseClick()
            })
        }
    },
    
    unmounted() {
        const titles = document.getElementsByClassName('skill__title')

        for (let title of titles) {
            title.removeEventListener('mouseover', () => {
                this.handleMouseOver()
            })
    
            title.removeEventListener('mouseleave', () => {
                this.handleMouseLeave()
            })

            title.removeEventListener('click', () => {
                this.handleMouseClick()
            })
        }
    }
}
</script>

<template>
    <div class="skill">
        <div class="skill__title" :class="{ isActive : isActive }" @click="$emit('toggle')">
            <h3>{{ title }}</h3>
        </div>

        <Transition>
        <div class="skill__content" v-show="isActive">
                <p>{{ content }}</p>
            </div>
        </Transition>
    </div>
</template>

<style lang="scss" scoped>
.skill {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    color:  var(--secondary-color-light);
    width: 100%;
    
    &__title {

        h3 {
            font-size: 5vw;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1rem;
        }

        &:hover {
            color:  var(--accent-color);
        }
    }

    &__content {
        text-align: end;
        color: var(--secondary-color);
        max-width: 80%;

        p {
            font-size: 1.8vw;
            font-weight: 400;
        }
    }
}

.isActive {
    color:  var(--secondary-color);
}

.v-enter-active, .v-leave-active {
    transition: all 0.5s;
}

.v-enter-from, .v-leave-to {
    opacity: 0;
    transform: translateX(100%);
}

.v-enter-to, .v-leave-from {
    opacity: 1;
    transform: translateX(0%);
}
</style>