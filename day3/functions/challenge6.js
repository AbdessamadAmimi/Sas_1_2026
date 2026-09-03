function GetCurrentTime(){
    let time = new Date();
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
}
console.log(GetCurrentTime());