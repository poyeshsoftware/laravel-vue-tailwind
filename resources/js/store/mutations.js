// = mutations - update data
export default {
    SET_CUSTOM_ERROR(state, data) {
        let customErrorsMsg = state.customErrorsMsg.slice()
        // slice() is a tip to clone object array from state .
        customErrorsMsg.unshift(data)
        state.customErrorsMsg = customErrorsMsg
    },
    SET_CATEGORIES(state, data) {
        state.categories = data
    },
    PREPEND_CATEGORY(state, data) {
        let categories = state.categories.slice()
        categories.push(data)
        state.categories = categories
    },
    UPDATE_CATEGORY(state, data) {
        state.categories = state.categories.map((p) => {
            if (p.id === data.id) {
                return data
            }
            return p
        })
    },
    REMOVE_CATEGORY(state, data) {
        let index = state.categories.findIndex(eq => eq.id === data.id)
        state.categories.splice(index, 1);
    },

    SET_BOOKS(state, data) {
        state.books = data
    },
    PREPEND_BOOK(state, data) {
        let books = state.books.slice()
        books.push(data)
        state.books = books
    },
    UPDATE_BOOK(state, data) {
        state.books = state.books.map((p) => {
            if (p.id === data.id) {
                return data
            }
            return p
        })
    },
    REMOVE_BOOK(state, data) {
        let index = state.books.findIndex(eq => eq.id === data.id)
        state.books.splice(index, 1);
    },
}
