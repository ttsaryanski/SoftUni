function extractFile(input) {

    let fileName = input.split('\\').pop();
    
    let idx = fileName.lastIndexOf('.');
    let name = fileName.slice(0, idx);
    let extention = fileName.slice(idx + 1);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extention}`);
    
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');
