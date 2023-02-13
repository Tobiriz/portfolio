<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="navigation">
        <div class="navigation__links">
            <RouterLink :to="{ name: 'about' }">About</RouterLink>
            <RouterLink :to="{ name: 'skillset' }">Skillset</RouterLink>
            <RouterLink :to="{ name: 'contact'}">Contact</RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.navigation {
    position: fixed;
    top: calc(2rem + 2px);
    left: calc(2rem + 2px);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #333;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    z-index: 5;
    
        &__title {
            h1 {
                margin: 0;
            }
        }
    
        &__links {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding: 2rem 1rem;

            a {
                color: #fff;
                text-decoration: none;
    
                &:hover {
                    color: #ccc;
                }
            }
        }
}
</style>