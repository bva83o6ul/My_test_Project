<template>
    <div>
        <Menu :theme="theme3" active-name="entry" @on-select="CHANGEWEB" style="display:inline-block; height:500px;" >
        <MenuGroup title="登录/注册" >
            <MenuItem name="entry">
                <Icon type="document-text"></Icon>
                登录
            </MenuItem>
            <MenuItem name="regist">
                <Icon type="chatbubbles"></Icon>
                注册
            </MenuItem>
        </MenuGroup>
    </Menu>
    <div class="EBox">
        <entry
            v-if="this.ShowWeb=='entry'"
        ></entry>
        <regist
            v-if="this.ShowWeb=='regist'"
        ></regist>
    </div>
        
    </div>
       
</template>
<script>
    import Vue from "vue";  
    import entry from "./entry.vue";
    import regist from "./regist.vue"
    export default {
        data(){
            return{
                ShowWeb:"entry",
                isCollapsed: false,
                theme3: 'light'
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods:{
            CHANGEWEB(Web){
                console.log(Web)
                this.ShowWeb = Web;
            },
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            }
        },
        components:{
            entry,
            regist
        }
    }
</script>
<style scoped>
    .EBox{
        width: 80%;
        float: right;
    }
</style>
