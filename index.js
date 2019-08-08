function createStore() {
  let state
  let listeners = []

  const getState = () => state

  const subscribe = (listener) => {
    listeners.push(listener)
  }

  return {
    getState,
    subscribe
  }
}