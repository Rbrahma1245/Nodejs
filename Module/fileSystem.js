const fs = require("fs");

// let data= fs.readFileSync('./readme.txt', 'utf-8')

// // console.log(data.toString());    // OR We can write like that , we don't need to give utf-8
// console.log(data);

// let data1= fs.readFile('./readme.txt', 'utf-8', (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })

// let dataText = async () => {
//  let data1= await fs.readFile("./readme.txt", "utf-8", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       return data
//     }
//   });
//   return data1
// };

// console.log(dataText())

let data = fs.readFileSync("./readme.txt", "utf-8");

// // -------------File Created using synchronous method-------------

// fs.writeFileSync('./demo.txt', "HELLO FROM WRITE FILE")
// console.log(('file created'));

// //----------File Created using Async Method ---------------------

// fs.writeFile('./demo2.txt', 'Welcome to Node Js', (error => {
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("File Created");
//     }
// }))

// -------Append --------

// fs.appendFileSync("./demo2.txt", "File added by Append")           //Using Sync

// fs.appendFile("./demo2.txt", " ASYNC METHOD", (error)=>{             //Using Async
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("file updated");
//     }
// })

//---------copyfile--------

// //-------Follow DEEP COPY (copyFile)-------

// fs.copyFile("demo.txt", 'copy.txt', (error=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("File created");
//     }
// }))

// // ----------Follow SHALLOW COPY (link)----------

// fs.link("demo2.txt", 'link.txt', (error=>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("Linking Done");
//     }
// }))

// //--------Rename a File ---------

// fs.rename("./demo.txt", "jsp.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully Rename");
//   }
// });

// //-------mkdir(Create Folder)-----------

// fs.mkdir("./Nodemon", (err=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Folder Created");
//     }
// }))

// //-------Delete File(unlink) ------------

// fs.unlink("./demo2.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File deleted");
//   }
// });


//-------Delete Folder(rmdir) ------------

// fs.rmdir("./Nodemon", (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Folder deleted");
//     }
//   });



