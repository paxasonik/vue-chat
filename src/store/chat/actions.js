import axios from "axios";

const fetchMessages = async ({ state, commit }) => {
  try {
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
  try {
    commit('setOffset', state.offset + 20)
    const response = await axios.get('https://numia.ru/api/getMessages', {
      params: {
        offset: state.offset
      }
    });
    if(response.data?.result.length) {
      commit('setMessages', [ ...state.messages , ...response.data.result ])
    } else {
      throw new Error(response.data)
    }
  } catch (error) {
    commit('setError', false)
  }
}

export default {
  fetchMessages,
  loadMoreMessages,
}
