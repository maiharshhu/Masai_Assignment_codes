function timer(duration,callback){
    setTimeout(() => {
        const Message = `Timer of ${duration} ms finished`;
        callback(Message);
    }, duration);
}

function onComplete(Message){
    console.log(Message)
}

timer(2000,onComplete);