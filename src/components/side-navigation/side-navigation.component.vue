<template>
  <div id="sideNavigation">
    <el-menu class="side-nav-wrapper" :router="true" :default-active="activeLink">
      <div class="logo">
        <span class="Snowcoop">Snowcoop</span>
      </div>
      <el-menu-item class="menu-itemhover" index="/dashboard" type="button" @click="hijohn = true" v-bind:class="menu-itemhover">
        <span class="Dashboard">Dashboard</span>
      </el-menu-item>
      <el-menu-item index="/list" @click="hijohn = false">
        <span class="Address-List">Address List</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script src="./side-navigation.component.js"></script>
<style src="./side-navigation.component.css" scoped></style>