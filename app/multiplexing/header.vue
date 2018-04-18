<template>
    <div class="head"> 
        <!-- <Menu mode="horizontal" :theme="theme1"  >
            <MenuItem name="home"><Icon type="ios-paper"></Icon><router-link to="/home">主页</router-link></MenuItem>
            <MenuItem name="entry"><Icon type="ios-people"></Icon><router-link to="/entry">登录/注册</router-link></MenuItem>
            <MenuItem name="hotnews"><Icon type="stats-bars"></Icon><router-link to="/hotnews">热点新闻</router-link></MenuItem>
        </Menu> -->
        <Menu mode="horizontal" :theme="theme1" :active-name="getActivename()" @on-select="CHANGENAV" style="       ">
                <MenuItem name="home">
                    <Icon type="home"></Icon>
                    HOME
                </MenuItem>
                <MenuItem name="hotnews">
                    <Icon type="fireball"></Icon>
                    今天热点
                </MenuItem>

                <Submenu name="Mine">
                    <template slot="title">
                        <Icon type="ios-person"></Icon>
                        我的帐号
                    </template>
                    <MenuGroup title="个人资料">
                        <MenuItem name="mine">详细资料</MenuItem>
                        <MenuItem name="mine-1">密码管理</MenuItem>
                    </MenuGroup>
                </Submenu>
                        <MenuItem name="shop">
                            <Icon type="android-cart"></Icon>
                            商城
                        </MenuItem>
                        <MenuItem 
                            name="entry"
                            v-if="isShowEntry()"
                        >
                            <Icon type="ionic"></Icon>
                            登录/注册
                        </MenuItem>
            </Menu>
                
    </div>
</template>

<script>
    export default {
        data(){
            return{
                theme1: 'dark',
                isshowentry:true
            }
        },
        methods:{
            isShowEntry(){
                console.log(this.isshowentry)
                return this.isshowentry;
            },
            getActivename(){
                var matched = this.$router.history.current.matched;
                console.log(matched);
                if(matched.length>1){
                    return matched[1].path.match(/\/entry\/(.+)$/)[1];
                }
                return "";
            },
            CHANGENAV(name){
                this.$router.push("/"+name+"");
            }
        }
    }
</script>

<style>

</style>


