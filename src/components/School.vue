<script>
export default {
    props: {
        school: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="school">
        <div class="school__title">
            {{ school.title }}
        </div>
        <div class="school__date">
            {{ school.date }}
        </div>
        <div class="school__description">
            {{ school.description }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.school {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    cursor: default;

    &__title {
        font-size: 2rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
    }

    &__date {
        font-size: 1.5rem;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
    }

    &__description {
        font-size: 1.5rem;
        font-weight: 400;
        letter-spacing: 0.1rem;
    }
}
</style>