<template>
  <v-app>
    <!-- Navigation  Section -->
    <v-navigation-drawer app></v-navigation-drawer>
    
    <!-- Header Section-->
    <v-app-bar app>
      <div>
        <nav>
          <ul>
            <li>
              <router-link to="/login">Login</router-link>
            </li>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/about2">About2</router-link>
            </li>
            <li>
              <router-link to="/loginSample">Login Sample</router-link>
            </li>
          </ul>
        </nav>
      </div>      
    </v-app-bar>
    <!-- Main Section -->
    <v-main>
      <!--<v-container fluid>-->
        <router-view></router-view>
      <!--</v-container>-->
    </v-main>
    
    <!-- Footer Section -->
    <v-footer app>
      <!-- -->ddd
    </v-footer>    
  </v-app>  
</template>

<script>
export default {
  name: "MenuLayout"
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