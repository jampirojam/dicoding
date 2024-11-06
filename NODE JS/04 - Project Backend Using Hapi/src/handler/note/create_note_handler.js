import { nanoid } from 'nanoid'
import notes from '../../entity/note/note.js'

const createNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload

    const id = nanoid(16)
    const createdAt = new Date().toISOString()
    const updatedAt = createdAt

    const newNote = {
        title, tags, body, id, createdAt, updatedAt
    }

    notes.push(newNote)

    const isSuccess = notes.filter((note) => note.id === id).length > 0

    if (isSuccess) {
        const response = h.response({
            code: '201',
            status: 'success',
            message: 'Catatan berhasil ditambahkan',
            data: {
                noteId: id
            }
        })
        response.header('Access-Control-Allow-Origin', '*')
        response.code(201)
        return response
    }
    const response = h.response({
        code: '500',
        status: 'fail',
        message: 'Catatan gagal ditambahkan'
    })
    response.header('Access-Control-Allow-Origin', '*')
    response.code(500)
    return response
}

export default createNoteHandler
