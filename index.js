const { execSync } = require('child_process');

// const commandInvoker =  (command) => {
//     let result =  null;
//     try{
//         result = execSync(command);
//     }
//     catch(Error){
//         result = Error.stdout;
//     }
//     return result;
// };

// function cognidox_transform(filename) {
//     let Path_arr = filename.split(".")
//     let doc_extention = Path_arr[Path_arr.length - 1]
//     command = "cognidox.exe " + Path_arr[0] + "." + doc_extention+ " " + Path_arr[0] + ".pdf";
//     let result = commandInvoker(command);
    
//     console.log(result.toString());
// }

// cognidox_transform("doscumessnt.docx");

const fs = require('fs')

const content = 'Some content!'

try {
  const data = fs.writeFileSync('tes.docx', content)
  //file written successfully
} catch (err) {
  console.error(err)
}