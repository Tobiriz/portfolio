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
}
</script>

<template>
    <div class="skill">
        <div class="skill__title" @click="$emit('toggle')">
            <h3>{{ title }}</h3>
        </div>

        <div class="skill__content" v-show="isActive">
            <p>{{ content }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.skill {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    color: #fff;
    cursor: default;
    
    &__title {
        h3 {
            font-size: 3rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1rem;
        }

        &:hover {
            color: #ccc;
        }
    }

    &__content {
        p {
            font-size: 1.5rem;
            font-weight: 400;
        }
    }
}
</style>