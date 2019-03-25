<template>
  <div class="home">
    <div class="box"></div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  mounted () {
    this.tcall()
  },
  methods: {
    tcall () {
    }
  }
}
</script>

<style lang = 'scss'>
.home {
  width: 1200px;
  margin: 0 auto;
}
.box{
  height:200px;
  width:200px;
  background-color: #000;
}
</style>
