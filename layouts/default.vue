<template>
  <div class="wrap">
    <Header />
    <div class="contents">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100vh;
}
.contents {
  flex: 1;
  width: 100%;
  margin: 0 auto;
  padding: 50px 30px;
  max-width: 1200px;
  box-sizing: border-box;
}
</style>
