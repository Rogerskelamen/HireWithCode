<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const url = ref('');
const addr = ref('');

const submitResult = async (e) => {
  const result = await fetch(
    `https://neon-request-rogers-projects-263ce5d1.vercel.app/commit?url=${url.value}&addr=${addr.value}`,
    { method: 'POST',}
  ).then(response => response.json())
  console.log(result)
  if (result.code === 200) {
    return
  } else {
    // 处理错误
    alert('提交失败');
  }
};
</script>

<template>
  <div id="finish">
    <h1>提交信息，完成挑战</h1>

    <form class="finish-form">

      <div class="info github-info">
        <label for="github-url">GitHub URL:</label>
        <input v-model="url" type="text" id="github-url" name="github-url" required />
      </div>

      <div class="info addr-info">
        <label for="address">Vercel Addr:</label>
        <input v-model="addr" id="address" name="address" required />
      </div>

      <button @click.prevent="submitResult" type="submit">提交结果</button>

    </form>
  </div>
</template>

<style>
#finish {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8rem;
  font-size: 1.5rem;
}

#finish h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

#finish .finish-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 25rem;
}

.finish-form .info {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.finish-form .info input {
  font-size: 1.5rem;
  border: 1px solid #ccc;
  border-radius: .3rem;
  width: 15rem;
}

.finish-form .info label {
  width: 10rem;
}

.finish-form button {
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
  #finish {
    font-size: 1.2rem;
  }

  #finish .finish-form {
    width: 20rem;
    padding: 0 1rem;
  }

  .finish-form .info {
    margin-bottom: 1.25rem;
  }

  .finish-form .info label {
    width: 7rem;
  }

  .finish-form .info input {
    font-size: 1.2rem;
    width: 12rem;
  }
}
</style>