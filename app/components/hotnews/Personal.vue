<template>
    <div>
        <div id="bigBox">
            <p class="head"><img src=""></p>
            <p>name</p>
            <p>
                <span><i>关注</i><i>1234</i></span>丨
                <span><i>粉丝</i><i>1234</i></span>丨
                <span><i>访问量</i><i>1234</i></span>
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>
<style scoped>
    p{
        margin:5px auto;
        text-align: center;        
    }
    #bigBox{
        margin:0 auto;
        width: 300px;
        background:#fff;
        border-radius:5px;
        border: 1px solid rgb(221, 222, 225);
        
            }
    .head{
        width: 70px;
        height: 70px;
        border-radius:50%;
        border: 1px solid rgb(221, 222, 225);
    }
</style>
