<script>
import ViewName from '@/components/ViewName.vue'

export default {
    components: {
        ViewName
    }
}
</script>

<template>
    <div>
        <div class="contact-container">
            <div class="contact-container__section">
                <h1>E-MAIL</h1>
                <a href="mailto:tobias.weinlich@mail.de">
                    <h2>tobias.weinlich@mail.de</h2>
                </a>
            </div>

            <div class="contact-container__section">
                <h1>MEDIA</h1>
                <a href="https://github.com/Tobiriz" target="_blank">
                    <h2>GitHub</h2>
                    <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="icon" />
                </a>
                <a href="https://www.linkedin.com/in/tobias-weinlich-34aba0260/" target="_blank">
                    <h2>XING</h2>
                    <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="icon" />
                </a>
                <a href="https://www.xing.com/profile/Tobias_Weinlich/cv" target="_blank">
                    <h2>LinkedIn</h2>
                    <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" class="icon" />
                </a>
            </div>
        </div>
        <ViewName>
            <template #view-name>
                Contact
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
            transition: color .3s ease-in-out;

            &:hover {
                color:  var(--accent-color);
            }
        }

        .icon {
            color: var(--secondary-color-light);
            transition: color .3s ease-in-out;
        }

        a {
            text-decoration: none;
            display: flex;
            flex-direction: row;
            gap: 5px;
            justify-content: center;

            &:hover {
                .icon {
                    color: var(--accent-color);
                }
            }
        }
    }
}
</style>