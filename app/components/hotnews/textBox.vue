<template>
<div >
    <div class="bigBox">
        <p>随便写点什么呗!</p>
        <Input v-model="textMore.value" type="textarea" :rows="4" ></Input>
        <div style="padding:5px 0px;">
            <Button  style="float:left;">
                表情
                <Icon type="social-octocat"></Icon>
            </Button>

            <Upload multiple action="//jsonplaceholder.typicode.com/posts/" style="height:32px; float:left;">
                <Button  icon="ios-analytics">图片</Button>
            </Upload>

            <Upload action="//jsonplaceholder.typicode.com/posts/" style="height:32px; float:left;">
                <Button  icon="ios-videocam-outline">视频</Button>
            </Upload>

            <Button
                 type="success" 
                 style="float:right; width:100px; margin-right:0px;" 
                 @click="RELEASE(textMore)"
                 
            >发布</Button>

            <Button type="error" style="float:right; width:100px; ">清空</Button>

        </div>
    </div>
  </div>
</template>
<script>
    export default {
        data(){
            return{
                textMore:{
                    "id": "0001",
                    "Head": "<Avatar icon='person' size='large' />",
                    "name": "ME",
                    "value":"",
                    "like": 0,
                    "Collection":0,
                    "discuss": 0,
                    "Forward": 0,
                },
                
            }
        },
        methods:{
            RELEASE(payload){
                var Year = new Date().getFullYear();
                var Month = new Date().getMonth()+1;
                var Day = new Date().getDate();
                var Time = Year+"-"+Month+"-"+ Day;
                this.textMore.Time=Time;
                this.$store.commit("release",payload);
            }
        },
        computed:{

        }
        
    }
    
</script>

<style scoped>
    .bigBox{
        background:#fff;
        border: 1px solid #dddee1;
        overflow: hidden;
        padding:10px 5px ;
        border-radius: 5px;
    }
    button{
        margin-right:5px;
    }
</style>
