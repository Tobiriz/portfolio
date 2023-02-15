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
        <div class="job__duration">
            {{ job.duration }}
        </div>
        <div class="job__date">
            {{ job.date }}
        </div>
        <div class="job__title">
            {{ job.title }}
        </div>
        
        <div class="job__description">
            <div>
                <div class="job__company">
                    {{ job.company }}
                </div>
                <div class="job__location">
                    {{ job.location }}
                </div>
                <div class="job__description">
                    {{ job.description }}
                </div>
            </div>
            <div><div class="line"></div></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.job {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: nowrap;
    color: var(--secondary-color);
    cursor: default;
    padding-bottom: 3rem;

    &__duration {
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 0.1rem;
        white-space: pre;
    }
    
    &__date {
        font-size: 1.5rem;
        font-weight: 400;
        letter-spacing: 0.1rem;
        white-space: pre;
    }

    &__title {
        font-size: 2.5rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        color: var(--accent-color);
        padding: .5rem 0;
        white-space: pre;
    }

    &__description {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    &__company {
        font-size: 1.5rem;
        font-weight: 400;
        letter-spacing: 0.1rem;
        white-space: pre;
    }

    &__location {
        font-size: 1.2rem;
        font-weight: 400;
        letter-spacing: 0.1rem;
        padding-bottom: 1rem;
        white-space: pre;
    }

    &__description {
        text-align: end;
        font-size: 1.2rem;
        font-weight: 400;
        white-space: pre;
    }
}

.line {
    width: 2px;
    height: 100%;
    background-color: var(--accent-color);
    margin-right: 1rem;
}
</style>