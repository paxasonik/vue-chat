const setMessages = (state, messages) => {
  state.messages = messages;
};
const setMyMessages = (state, messages) => {
  state.myMessages.push(messages);
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
  setMyMessages,
  setPage,
  setLoading,
  setError,
}
