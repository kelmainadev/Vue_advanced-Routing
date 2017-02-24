<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Testing Lists Building</h2>
    <ul> 
      <li>This is number 1</li>
      <li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'USING SINGLE FILE COMPONENTS'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
