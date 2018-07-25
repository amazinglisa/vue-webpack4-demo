<template>
    <section class="main">
        <p>我来了 {{name}}</p>
    </section>
</template>

<script>
    export default {
        data () {
            return {
                name: 'vue + webpack'
            }
        }
    }
</script>

<style scoped>
  section {
    p {
      color: red;
    }
  }
</style>
