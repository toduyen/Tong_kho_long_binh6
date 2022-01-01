const promise = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve('hello anh em');
    }, 2000);
})
promise.then((reponsive)=> {
    console.log(reponsive);
})