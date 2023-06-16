const messages = state => {
  if (state.messages.length) {
    const messages = state.messages.map((item) => {
      return { message: item, isMyMessage: false }
    })
    return [...messages.reverse(), ...state.myMessages]
  }
  return [...state.messages.reverse(), ...state.myMessages]
};
const offset = state => state.offset;
const isMessagesLoading = state => state.isMessagesLoading;
const isError = state => state.isError;

export default {
  messages,
  offset,
  isMessagesLoading,
  isError,
}
