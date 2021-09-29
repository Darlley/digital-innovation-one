const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345)
    }, 1000)
})
const simpleFunc = async () => {
    //throw new Error('Oh no!')
    return await asyncTimer()
}
simpleFunc()
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
