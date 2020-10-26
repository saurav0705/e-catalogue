let debounceTimer
export const debounce = (func, delay) => {
  return () => {
    console.log('hello')
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => func(), delay)
  }
}
