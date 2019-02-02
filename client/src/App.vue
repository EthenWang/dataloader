<template>
  <a-layout id="components-layout-demo-top-side">
    <a-layout-header class="header">
      <div class="logo" />
      <h1 style="color: white">iHub Data Editor</h1>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
            mode="inline"
            :defaultSelectedKeys="['1']"
            :defaultOpenKeys="['screen']"
            style="height: 100%"
          >
            <a-menu-item key="screen">
              <router-link to="/screen">
                <a-icon type="layout" />
                Screen Control
              </router-link>
            </a-menu-item>
            <a-menu-item key="translation">
              <router-link to="/translation">
                <a-icon type="laptop" />
                Translation Control
              </router-link>
            </a-menu-item>
            <a-menu-item key="messages">
              <router-link to="/messages">
                <a-icon type="notification" />
                Message Control
              </router-link>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
  </a-layout>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
