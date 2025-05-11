function timer(duration, onComplete) {
  setTimeout(() => {
    const message = `Timer of ${duration} ms finished`;
    onComplete(message);
  }, duration);
}

timer(2000, (msg) => {
  console.log(msg); 
});
