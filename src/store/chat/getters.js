const messages = state => {
  return [...state.messages].reverse()
};
const page = state => state.page;
const isMessagesLoading = state => state.isMessagesLoading;
const isError = state => state.isError;

export default {
  messages,
  page,
  isMessagesLoading,
  isError,
}
