// npm run dev / npm start

const fs = require('fs').promises
  
const start = async()=>{
    try{
        const firstFile =await fs.readFile('./content/first.txt', 'utf8')
        const secondFile =await fs.readFile('./content/second.txt','utf8')
        await fs.writeFile('./content/result-more-upadet-code-sync.txt',`This is Updated code and clean code: ${firstFile} ${secondFile}`)
        console.log(firstFile)
        console.log(secondFile)
    }catch(error){

        console.log(error)

    }
}

start()



// const getText = (path)=>{
//     return new Promise((resolve, reject)=>{
      
//         fs.readFile(path, 'utf8', (error, data)=>{
//             if(error){
//                 reject(error)
//             }else{
//                 resolve(data)    
//             }    
//         })  
//     })
// }

// getText('../content/first.txt')
// .then((result)=>console.log(result))
// .catch((error)=>console.log(error))

// const start = async()=>{
//     try{
//         const firstFile =await getText('./content/first.txt')
//         const secondFile =await getText('./content/second.txt')
//         console.log(firstFile)
//         console.log(secondFile)
//     }catch(error){

//         console.log(error)

//     }
// }

// start()


///////////////////// more clener


// const util = require('util')
// const readFilePromis = util.promisify(fs.readFile)  
// const writeFilePromis = util.promisify(fs.writeFile)  





// const start = async()=>{
//     try{
//         const firstFile =await readFilePromis('./content/first.txt', 'utf8')
//         const secondFile =await readFilePromis('./content/second.txt','utf8')
//         await writeFilePromis('./content/result-upadet-code-sync.txt',`This is Updated code and clean code: ${firstFile} ${secondFile}`)
//         console.log(firstFile)
//         console.log(secondFile)
//     }catch(error){

//         console.log(error)

//     }
// }

