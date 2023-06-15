import { createStore } from 'vuex'
import messageModule from '@/store/chat'

const store = createStore({
  modules: {
    message: messageModule,
  }
})

export default store;
