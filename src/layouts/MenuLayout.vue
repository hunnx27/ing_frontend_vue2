<template>
  <div>
    <nav>
      <ul>
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
          <router-link to="/login">Login</router-link>
        </li>
      </ul>
    </nav>

    <hr/>

    <div>
      <router-view></router-view>
    </div>
  </div>
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