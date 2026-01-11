self.onmessage = (e) => {
  const now = new Date()
  const timestamp = now.toISOString()
  
  const array = new Uint8Array(1)
  self.crypto.getRandomValues(array)
  const value = array[0] < 128 ? 2 : 3
  
  self.postMessage({
    value: value,
    timestamp: timestamp,
    workerId: e.data.id
  })
}