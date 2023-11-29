<template>
  <div>
    <h1 style="color:red">Навчальний план</h1>
    <ul>
      <li v-for="selectedLesson in selectedLessons" :key="selectedLesson.lessonId">
        {{ getLessonName(selectedLesson.lessonId) }} - {{ getTeacherName(selectedLesson.teacherId) }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
      ...mapGetters(['lessons', 'teachers']),
      segment(){
          return this.$route.params.segment.toString()
      },
    selectedLessons() {
      return this.segment.split('/').map(item => {
        const [lessonId, teacherId] = item.split('-');
        return { lessonId, teacherId };
      });
    },
  },
  methods: {
    getLessonName(lessonId) {
      const lesson = this.lessons.find(lesson => lesson.id === parseInt(lessonId));
      return lesson ? lesson.name : '';
    },
    getTeacherName(teacherId) {
      const teacher = this.teachers.find(teacher => teacher.id === parseInt(teacherId));
      return teacher ? teacher.name : '';
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
