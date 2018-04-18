<template>
    <div>
       <div class="entryBigBox">    
           <h1>ENTRY</h1>        
            <div class="entryBox">
                <p>帐号：<input
                    type="text" 
                    name="" id="idBox"
                    v-model="id"
                ></p>
                <p>密码：<input
                    type="password" 
                    name="" id="pwBox"
                    v-model="pw"
                ></p>
                <p>
                    <button
                        @click="ENTRY(id,pw)"
                    >登录</button>
                </p>
            </div>
       </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                ShowWeb:"index",
                id:"",
                pw:""
            }
        },
        methods:{
            ENTRY(id,pw){
                console.log(id,pw)
            },
        }
    
    }
</script>

<style scoped>  
    .entryBigBox{
        width: 50%;        
        margin-left:150px;
        
    }
    .entryBigBox h1{
        text-align: center;
        font-size:60px;   
    }
    .entryBox{
        margin-top:40px;
        margin-left:-50px;
    }
    .entryBox p{
        text-align: center;
        margin:5px auto;
        font-size:17px;
        line-height:40px;
    }
    .entryBox button{
        width: 75px;
        height: 30px;
        margin-left:20px;
        line-height:30px;
        color:#888;
        border: 1px solid #eee;
    }
    #idBox,#pwBox{
        border: 1px solid #DBDBDB;
        margin-top:5px;
        width: 400px;
        height: 35px;
        border-radius:5px;
        font-size:20px;
        color:#495060;
    }
</style>
