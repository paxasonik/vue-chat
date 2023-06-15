import axios from "axios";

const fetchMessages = async ({ state, commit }) => {
  try {
    commit('setLoading', false);
    const response = await axios.get('https://numia.ru/api/getMessages', {
      params: {
        offset: state.page,
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
    commit('setPage', state.page + 1)
    const response = await axios.get('https://numia.ru/api/getMessages', {
      params: {
        offset: state.page,
      }
    });
    if(response.data?.result.length) {
      commit('setMessages', [ ...state.messages , ...[response.data.result.at(-1)]])
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
