self.onmessage = (e) => {
  const now = new Date()
  const timestamp = now.toISOString()
  
  const value = Math.floor(Math.random() * 2) === 0 ? 2 : 3
  
  self.postMessage({
    value: value,
    timestamp: timestamp,
    workerId: e.data.id
  })
}