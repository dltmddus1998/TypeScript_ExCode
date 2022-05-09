// Java: Exception
// JavaScript: Error

// Error(Excpetion) Handling : try -> catch -> finally 

function readFile(fileName: string): string {
    if (fileName === 'not exist!💩') {
        throw new Error(`file not exist! ${fileName}`);
    }
    return `file contents🗒`;
}

function closeFile(fileName: string) {
    //
}

function run() {
    const fileName = 'not exist!💩';

    try {
        console.log(readFile(fileName));
    } catch(err) {
        console.log(`caught!!`); 
        return;
    } finally {
        closeFile(fileName);
        console.log(`closed!!`);
    }
}

run();