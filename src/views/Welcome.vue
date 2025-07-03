<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push('/intro');
  }, 2000); // 2s delay
})
</script>

<template>
  <div class="welcome">
    <img
      src="@/assets/logo.png"
      alt="Vue logo"
      class="logo"
    />
    <p class="welcome-content">
      欢迎来到 无限状态 线上面试环节，期待你的加入！
    </p>
  </div>
</template>


<style scope>
.welcome {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  margin: 0 2rem;
}

.welcome .logo {
  height: 200px;
}

@media screen and (max-width: 576px) {
  .welcome {
    flex-direction: column;
    font-size: 1.5rem;
  }
}
</style>