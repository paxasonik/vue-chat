const setMessages = (state, messages) => {
  state.messages = messages;
};
const addMessages = (state, messages) => {
  state.messages.unshift(messages);
};
const setPage = (state, page) => {
  state.page = page
};
const setLoading = (state, bool) => {
  state.isMessagesLoading = bool
};
const setError = (state, bool) => {
  state.isError = bool
};

export default {
  setMessages,
  addMessages,
  setPage,
  setLoading,
  setError,
}
