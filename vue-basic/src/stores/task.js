import { defineStore } from 'pinia'

export const useTaskStore = defineStore({
    id: 'task',
    state: () => ({
        tasks:[ ],
    }),
    // getters: {
    //      taskComplete(){
    //         return this.tasks.reduce((acc,cur)=>{
    //             return cur.status ? acc + 1:acc
    //         },0)
    //      },
    //      totalTask(){
    //         return this.tasks.length
    //      }
    //   },
    actions: {
      addTask(task){
        this.tasks.push(task)
      },
      removeTask(taskId){
        this.tasks = this.tasks.filter(ele=>ele.id!==taskId)
      }
    },
})