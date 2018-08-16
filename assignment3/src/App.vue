<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <router-link class="navbar-brand" to="/">
        Vue CLI App
      </router-link>
      <div>
        <ul class="navbar-nav">
          <router-link tag="li" class="nav-item" to="/" exact>
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/users" exact>
            <a class="nav-link">Users</a>
          </router-link>
        </ul>
      </div>
    </nav>

    <main role="main" class="container">
      <router-view/>
    </main>
  </div>
</template>

<style>
#app {
  margin-top: 60px;
}
</style>
