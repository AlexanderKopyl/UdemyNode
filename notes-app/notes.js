const fs = require('fs');
const chalk = require('chalk');

const getNotes =  () => {
  return 'Your notes...'
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find( (note) =>  note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
};

const saveNotes =  (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON)
};


const removeLog =  (title) => {

    try {
        fs.appendFileSync('log.txt', "Title was deleted:" + title + " date-deleted: " + new Date() + '\n');
    } catch (err) {
        /* Handle the error */
        fs.writeFileSync('log.txt', "Title was deleted:" + title + " date-deleted: " + new Date() + '\n')
    }
};


const loadNotes =  () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
};

const removeNote = (title) => {

    const notes = loadNotes();
    const saveNote = notes.filter( (note) => {
        return note.title !== title
    });

    if (notes.length > saveNote.length){
        removeLog(title);
        saveNotes(saveNote);
        console.log(chalk.green.inverse('Note was delete!'));
    } else {
        console.log(chalk.red.inverse('No note found'));
    }
};

const listNote = () =>{
    const notes = loadNotes();
    try {
        notes.forEach((item)=>{
            console.log(item.title)
        })
    }catch (e) {
        console.log([])
    }
};

const readNote = (title) =>{
    const notes = loadNotes();
    const Note = notes.find( (note) =>  note.title === title);

    if(!Note){
        console.log(chalk.red('No note found!'))
    }else {
        console.log(chalk.green(Note.title));
        console.log(chalk.redBright(Note.body));
    }

};
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote
};