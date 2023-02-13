<script>
</script>

<template>
    <div class="body">
        <div class="about">
            <h1>Tobias Weinlich</h1>
            <h3>Frontend Developer</h3>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    background-color: #191919;
    overflow-x: hidden;

    h1, h2, h3,
    h4, h5, p {
        color: #fff;
    }

    .about {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        align-self: flex-end;
        gap: 1rem;
        padding: 2rem;

        h1 {
            font-size: 3rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1rem;
        }

        h3 {
            font-size: 1.5rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1rem;
        }
    }
}
</style>