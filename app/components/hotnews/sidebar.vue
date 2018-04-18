<template>
  <div>
       <Dropdown trigger="click" style="float:right; width:40%; text-align:center; margin-right:10px; background:#fff;">
        <a href="javascript:void(0)" style=" display:block; width:100%; height:20px; border: 1px solid #dddee1;">
            <span></span>
            <Icon type="arrow-down-b"></Icon>
        </a>
        <DropdownMenu slot="list" style="padding:2px; text-align:left;">
            <DropdownItem>
                首页
                <Icon type="home"></Icon>
            </DropdownItem>
            <DropdownItem>
                收藏
                <Icon type="heart"></Icon>
            </DropdownItem>
            <DropdownItem>
                赞
                <Icon type="thumbsup"></Icon>
            </DropdownItem>
            <DropdownItem>
                热门
                <Icon type="fireball"></Icon>
            </DropdownItem>
            <DropdownItem>
                好友圈
                <Icon type="person-stalker"></Icon>
            </DropdownItem>
            <DropdownItem>
                悄悄关注
                <Icon type="ios-pulse"></Icon>
            </DropdownItem>
            <DropdownItem>
                设置
                <Icon type="ios-cog"></Icon>
            </DropdownItem>
        </DropdownMenu>
    </Dropdown>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                visible: false
            }
        },
        methods: {
            handleOpen () {
                this.visible = true;
            },
            handleClose () {
                this.visible = false;
            }
        }
    }
</script>

<style scoped>

</style>
