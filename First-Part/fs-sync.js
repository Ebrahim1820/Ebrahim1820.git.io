const fs = require('fs')
console.log('Start code')
fs.readFile('../content/first.txt', 'utf8', (err, result)=>{

    if(err){
        console.log(err);
        return;
    }
    const first = result;

    fs.readFile('../content/second.txt','utf8', (err, result)=>{
        if(err){
            return;
        }
        const second = result;

        fs.writeFile('../content/sync-result.txt', `Here is sync file: ${first} ${second}`, (err, result)=>{
            if(err){
                return;
            }
            console.log('I am done the writting code')
        })
    })

})
console.log('Next section start now')

////////// This code is not syncroness

const fs = require('fs')
console.log('Start code')
const firstFile = fs.readFileSync('./content/first.txt', 'utf8')

const secondFile = fs.readFileSync('./content/second.txt', 'utf8')


fs.writeFileSync('./content/result.txt', `this is new mix files ${firstFile} ${secondFile}`)
console.log('I am doen and write')
console.log('Next section')
