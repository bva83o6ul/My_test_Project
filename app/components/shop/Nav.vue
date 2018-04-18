<template>
  <div>
    <Carousel autoplay v-model="value2" loop >
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
    </Carousel>
  </div>
</template>
<script>
    export default {
        data(){
            return{
                 value2: 0
            }
        }
    }
</script>
<style scoped>
    .demo-carousel{
        text-align: center;
        font-size:100px;
        line-height: 450px;
        width: 100%;
        height: 450px;
        background:lightblue;
    }
</style>
