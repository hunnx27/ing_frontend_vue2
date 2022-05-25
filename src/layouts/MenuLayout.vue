<template>
  <v-app>
  
    <!-- Header Section-->
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
      app
      class="flex-grow-0"
      >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Navigation  Section -->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >           
          <v-list-item to="/" link>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item to="/login">
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
          <v-list-item to="/about">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-list-item to="/about2">
            <v-list-item-title>About2</v-list-item-title>
          </v-list-item>
          <v-list-item to="/loginSample">
            <v-list-item-title>Login Sample</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Section -->
    <v-main class="pt-0">
      <!--<v-content>-->
        <router-view></router-view>
      <!--</v-content>-->
    </v-main>
    
    <!-- Footer Section -->
    <v-footer padless app >
      <v-card
        flat
        tile
        width="100%"
        class="text-center"
        color="deep-purple accent-4"
      >
        <v-card-text>
          
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>    
  </v-app>  
</template>

<script>
export default {
  name: "MenuLayout",
  data: () => ({
    drawer: false,
    group: null,
  }),
  watch: {
    group () {
      this.drawer = false
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}

nav ul {
  list-style-type: none;
  padding-left: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #ffffff;
}

li {
  display: inline;
  padding-left: 1.5rem;
}
</style>