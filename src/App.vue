<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://www.make-blanks.com/">
          <img src="./assets/school.png" width="28" height="28" />
        </a>
        <router-link to="/" class="navbar-item">Home</router-link>

        <router-link to="/about" class="navbar-item">About Me</router-link>
      </div>
    </nav>
    <section class="hero is-primary is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">자동으로 빈칸 만들기</h1>
        </div>
      </div>
    </section>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About me</router-link>
    </div>-->
    <router-view />
    <div class="sitemap">
      <a href="/sitemap.xml" download></a>
    </div>
    <!--     
    <footer class="footer">
      <div class="content has-text-centered">
        <p>-</p>
      </div>
    </footer>-->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.siteMap {
  display: none;
}
</style>
