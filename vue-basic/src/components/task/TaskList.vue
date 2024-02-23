<script setup>
 import { storeToRefs } from 'pinia'
 import { useTaskStore } from '../../stores/task'
 const { tasks } = storeToRefs(useTaskStore())
 const { removeTask } = useTaskStore();
 const handleClick = (taskId) => {
  removeTask(taskId);
};

</script>
<template>
      <ul class="list-group" >
            <li class="list-group-item my-1 d-flex justify-content-between"
             
             v-if="tasks" v-for="post in tasks" :key="post.id">
             {{ post.title }}
             <button class="btn btn-sm btn-danger" @click="() => handleClick(post.id)">Delete</button>
            </li>
      </ul>
</template>
    