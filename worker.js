onmessage = (e) => {
if(e.data == 'start')
  for (i = 0; i <= 4000000000; i++) {
    if (i % 20000000 === 0) {
      console.log(i, ' th iteration');
    }
  }
  postMessage('completed');
  alert('completed');
}
