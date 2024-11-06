import createNoteHandler from '../../handler/note/create_note_handler.js'
import findAllNoteHandler from '../../handler/note/find_all_note_handler.js'
import findNoteByIdHandler from '../../handler/note/find_note_by_id_handler.js'
import updateNoteByIdHandler from '../../handler/note/update_note_by_id_handler.js'
import deleteNoteByIdHandler from '../../handler/note/delete_note_by_id_handler.js'

export default [
    {
        method: 'POST',
        path: '/notes',
        handler: createNoteHandler
        // uncomment to use cors for route only
        // options: {
        //     cors: {
        //         origin: ['*']
        //     }
        // }
    },
    {
        method: 'GET',
        path: '/notes',
        handler: findAllNoteHandler
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: findNoteByIdHandler
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: updateNoteByIdHandler
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler
    }
]
