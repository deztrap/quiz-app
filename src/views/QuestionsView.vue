<template>
  <div>
    <QuestionView />
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionView from "../components/AllQuestions.vue";
export default {
  name: "HomeView",
  components: {
    QuestionView,
  },
};
</script>
