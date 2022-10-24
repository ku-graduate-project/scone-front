<template>
  <div class="flex-col">
    <div v-for="menu in navigationMenuList" v-bind:key="menu">
      <router-link :to=menu.to>
        {{menu.name}}
      </router-link>
  </div>
  </div>
</template>

<script>
export default {
  name: "SconeNavigationBar",

  data(){
    return {
      navigationMenuList: [
        {
          name: "그룹 정보 및 수정",
          to:"/group/info"
        },
        {
          name: "스터디 이력",
          to:"/group/history"
        },
        {
          name: "공유 파일",
          to:"/group/share"
        },
        {
          name: "스터디 멤버",
          to:"/group/member"
        }
      ]
    }
  }
}
</script>
