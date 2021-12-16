const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line) {
    let result = [0, 0]
    const list = line.split(';');
    list.forEach(item => {
        if(item.length > 0){
            let direct = item[0]
            let length = Number(item.slice(1))
            if("ASWD".indexOf(direct) != -1 && length){
                if(direct == "A"){
                    result[0] -= length
                }else if(direct =="S"){
                    result[1] -= length
                }else if(direct =="W"){
                    result[1] += length
                }else if(direct =="D"){
                    result[0] += length
                }
            }
        }
    })
    console.log(result.join(","))
});