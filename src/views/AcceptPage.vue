<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const githubId = ref('');
const email = ref('');

const submitInfo = async (e) => {
  const result = await fetch(
    `https://neon-request-rogers-projects-263ce5d1.vercel.app/intern?githubId=${githubId.value}&email=${email.value}`,
    { method: 'POST',}
  ).then(response => response.json())
  console.log(result)
  if (result.code === 200) {
    // 提交成功后跳转到完成页面
    router.push('/finish');
  } else {
    // 处理错误
    alert('提交失败');
  }
};
</script>

<template>
  <div id="accept">
    <h1>填写信息，接收挑战</h1>

    <form class="accept-form">

      <div class="info github-info">
        <label for="github-id">GitHub ID:</label>
        <input v-model="githubId" type="text" id="github-id" name="github-id" required />
      </div>

      <div class="info email-info">
        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" name="email" required />
      </div>

      <button @click.prevent="submitInfo" type="submit">接受挑战</button>

    </form>
  </div>
</template>

<style>
#accept {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8rem;
  font-size: 1.5rem;
}

#accept h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

#accept .accept-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 25rem;
}

.accept-form .info {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.accept-form .info input {
  font-size: 1.5rem;
  border: 1px solid #ccc;
  border-radius: .3rem;
  width: 15rem;
}

.accept-form .info label {
  width: 8rem;
}

.accept-form button {
  margin-top: 1rem;
  padding: .5rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: #0969da;
  border: none;
  border-radius: .3rem;
  cursor: pointer;
}

@media screen and (max-width: 576px) {
  #accept {
    font-size: 1.2rem;
  }

  #accept .accept-form {
    width: 20rem;
    padding: 0 1rem;
  }

  .accept-form .info {
    margin-bottom: 1.25rem;
  }

  .accept-form .info label {
    width: 7rem;
  }

  .accept-form .info input {
    font-size: 1.2rem;
    width: 12rem;
  }
}
</style>