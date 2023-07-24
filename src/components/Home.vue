<template>
  <v-card>
    <v-toolbar
      color="primary"
    >
      <v-toolbar-title>Giithub </v-toolbar-title>
    </v-toolbar>
    <div class="d-flex flex-row">
      <v-tabs
        v-model="activeTab"
        direction="vertical"
        color="primary"
      >
      <v-tab v-for="tab of tabs" :key="tab.id" :to="tab.route" exact>
        <v-icon start>
            {{ tab.icon }}
          </v-icon>
        {{ tab.name }}
      </v-tab>
      </v-tabs>
    </div>
  </v-card>
  <router-view></router-view>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      activeTab: '/access',
      tabs: [
        { id: 1, name: "Access", icon:'mdi-account', route: '/access' },
        { id: 2, name: "Team", icon:'mdi-lock', route: '/team' },
        { id: 3, name: "Migrate", icon:'mdi-access-point', route: '/migrate' }
      ]
    };
  },
};
</script>
