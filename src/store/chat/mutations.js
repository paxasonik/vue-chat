const setMessages = (state, messages) => {
  state.messages = messages;
};
const setMyMessages = (state, messages) => {
  state.myMessages.push(messages);
};
const setOffset = (state, offset) => {
  state.offset = offset
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
  setOffset,
  setLoading,
  setError,
}
