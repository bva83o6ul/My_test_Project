<template>
  <div class="newsBox">
      <ul>
          <li v-for="(item,index) in getStateContent">
                <div class="ArticleBox">
                    <div class="ArticleHead">
                        <span class="portrait"><a href="###"></a></span>
                        <span class="name"><a href="###">{{item.name}}</a></span>
                        <span>{{item.Time}}</span>
                    </div>

                    <div class="ArticleCon">
                        {{item.value}}

                    </div>

                    <div class="ArticleFoot">
                        <Row style="text-align:center;">
                            <Col span="6"><Button
                                
                                @click="AddForward"
                            >转发{{item.Forward}}</Button></Col>
                            <Col span="6"><Button
                                
                                @click="AddCollection"
                            >收藏{{item.Collection}}</Button></Col>
                            <Col span="6"><Button
                                
                                @click="Adddiscuss"
                            >评论{{item.discuss}}</Button></Col>
                            <Col span="6"><Button
                                
                                @click="Addlike"
                            >点赞{{item.like}}</Button></Col>
                        </Row>
                    </div>
                    
                </div>
          </li>
      </ul>
     
  </div>
</template>
<script>
    export default {
        props:["content"],
        data(){
            return{
                
            }
        },
        computed:{
            getStateContent(){
                 return this.$store.state.content;
                 
            }
        },
        methods:{
            Addlike(payload){
                console.log(payload)
                this.$store.commit("addlike",payload);   
            },
            Adddiscuss(){

            },
            AddCollection(){

            },
            AddForward(){

            }

                         

        }
    }
</script>

<style>
li{list-style: none;}
.contentBox{
    border: 1px solid #dddee1;
    background:#fff;
}
.ArticleCon{

    background:#fff;    
    border: 1px solid #dddee1;
    border-radius: 5px;    
    min-height:150px;
    padding:5px;
    margin:10px 0px;
}
.ArticleBox{
    margin-top:10px;    
    border-radius: 5px;
    background:#fff;    
    position: relative;
    min-height:200px;
    border: 1px solid #dddee1;
    padding:10px;
}
.ArticleFoot{
    border-top: 1px solid #dddee1;
    padding-top:10px;
    position: relative;
    bottom:0px;
}
</style>
