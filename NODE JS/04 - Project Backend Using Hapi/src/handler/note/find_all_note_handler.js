import notes from '../../entity/note/note.js'

const findAllNoteHandler = () => ({
    status: 'success',
    data: {
        notes
    }
})

export default findAllNoteHandler
