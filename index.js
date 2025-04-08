const fs = require('fs');
const { Command } = require('commander');
const program=new Command();
program
    .name('counter')
    .description('CLI to do file based tasks')
    .version('0.8.0');

program.command('count')
    .description('Count the number of words in a file')
    .argument('<file>', 'File to count words in')
    .action((file)=>{
            FileSystem.readFile(file, 'utf8', (err, data) => {
                if(err){
                    console.log(err);
                }else{
                    const lines=data.spilt('\n').length;
                    console.log('there are ${lines} lines in the ${file}');
                }
        } 
);
});

program.parse();