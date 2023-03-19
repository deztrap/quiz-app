<template>
  <div>
    <span>
      <selector-item-vue :defaultValue="Category" :placeholder="Category" />
      <selector-item-vue :defaultValue="Amount" :placeholder="Amount" />
      <selector-item-vue :defaultValue="Type" :placeholder="Type" />
      <selector-item-vue
        :defaultValue="Difficulity"
        :placeholder="Difficulity"
      />
    </span>
    <QuestionView />
  </div>
</template>

<script>
import SelectorItemVue from "@/components/SelectorItem.vue";
// @ is an alias to /src
import QuestionView from "../components/AllQuestions.vue";

export default {
  name: "HomeView",
  components: {
    QuestionView,
    SelectorItemVue,
  },
};
</script>
