<template>
<header class="header">
  <h1 class="main-header">Home</h1>
  <ul class="header-subnav">
    <li><a href="#">Home</a></li>
    <li><a href="#" >Registration</a></li>
    <li><a target="_blank" href="/login">Login!</a></li>
  </ul>
</header>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'USING SINGLE FILE COMPONENTS'
    }
  }
}

</style>
