require('./mind-grenade')
const names = require('./firstModule')
const sayHi = require('./utils')
const data = require('./alternative-callModules')

sayHi('Alex')
sayHi(names.john)
sayHi(names.peter)
console.log(data)
console.log(data.singlePerson.name)
//////////////////

// OS moudle
const os = require('os');

const user = os.userInfo()
console.log(user)

const currentOS ={
    name:os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOS)

// Path moulde

const  path = require('path')

console.log(path.sep)

const filePath = path.join('/content/','subFolder','text.txt')

console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolutePath = path.resolve(__dirname, 'content', 'subFolder','text.txt')
console.log(absolutePath)