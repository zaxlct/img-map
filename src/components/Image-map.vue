<template>
  <div class="box">
    <div class="container" style="position:relative;">
      <img :src="imgUrl" />

      <a
        v-for="area in position"
        :key="area.id"
        :href="`JavaScript:android.returnAndroid(${area.id})`"
        @click="clickCell(area.id)"
        class="area-box"
        :class="{border: currentAreaId === area.id}"
        :style="{
                left: (area.x*(screenWidth/600) || 200) + 'px',
                top: (area.y*(screenWidth/600) || 200) + 'px',
                width: area.width*(screenWidth/600) + 'px',
                height: area.height*(screenWidth/600)  + 'px',
            }"
      ></a>
    </div>
  </div>
</template>

<script>
// const testPosition = [
//   {
//     height: 129,
//     id: "Bq_hJMrJ0",
//     width: 188.01171875,
//     x: 166.34375,
//     y: 103,
//   },
//   {
//     height: 196,
//     id: "ybiWcbwel",
//     width: 129.9375,
//     x: 206.34375,
//     y: 76.90625,
//   }
// ]

export default {
    props: {
        imgUrl: String,
        areaList: Array,
    },

    data(){
        return({
            screenWidth: document.body.clientWidth,
            hotPot:'',
            List:[],
            currentAreaId: '',
        })
    },
    computed:{
        position(){
            return this.areaList.map(item=> item.position)
        }
    },

    methods:{
        clickCell(id){
            this.currentAreaId = id
        },
    }
}
</script>

<style>
.container {
  width: 100%;
  height: 100%;
}

.container img {
  width: 100%;
  height: auto;
}

.area-box {
  position: absolute;
}

.border {
  border: 2px dashed red;
}
</style>

