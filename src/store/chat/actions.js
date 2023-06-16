import axios from "axios";

const fetchMessages = async ({ state, commit }) => {
  try {
    commit('setError', true)
    commit('setLoading', false);
    const response = await axios.get('https://numia.ru/api/getMessages', {
      params: {
        offset: state.offset,
      }
    });
    if(response.data?.result.length) {
      commit('setMessages', response.data.result)
    } else {
      throw new Error(response.data)
    }
  } catch (error) {
    commit('setError', false)
  } finally {
    commit('setLoading', true);
  }
}

const loadMoreMessages = async ({ state, commit }) => {
  if (!state.isMessages) return
  try {
    commit('setError', true)
    commit('setOffset', state.messages.length ? state.offset + 20 : state.offset)
    const response = await axios.get('https://numia.ru/api/getMessages', {
      params: {
        offset: state.offset
      }
    });
    if (response.data?.result.length === 0) {
      commit('setIsMessages', false)
    }
    if(typeof response.data !== 'string') {
      commit('setMessages', [ ...state.messages , ...response.data.result ])
    } else {
      throw new Error(response.data)
    }
  } catch (error) {
    commit('setOffset', state.messages.length ? state.offset - 20 : state.offset)
    commit('setError', false)
  }
}

export default {
  fetchMessages,
  loadMoreMessages,
}
