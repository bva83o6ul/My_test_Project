<template>
    <div>
        <div class="entryBigBox">  
            <h1>
                REGISTER
            </h1>
            <div class="entryBox">
                <p>昵称：<input
                    type="text" 
                    name="name" 
                    v-model="userArr.name"
                ></p>
                <p>帐号：<input
                    type="text" 
                    name="idBox" 
                    v-model="userArr.id"
                ></p>
                <p>密码：<input
                    type="password" 
                    name="pwBox" 
                    v-model="userArr.pw"
                ></p>
                <p>手机：<input 
                    type="text" 
                    name="Mobile"
                    v-model="userArr.Mobile"                
                    >
                </p>
                <p>证件：<input 
                    type="text" 
                    name="Document"
                    v-model="userArr.Document"                                
                    >
                </p>
                <p>
                    <button
                        @click="REGIST"
                    >注册</button>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                userArr:{
                    name:"",
                    id:"",
                    pw:"",
                    Document:"",
                    Mobile:""
                }
            }
        },
        methods:{
            REGIST(){
                this.$store.dispatch("regist",{
                    userArr:this.userArr
                    
                })
                console.log(this.userArr)
            }
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
    .entryBox input{
        border: 1px solid #DBDBDB;
        margin-top:5px;
        width: 400px;
        height: 35px;
        border-radius:5px;
        font-size:20px;
        color:#495060;
    }
</style>

