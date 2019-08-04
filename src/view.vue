<template>
  <div id="app">
    <image-map
      :imgUrl="imgUrl"
      :areaList="areaList"
    />
  </div>
</template>

<script>
import ImageMap from './components/Image-map'
import Fetch from './fetch'

export default {
  name: 'container',
  components: {
    ImageMap
  },
  data() {
    return {
      areaList: [],
      imgUrl: '',
    }
  },

  computed: {
    pageId() {
      return this.$route.params.pageId
    }
  },

  async mounted() {
    const data = await Fetch.get(`exerciseProblem/${this.pageId}/squareBoxes`)
    this.areaList = data.areaList
    this.imgUrl = data.imgUrl
  }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
  -webkit-appearance:none;
}
</style>
