<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="header">
        <div class="header__links">
            <RouterLink :to="{ name: 'about' }">About</RouterLink>
            <RouterLink :to="{ name: 'contact'}">Contact</RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 3rem 1rem 2rem;
    background-color: #333;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    
        &__title {
            h1 {
                margin: 0;
            }
        }
    
        &__links {
            display: flex;
            gap: 3rem;

            a {
                margin-left: 1rem;
                color: #fff;
                text-decoration: none;
    
                &:hover {
                    color: #ccc;
                }
            }
        }
}
</style>