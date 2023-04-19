const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')
const { listNotes, readNotes } = require("./notes")


yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body of the note',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {notes.addNote(argv.title,argv.body)}
    
})

yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title:{
            describe: 'Title of note to be deleted',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists all the notes',
    handler() {
       notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Reads a note',
    builder: {
        title: {
            describe: 'display the note with given title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        notes.readNotes(argv.title)
    } 
})

yargs.parse()