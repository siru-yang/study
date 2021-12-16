function Dep() {
    this.dep = []
}
Dep.prototype.add = function (watcher) {
    this.dep.push(watcher)
}
Dep.prototype.notify = function () {
    this.dep.forEach(watcher => watcher.update())
}

function Watcher(fn) {
    this.fn = fn
}

Watcher.prototype.update = function () {
    this.fn()
}

let watcher = new Watcher(() => { console.log("更新数据") })
let dep = new Dep()
dep.add(watcher)
dep.notify()