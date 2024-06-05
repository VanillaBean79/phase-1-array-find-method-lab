
function superbowlWin(records){
    console.log(records)
const foundRecord = records.find(record => record.result === "W")
console.log(foundRecord)
if(foundRecord === undefined){
    
    return undefined
}
return foundRecord.year

}






   
      

