<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleNextPage = () => {
  router.push('/accept');
};
</script>

<template>
  <div id="intro">
    <h1>HireWithCode - 面试者挑战项目</h1>

    <p class="md-content">
      欢迎来到 <code>HireWithCode</code> 项目！这是一个专为技术面试者设计的真实项目挑战。目前，这个仓库刚刚起步，没有任何代码——只有待实现的功能（TODOs）。你的任务是将这些TODOs转变为实际的代码，提交你的Pull
      Request（PR）就是你面试的一部分挑战。
    </p>

    <h2>产品功能 TODOs</h2>

    <p class="md-content">
      产品是一个 Web 网站（PC端、移动端兼容），分为 4 个步骤的页面：
    </p>

    <ul class="md-list">
      <li>
        <input type="checkbox" class="head-checkbox" disabled />
        <strong>欢迎语：</strong>
        <span>
          Logo + 一句话欢迎语（垂直水平居中，2 秒后自动进入下一页 <em>面试引导</em>）<code>欢迎来到 无限状态 线上面试环节，期待你的加入！</code>
        </span>
        <a href="https://github.com/Rogerskelamen/HireWithCode/blob/main/src/assets/logo.png">logo</a>
      </li>

      <li>
        <input type="checkbox" class="head-checkbox" disabled />
        <strong>面试引导：</strong>
        <span>介绍面试的流程和说明（Markdown 文案展示，需要渲染为富文本样式）</span>
        <a href="https://raw.githubusercontent.com/InfiniteStatesInc/HireWithCode/refs/heads/main/README.md">页面文案 markdown</a>
      </li>

      <li>
        <input type="checkbox" class="head-checkbox" disabled />
        <strong>接受挑战：</strong>
        <span>表单，<code>input</code>(用户输入自己的 github id) 、<code>input</code>(邮箱)、<code>submit button</code>(接受挑战)</span>
      </li>

      <li>
        <input type="checkbox" class="head-checkbox" disabled />
        <strong>完成挑战：</strong>
        <span>表单，<code>input</code>(github 仓库 url)、<code>input</code>(<a href="https://vercel.app/">Vercel</a> 在线体验地址)、<code>submit button</code>(提交作品)</span>
      </li>
    </ul>

    <h2>如何参与？</h2>
    <ol class="md-list">
      <li>
        克隆仓库到你的本地机器。
      </li>
      <li>
        按照你对这个产品的理解，自行开发 TODO
      </li>
      <li>
        确保你的代码是可以运行的
      </li>
      <li>
        完成挑战后，通过Pull Request将你的代码提交给我们。
      </li>
      <li>
        在PR中附上你的Vercel在线体验链接。
      </li>
    </ol>

    <div class="md-comment">
      备注说明：
      这个项目的步骤 3、4 是是需要服务端能力的（API + 数据库），如果你不具备全栈的经验，可以考虑使用 <a href="https://supabase.com/">supabase</a> 作为本项目的服务端（或者仅仅实现前端静态网页）
    </div>

    <p class="md-content">
      我们会审查每一个PR，并以此作为面试的一部分。我们期待看到你的创意和技术实力！
    </p>
    <p class="md-content">
      祝你好运！
    </p>

    <button class="md-btn" @click="handleNextPage">下一页</button>
  </div>
</template>

<style scoped>
#intro {
  font-size: 1.5rem;
  padding: 3rem;
}

h1, h2 {
  width: 100%;
  padding-bottom: .3rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #d1d9e0b3; /* 分割线颜色 */
}

.md-content {
  margin-bottom: 1.25rem;
}

a {
  color: #0969da;
  border-bottom: 2px solid #0969da;
}

input.head-checkbox {
  width: 1.2rem;
  height: 1.2rem;
  margin-right: .5rem;
}

ul.md-list > li, ol.md-list > li {
  padding: .3rem;
}

.md-list {
  margin-bottom: 1.2rem;
}

button.md-btn {
  width: 6rem;
  padding: .5rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: #0969da;
  border: none;
  border-radius: .3rem;
  cursor: pointer;
}

/* github markdown style */
.md-comment {
  color: #6a737d;
  margin-bottom: 1.25rem;
  padding-left: 2rem;
  border-left: .4rem solid #d1d9e0b3;
}

code {
  font-family: "Monaspace Neon", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
  padding: .2em .4em;
  font-size: 85%;
  margin: 0;
  border-radius: 6px;
  background-color: #f0f1f2;
  color: #000;
}

@media screen and (max-width: 576px) {
  #intro {
    font-size: 1rem;
    padding: 2rem;
  }
  input.head-checkbox {
    width: 1rem;
    height: 1rem;
  }
  button.md-btn {
    width: 5rem;
    font-size: 1rem;
  }
}
</style>
