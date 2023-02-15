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
        <div class="school__duration">
            {{ school.duration }}
        </div>
        <div class="school__date">
            {{ school.date }}
        </div>
        <div class="school__title">
            {{ school.title }}
        </div>
        <div class="school__description">
            <div><div class="line"></div></div>
            <div>
                <div class="school__school">
                    {{ school.school }}
                </div>
                <div class="school__location">
                    {{ school.location }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.school {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color:  var(--secondary-color);
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
        color:  var(--accent-color);
        padding: .5rem 0;
        width: 50%;
        white-space: pre;
    }

    &__description {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 1rem;
    }
    
    &__school {
        font-size: 1.5rem;
        font-weight: 400;
        letter-spacing: 0.1rem;
        white-space: pre;
    }
    
    &__location {
        font-size: 1.2rem;
        font-weight: 400;
        letter-spacing: 0.1rem;
        white-space: pre;
    }
}

.line {
    width: 2px;
    height: 100%;
    background-color:  var(--accent-color);
    margin-left: 1rem;
}
</style>