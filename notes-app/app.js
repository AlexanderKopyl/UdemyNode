const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes');

// console.log(chalk.green('Success!'));

yargs.version('1.1.0'); // Change version

//Create add command
yargs.command({
   command:'add',
   describe: 'Add a new note',
   builder:{
       title:{
           describe: 'Note title',
           demandOption: true,
           type: 'string'
       },
       body:{
           describe: 'Description title',
           demandOption: true,
           type: 'string'
       }
   },
   handler(argv) {
       notes.addNote(argv.title,argv.body);
   }
});

//Create add command
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});
//Create add command
yargs.command({
    command:'read',
    describe: 'Read a note',
    handler() {
        console.log('Read a note')
    }
});
//Create add command
yargs.command({
    command:'list',
    describe: 'Add a new note',
    handler() {
        console.log('Show all note!')
    }
});
yargs.parse();
// console.log(yargs.argv);
