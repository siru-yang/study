const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let data = []
let result = new Array(7).fill(0)
rl.on('line', function (line) {
    data.push(line)
});
function compare(m, n) {
    let listm = m.split(".")
    let listn = n.split(".")
    for (let i = 0; i < 4; i++) {
        if (Number(listm[i]) < Number(listn[i])) {
            return -1
        }
        if (Number(listm[i]) > Number(listn[i])) {
            return 1
        }
    }
    return 0
}
function contains(ip, start, end) {
    if (compare(ip, start) >= 0 && compare(ip, end) <= 0) {
        return true
    }
    return false
}
function valideIP(address) {
    let list = address.split(".")
    if (list.length != 4) { return false }
    for (let index = 0; index < list.length; index++) {
        if (!list[index]) {
            return false
        }
        if (Number(list[index]) > 255 || Number(list[index]) < 0) {
            return false
        }
    }
    return true
}
function valideMask(address) {
    let list = address.split(".")
    let mask = ""
    list.forEach((item) => {
        let one = Number(item).toString(2)
        let len = one.length
        for(let i = 0; i < 8-len; i++){
            one = '0' + one
        }
        mask += one
    })
    // 子网掩码全0全1非法
    if (mask.indexOf('0') == -1 || mask.indexOf('1') == -1) {
        return false
    }
    let has0 = false
    for (let i = 0; i < mask.length; i++) {
        if (mask[i] == '0') {
            has0 = true
        } else if (mask[i] == '1' && has0) {
            return false
        }
    }
    return true
}
rl.on('close', () => {
    // 0和127开头的不考虑
    data.forEach(item => {
        const [ip, mask] = item.split("~")
        let tmp = ip.split(".")
        if (tmp.length > 0 && (tmp[0] == '0' || tmp[0] == '127')) { }
        else {
            if (valideIP(ip) && valideIP(mask) && valideMask(mask)) {
                if (contains(ip, '10.0.0.0', '10.255.255.255') || contains(ip, '172.16.0.0', '172.31.255.255') || contains(ip, '192.168.0.0', '192.168.255.255')) {
                    result[6]++
                }
                if (contains(ip, '1.0.0.0', '126.255.255.255')) {
                    result[0]++
                }
                else if (contains(ip, '128.0.0.0', '191.255.255.255')) { result[1]++ }
                else if (contains(ip, '192.0.0.0', '223.255.255.255')) { result[2]++ }
                else if (contains(ip, '224.0.0.0', '239.255.255.255')) { result[3]++ }
                else if (contains(ip, '240.0.0.0', '255.255.255.255')) { result[4]++ }
            } else {
                result[5]++
            }
        }
    })
    console.log(result.join(" "))
})