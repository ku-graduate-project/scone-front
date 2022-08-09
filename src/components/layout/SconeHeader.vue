<template>
  <div class="flex justify-end m-3">
    <p>{{ user.name }}님 환영합니다.</p>
  </div>
  <div class="flex flex-row justify-around">
    <router-link to="/">메인</router-link>
    <router-link to="/group/create">스터디 그룹 생성</router-link>
    <router-link to="/group/study">스터디 그룹 관리</router-link>
    <router-link to="/my-page">회원 정보</router-link>
  </div>
</template>

<script setup>
const user = {
  name: "최원영"
}
</script>

<script>
export default {
  name: "SconeHeader"
}
</script>
