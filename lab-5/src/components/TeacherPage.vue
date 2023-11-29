<template>
  <div>
    <div v-for="lesson in lessons" :key="lesson.id">
      <label v-if="lessonIdList.includes(lesson.id.toString())">
        {{ lesson.name }}:
        <select name="teacher" v-model="lesson.teacher">
          <option
            v-for="teacher in teachers"
            :value="teacher.id"
            :key="teacher.id"
          >
            {{ teacher.name }}
          </option>
        </select>
        <br />
      </label>
    </div>
    <button @click="createRoute()">Розпочати навчання</button>
  </div>
</template>
  
  <script>
import router from "@/router";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      routeData: [],
    };
  },
  computed: {
    ...mapGetters(["lessons", "teachers"]),
    lessonIdList() {
      return this.$route.params.id;
    },
    selectedLessons() {
      return this.lessons.filter((lesson) => lesson.teacher !== null);
    },
  },
  methods: {
    createRoute() {
      const segment = this.selectedLessons
        .map((lesson) => {
          const encodedTeacher = encodeURIComponent(lesson.teacher);
          console.log(
            `Lesson ID: ${lesson.id}, Encoded Teacher: ${encodedTeacher}`
          );
          return `${lesson.id}-${encodedTeacher}`;
        })
        .join("/");
      console.log("Segment:", segment);
      router.push({ name: "lesson/plan", params: { segment } });
    },
  },
};
</script>
  
  <style lang="scss" scoped>
</style>