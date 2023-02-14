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
        <div class="school__date">
            {{ school.date }}
        </div>
        <div class="school__title">
            {{ school.title }}
        </div>
        <div class="school__school">
            {{ school.school }}
        </div>
        <div class="school__location">
            {{ school.location }}
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
    padding-bottom: 2rem;
    
    &__date {
        font-size: 1.5rem;
        font-weight: 400;
        letter-spacing: 0.1rem;
    }

    &__title {
        font-size: 2.5rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        color: #40826d;
        padding: .5rem 0;
        width: 50%;
    }
    
    &__school {
        font-size: 1.5rem;
        font-weight: 400;
        letter-spacing: 0.1rem;
    }

    &__location {
        font-size: 1.2rem;
        font-weight: 400;
        letter-spacing: 0.1rem;
        padding-bottom: 1rem;
    }
}
</style>