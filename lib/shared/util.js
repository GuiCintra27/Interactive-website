function supportsWorkerTypes() {
  let supports = false
  const tester = {
    get type() { supports = true }
  }
  try {
    new Worker('blob://', tester).terminate()
  } catch (error) {
    return supports
  }
}

function prepareRunChecker({timerDelay}) {
  let lastEvent = Date.now()

  return{
    shouldRun() {
      const result = (Date.now() - lastEvent) > timerDelay
      if(result) lastEvent = Date.now()

      return result
    }
  }
}

export {
  supportsWorkerTypes,
  prepareRunChecker
}