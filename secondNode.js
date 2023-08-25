let findMax = (x)=>{
    let res= x.reduce((accum, elem)=>{
        if(accum< elem){
            accum = elem
        }
        return accum
    })
    return res
}

let findMin = (x)=>{
    let res= x.reduce((accum, elem)=>{
        if(accum> elem){
            accum = elem
        }
        return accum
    })
    return res
}

module.exports = {findMax, findMin}