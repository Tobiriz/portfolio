<script>
import ViewName from '@/components/ViewName.vue'

export default {
    components: {
        ViewName
    }
}
</script>

<template>
    <div>
        <div>
            Tobias Weinlich
        </div>
        <ViewName>
            <template #view-name>
                Contact
            </template>
        </ViewName>
    </div>
</template>

<style lang="scss" scoped>

</style>