<template>
    <ul>
        <li v-for="a in ajax" v-bind:key="a.name">
            {{ a.name }}
        </li>
    </ul>
</template>

<script>
    export default {
        props: ["ajax"]
    }
</script>

<style scoped>

</style>