<template>
    <div class="layout">
        <Layout>
            <Header>
                <headers></headers>
            </Header>
            
            <Content>
                <router-view></router-view>
            </Content>
        </Layout>
            
            

                
    </div>
</template>

<script>
    import Vue from "vue" ;
    import headers from "./multiplexing/header.vue";
    import footers from "./multiplexing/footer.vue"; 
    import entryindex from "./components/entry/index.vue";
    import homepage from "./components/homepage/homepage.vue";
    import hotindex from "./components/hotnews/index.vue";
    export default {
        data(){
            return{
                // ShowWhat:"entryBox"
            }
        },
        components:{
            entryindex,
            homepage,
            headers,
            footers,
            hotindex
        }
    }
</script>

<style>
    .content{
        background:#eee;
    }
</style>