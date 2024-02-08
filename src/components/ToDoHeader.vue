<template>
    <header>
        <h1>{{ $store.state.headerText }}</h1>
    </header>
</template>

<script>
    export default {
        data () {
            return {
                message : "TO DO"
            }
        }
        
    }
</script>

<!-- scoped 속성은 해당 컴포넌트 안에서만 유효한 스타일임을 나타내는 속성이다. -->
<style scoped>
    h1 {
        color: orange;
        font-weight: 900;
        margin: 2.5rem;
    }
</style>