onmessage = ({ data = 0 }) => {
  let counter = 0;

  postMessage({
    response: 'ok', 
    data: counter
  })
}