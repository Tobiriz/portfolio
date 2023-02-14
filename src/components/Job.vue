<script>
export default {
    props: {
        job: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="job">
        <div class="job__title">
            {{ job.title }}
        </div>
        <div class="job__company">
            {{ job.company }}
        </div>
        <div class="job__date">
            {{ job.date }}
        </div>
        <div class="job__description">
            {{ job.description }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.job {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    color: #fff;
    cursor: default;

    &__title {
        font-size: 2rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
    }

    &__company {
        font-size: 1.5rem;
        font-weight: 400;
        letter-spacing: 0.1rem;
    }

    &__date {
        font-size: 1.5rem;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
    }

    &__description {
        text-align: end;
        font-size: 1.5rem;
        font-weight: 400;
    }
}
</style>