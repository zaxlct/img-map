<template>
<div class="box">
    <div class="container" style="position:relative;">
        <img :src="imgUrl" usemap="#imgMap"/>
        <map name="imgMap">
            <area shape="rect" data-id="1" :coords='hotPot' @click="clickCell($event,hotPot)"/>
        </map>
        <div class="area-box" :style="boxStyle"></div>
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
            boxStyle:{}
        })
    },

    mounted(){
        const xLs = this.xL*(this.screenWidth/2342)
        const yLs = this.yL*(this.screenWidth/2342)
        const xRs = this.width*(this.screenWidth/2342)
        const yRs = this.height*(this.screenWidth/2342)
        this.hotPot = `${xLs},${yLs},${xRs},${yRs}`
    },
    methods:{
        clickCell(e,hotPot){
            // console.log(hotPot)
            const [xL,yL,width,height] = hotPot.split(',')
            // console.log(yL)
            this.boxStyle={
                left:`${xL}px`,
                top:`${yL}px`,
                width:`${width-xL}px`,
                height:`${height-yL}px`,
                border:'2px dashed red'
            }
        }
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


