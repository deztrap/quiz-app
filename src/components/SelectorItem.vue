<template>
  <div>
    <select v-model="input" :placeholder="placeholder">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    defaultValue: String,
    placeholder: String,
  },
  data() {
    return {
      input: "",
    };
  },
  mounted() {
    this.input = this.defaultValue;
  },
  watch: {
    input(newValue) {
      this.$emit("change", newValue);
    },
  },
};
</script>

<style>
</style>

