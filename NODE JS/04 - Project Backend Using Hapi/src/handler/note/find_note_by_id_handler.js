import notes from '../../entity/note/note.js'

const findNoteByIdHandler = (request, h) => {
    const { id } = request.params

    const note = notes.filter((n) => n.id === id)[0]

    if (note !== undefined) {
        return {
            status: 'success',
            data: {
                note
            }
        }
    }

    const response = h.response({
        status: 'fail',
        message: 'Catatan tidak ditemukan'
    })
    response.code(404)
    return response
}

export default findNoteByIdHandler
