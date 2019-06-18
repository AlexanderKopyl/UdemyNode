const yargs = require('yargs');
const chalk = require('chalk');
const getNotes = require('./notes');




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
   handler: function (argv) {
       console.log('Title: ' + argv.title );
       console.log("Description: "+ argv.body);
   }
});

//Create add command
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Remove a note!')
    }
});
//Create add command
yargs.command({
    command:'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Read a note')
    }
});
//Create add command
yargs.command({
    command:'list',
    describe: 'Add a new note',
    handler: function () {
        console.log('Show all note!')
    }
});
yargs.parse();
// console.log(yargs.argv);
