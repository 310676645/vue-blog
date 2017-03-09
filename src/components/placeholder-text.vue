<template>
  <div class="md-placeholder-text" :style="{'text-align': align}">
      {{text}}
  </div>
</template>
<style lang="scss" rel="stylesheet/scss" type="text/css" scoped>
  @import "./../assets/sass/modules/var";
  .#{$baseName}-placeholder-text{
    padding: 10px;
    color: $text-gray-color;
  }
</style>
<script type="text/ecmascript-6">
  export default{
    props: {
      text: {
        type: String,
        required: true
      },
      align: {
        type: String,
        default: 'center'
      }
    }
  }
</script>
