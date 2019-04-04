<template>
  <div id="dashboardPage">
    <el-main v-if="hijohn" class="board">
      <h1 class="Hi-John-welcome-to">Hi {{ message.firstName }}, welcome to Snowcoop!</h1>
    </el-main>
  </div>
</template>
<script src="./dashboard-page.component.js"></script>
<style src="./dashboard-page.component.css"></style>
