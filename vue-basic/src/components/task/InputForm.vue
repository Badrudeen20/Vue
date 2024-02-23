<template>
  <form @submit.prevent="submitForm">
  <div class="form-group">
    <input type="text" class="form-control" id="task" v-model="formData.task" placeholder="Enter Task">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<script>
import { useTaskStore } from '@/stores/task';
export default {
 
  data() {
    return {
      formData: {
        task: '',
      },
    };
  },
 
  methods: {
    submitForm() {
      const taskStore = useTaskStore(); // Create a new instance of the store
      const taskData = {
        id:taskStore.tasks.length+1 ?? 1,
        title:this.formData.task,
        status:true
      }
      taskStore.addTask(taskData);
      this.formData.task = '';
    },

  },
};
</script>
