import Test from '../src/components/footer.vue'
import Jobs from '../src/components/jobs/jobs.vue'
import JobsDetail from '../src/components/jobs/jobsDetail.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/test',name:'test', component: Test },
  { path: '/jobs',name:'Jobs', component: Jobs },
//   { path: '/jobs/id/:slugs',name:'JobsDetail', component: JobsDetail },
  { path: '/:slugs',name:'JobsDetail', component: JobsDetail },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router