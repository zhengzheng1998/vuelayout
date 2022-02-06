const storage = {
  getItem (key) {
    const val = window.localStorage.getItem(key)
    if (val) {
      return JSON.parse(val).value
    }
    return null
  },
  setItem (key, value) {
    const item = {
      time: +new Date(),
      value: value
    }
    window.localStorage.setItem(key, JSON.stringify(item))
  },
  removeItem (key) {
    window.localStorage.removeItem(key)
  },
  clear () {
    window.localStorage.clear()
  }
}

export default storage
