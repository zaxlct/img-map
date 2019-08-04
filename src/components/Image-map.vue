<template>
<div class="box">
    <div class="container" style="position:relative;">
        <img :src="imgUrl"/>
        <!-- <map name="imgMap">
            <area v-for="area in areaList" :key="area.id" shape="rect" :coords='hotPot' :href="`JavaScript:android.returnAndroid(${area.toughtId})`" @click="clickCell($event,hotPot)"/>
        </map> -->
        <div
             v-for="area in position"
             :key="position.id"
             :href="`JavaScript:android.returnAndroid()`"
             @click="clickCell($event)"
             class="area-box"
             :class="border"
             :style="{
                 left:area.x*(screenWidth/600)||200,
                 top:area.y*(screenWidth/600)||200,
                 width:area.width*(screenWidth/600),
                 height:area.height*(screenWidth/600)
             }"></div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        imgUrl: String,
        areaList: Array,
    },


    data(){
        return({
            xL:37,
            yL:2,
            width:1174,
            height:94,
            screenWidth: document.body.clientWidth,
            hotPot:'',
            List:[]
        })
    },
    computed:{
        position(){
            return this.areaList.map(item=>item.position)
        }
    },
    mounted(){
        console.log(this.position)
    },
    methods:{
        clickCell(e,hotPot){


        },
    }
}
</script>

<style>
.container{
    width: 100%;
    height: 100%;
}

.container img{
    width: 100%;
    height: auto;
}

.area-box{
    position: absolute;
}
</style>


