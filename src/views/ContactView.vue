<script>
import { useContactStore } from '@/stores/contactStore'

export default {
    setup() {
        const contact = useContactStore()
        return { contact }
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
        const externalLinkHeader = document.getElementsByClassName('external-link__header')
        const cursor = document.getElementById('cursor')

        for (let i = 0; i < externalLinkHeader.length; i++) {
            externalLinkHeader[i].addEventListener('mouseover', () => {
                this.handleMouseOver()
            })

            externalLinkHeader[i].addEventListener('mouseleave', () => {
                this.handleMouseLeave()
            })

            externalLinkHeader[i].addEventListener('click', () => {
                this.handleMouseClick()
            })
        }

        const email = document.getElementById('email')

        email.addEventListener('mouseover', () => {
            this.handleMouseOver()
        })

        email.addEventListener('mouseleave', () => {
            this.handleMouseLeave()
        })

        email.addEventListener('click', () => {
            this.handleMouseClick()
        })
    },

    unmounted() {
        const cursor = document.getElementById('cursor')

        const links = document.getElementsByClassName('navigation__links')[0].children

        for (let i = 0; i < links.length; i++) {
            links[i].removeEventListener('mouseover', () => {
                this.handleMouseOver()
            })

            links[i].removeEventListener('mouseleave', () => {
                this.handleMouseLeave()
            })

            links[i].removeEventListener('click', () => {
                this.handleMouseClick()
            })
        }

        const email = document.getElementById('email')

        email.removeEventListener('mouseover', () => {
            this.handleMouseOver()
        })

        email.removeEventListener('mouseleave', () => {
            this.handleMouseLeave()
        })

        email.removeEventListener('click', () => {
            this.handleMouseClick()
        })
    }
}
</script>

<template>
    <div class="contact-container">
        <div class="contact-container__section">
            <h1>{{ contact.email }}</h1>
            <a href="mailto:tobias.weinlich@mail.de" id="email">
                <h2>{{ contact.emailAddress }}</h2>
            </a>
        </div>

        <div class="contact-container__section">
            <h1>{{ contact.media }}</h1>
            <a href="https://github.com/Tobiriz" target="_blank">
                <h2 class="external-link__header">GitHub</h2>
            </a>
            <a href="https://www.linkedin.com/in/tobias-weinlich-34aba0260/" target="_blank">
                <h2 class="external-link__header">XING</h2>
            </a>
            <a href="https://www.xing.com/profile/Tobias_Weinlich/cv" target="_blank">
                <h2 class="external-link__header">LinkedIn</h2>
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.contact-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6rem;
    padding: 0 2rem 2rem 0;
    color: var(--secondary-color);

    &__section {
        text-align: center;
        width: fit-content;

        h1 {
            text-decoration: underline;
            padding-bottom: 1rem;
        }

        h2 {
            padding-bottom: .5rem;
            color: var(--secondary-color-light);

            &:hover {
                color:  var(--accent-color);
            }
        }

        a {
            text-decoration: none;
            display: flex;
            flex-direction: row;
            gap: 5px;
            justify-content: center;

            &:hover {
                .external-link__icon {
                    opacity: 1;
                }
            }
        }
    }
}

//screen width < 768px
@media screen and (max-height: 600px), screen and (max-width: 768px) {
    .contact-container {
        padding: 0;
        height: 100dvh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 4vw;
    }
}

@media screen and (max-height: 600px) {
    .contact-container {
        padding: 0;
        height: 100dvh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 3vh;
        gap: 2rem;
    }
}
</style>