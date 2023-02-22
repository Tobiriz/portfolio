<script>
import ViewName from '@/components/ViewName.vue'
import { useContactStore } from '@/stores/contactStore'

export default {
    components: {
        ViewName
    },

    setup() {
        const contact = useContactStore()
        return { contact }
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
    }
}
</script>

<template>
    <div>
        <div class="contact-container">
            <div class="contact-container__section">
                <h1>{{ contact.email }}</h1>
                <a href="mailto:tobias.weinlich@mail.de">
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
        <ViewName>
            <template #view-name>
                {{ contact.viewName }}
            </template>
        </ViewName>
    </div>
</template>

<style lang="scss" scoped>
.contact-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    gap: 6rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    box-sizing: border-box;
    overflow-y: auto;
    color: var(--secondary-color);

    &__section {
        text-align: center;

        h1 {
            text-decoration: underline;
            padding-bottom: 1rem;
            cursor: default;
        }

        h2 {
            padding-bottom: .5rem;
            cursor: pointer;
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