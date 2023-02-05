<script setup>
import { RouterLink, RouterView } from 'vue-router'
window.scrollTo(0, 0)
</script>

<template>
  <div id="app-wraper">
    <header>
      <div class="menu fixed">
        <div class="logo-container">
          <h1 class="logo-name">.CODE</h1>
        </div>
        <nav class="tap-bar">
          <ul class="tap-bar-items-container">
            <li class="item-container">
              <router-link to="/">{{"<"}}Home{{"/>"}}</router-link>
            </li>
            <li class="item-container">
              <router-link to="/about">{{"<"}}About{{"/>"}}</router-link>
            </li>
            <li class="item-container">
              <router-link to="/contact">{{"<"}}Contact{{"/>"}}</router-link>
            </li>
          </ul>
          <router-link to="/hello-world"><button>{{"<"}}Hello World !{{"/>"}}</button></router-link>
        </nav>
      </div>
    </header>
    <div class="view-container">
      <RouterView />
    </div>
    <footer>
      <div class="flex-center">
        <div class="row">
          <div class="footer-title">.CODE</div>
          <div class="social-links-container">
            <div class="social-link">
              <a href="https://instagram.com/">{{"<"+"instagram"+"/>"}}</a>
            </div>
            <div class="social-link">
              <a href="https://behance.com/">{{"<"+"behance"+"/>"}}</a>
            </div>
            <div class="social-link">
              <a href="https://github.com/">{{"<"+"github"+"/>"}}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>

</template>

<style scoped>
.social-links-container{
  display: flex;
  gap: .5rem;
}
.flex-center{
  display: flex;
  justify-content: center;
  align-items: center;
}

footer{
  padding: 2.5rem;
}

.row{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5rem;
}

.footer-title{
  font-size: 2.5rem;
}
.menu{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 3.5rem;
  gap: 2.5rem;
  height: 90px;
  backdrop-filter: blur(15px);
  z-index: 500;
  position: fixed;
  inset: 0 0 auto 0;
}

.tap-bar{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem
}

.tap-bar-items-container{
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
}
</style>
