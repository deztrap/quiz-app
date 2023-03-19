<template>
  <div>
    <h1>All Questions</h1>
    <p v-for="(question, index) in allQuestions" :key="index">
      {{ question }}
    </p>
    <individual-question-vue />
  </div>
</template>

<script>
import IndividualQuestionVue from "./IndividualQuestion.vue";

export default {
  name: "QuestionsView",
  components: {
    IndividualQuestionVue,
  },
  data() {
    return {
      questions: [],
    };
  },
  computed: {
    allQuestions() {
      return this.$store.getters.getAllQuestions;
    },
  },
  props: {},
};
</script>

<style>
</style>