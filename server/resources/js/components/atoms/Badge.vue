<template>
    <span>{{ displayText }}</span>
</template>

<script>
    export default {
        props: ['displayText'],
        mounted() {
            console.log(`mounted ::: ${this.$options._componentTag}`)
        }
    }
</script>
