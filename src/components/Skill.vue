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
    cursor: default;
    
    &__title {
        h3 {
            font-size: 5rem;
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

        p {
            font-size: 1.5rem;
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