<template>
  <div>
    Виберіть уроки:
    <ul>
      <li v-for="lesson in lessons" :key="lesson.id">
        {{ lesson.name }}
        <input
          type="checkbox"
          name="lesson"
          v-model="lesson.selected"
          :value="lesson.id"
        />
      </li>
    </ul>
    <input type="submit" value="Вибрати вчителів" @click="createRoute()" />
  </div>
</template>
    
    <script>
import router from "@/router";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["lessons"]),
  },
  methods: {
    createRoute() {
      const selectedLessons = this.lessons
        .filter((lesson) => lesson.selected)
        .map((lesson) => lesson.id);
      const path = selectedLessons.join("/");
      router.push({ path });
    },
  },
};
</script>
    
    <style lang="scss" scoped>
</style>
    