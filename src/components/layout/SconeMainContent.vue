<template>
  <div class="flex flex-row flex-grow flex-wrap min-h-screen">
    <SconeNavigationBar class="flex-none border-2 p-3"></SconeNavigationBar>
    <router-view class=" flex-1 border-2 p-3"/>
  </div>
</template>

<script setup>
import SconeNavigationBar from "@/components/layout/SconeNavigationBar";

</script>
<script>
export default {
  name: "SconeMainContent"
}
</script>
