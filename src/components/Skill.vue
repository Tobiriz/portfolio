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
        <div class="skill__title" :class="{ isActive : isActive }" @click="$emit('toggle')">
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
    color: rgba($color: #fff, $alpha: .5);
    cursor: default;
    
    &__title {
        h3 {
            font-size: 5rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1rem;
            transition: color .3s ease-in-out;
        }

        &:hover {
            color: #40826d;
        }
    }

    &__content {
        text-align: end;
        p {
            font-size: 1.5rem;
            font-weight: 400;
        }
    }
}

.isActive {
    color: #40826d;
}
</style>