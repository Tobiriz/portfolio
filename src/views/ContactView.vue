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
        const externalLinkIcon = document.getElementsByClassName('external-link__icon')

        for (let i = 0; i < externalLinkHeader.length; i++) {
            const header = externalLinkHeader[i]
            const icon = externalLinkIcon[i]

            const headerRight = header.getBoundingClientRect().right

            icon.style.left = `${headerRight - 15}px`
        }

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
                <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="external-link__icon" />
            </a>
            <a href="https://www.linkedin.com/in/tobias-weinlich-34aba0260/" target="_blank">
                <h2 class="external-link__header">XING</h2>
                <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="external-link__icon" />
            </a>
            <a href="https://www.xing.com/profile/Tobias_Weinlich/cv" target="_blank">
                <h2 class="external-link__header">LinkedIn</h2>
                <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="external-link__icon" />
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

        .external-link__icon {
            position: absolute;
            color: var(--secondary-color-light);
            opacity: 0;
            transition: opacity 0.2s ease-in-out;
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
</style>