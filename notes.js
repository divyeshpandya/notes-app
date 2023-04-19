const fs = require('fs')
const chalk = require('chalk') 


const addNote = (title,body) => {

    const notes = loadNotes()
    const duplicateNote = notes.find(note=> note.title === title)

    if(!duplicateNote){
        notes.push({
            'title' : title,
            'body' : body
        })
        saveNotes(notes)
        console.log(chalk.cyan.bold.inverse('Note saved successfully'))
    }
    else{
        console.log(chalk.red.bold.inverse('Note title already taken!!'))
    }

}

const removeNote = (title)=>{

    const notes = loadNotes()
    const filteredData = notes.filter((note)=> note.title !== title)
    if(filteredData.length === notes.length){
        console.log(chalk.red.inverse.bold('No note found!!'))
    }
    else{
        saveNotes(filteredData)
        console.log(chalk.green.inverse.bold('Note removed!!'))
    }

}

const listNotes = ()=>{

    console.log(chalk.cyan.bold('Your Notes'))
    const notes = loadNotes()
    notes.forEach(note => console.log(note.title))

}

const readNotes = (title) => {

    const notes = loadNotes()
    const note = notes.find(note=> note.title === title )
    if(!note)
        console.log(chalk.red.inverse.bold('No note found!'))
    else{
        console.log(chalk.cyan.inverse.bold(note.title)) 
        console.log( note.body)
    } 
}

const saveNotes = (notes)=>{

    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)

}

const loadNotes = ()=>{
    
    try{
        const JsonBuffer = fs.readFileSync('notes.json')
        const JsonString = JsonBuffer.toString()
        return JSON.parse(JsonString)
    }
    catch (e) {
        return []
    }

}

module.exports = {

    addNote : addNote,
    removeNote: removeNote,
    listNotes: listNotes, 
    readNotes: readNotes,
}
