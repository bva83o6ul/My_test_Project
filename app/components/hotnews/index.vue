<template>
  <div>
    <br>      
    <Row>
        <Col span="6"><Sidebar></Sidebar></Col>
        <Col span="12"><TextBox></TextBox></Col>
        <Col span="6"><Personal></Personal></Col>
    </Row>
    <br>
    <Row>
        <Col span="6">1</Col>
        <Col span="12"><Hotnews></Hotnews></Col>
        <Col span="6">1</Col>
    </Row>
      
  </div>
</template>

<script>
import Sidebar from "./sidebar.vue";
import TextBox from "./textBox.vue";
import Personal from "./Personal.vue";
import Hotnews from "./Hotnews.vue";
    export default {
        data(){
            return{
                TextData:{
                    "name":"I",
                    "value":"value",
                }
            }
        },
        components:{
            Sidebar,
            TextBox,
            Personal,
            Hotnews,
        }
    }
</script>

<style scoped>

</style>
