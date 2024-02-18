const answers = ["결혼", "연결", "휴지", "거지",];

let data = answers.map((answer) => {
    let newVar = [...answer];
    return [...newVar.splice(0, newVar.length - 1), ...newVar];
}).flat();

data = data.sort(() => Math.random() - 0.5);

console.log(data);