export default {
    async getAllCategories({commit}) {
        let response = await axios.get('api/categories')
        commit('SET_CATEGORIES', response.data.data)
    },
    async AddNewCategory({commit}, data) {
        let response = await axios.post('api/categories', data)
        commit('PREPEND_CATEGORY', response.data.data)
    },
    async setSortCategories({commit}, data) {
        let response = await axios.post('api/categories/resort', data)
        commit('SET_CATEGORIES', response.data.data)
    },
    async UpdateCategory({commit}, data) {
        let response = await axios.post('api/categories/update', data)
        commit('UPDATE_CATEGORY', response.data.data)
    },
    async RemoveCategory({commit}, data) {
        let response = await axios.post('api/categories/remove', data)
        commit('REMOVE_CATEGORY', response.data.data)
    },

    async getAllBooks({commit}) {
        let response = await axios.get('api/books')
        commit('SET_BOOKS', response.data.data)
    },
    async AddNewBook({commit}, data) {
        let response = await axios.post('api/books', data)
        commit('PREPEND_BOOK', response.data.data)
    },
    async setSortBooks({commit}, data) {
        let response = await axios.post('api/books/resort', data)
        commit('SET_BOOKS', response.data.data)
    },
    async UpdateBook({commit}, data) {
        let response = await axios.post('api/books/update', data)
        commit('UPDATE_BOOK', response.data.data)
    },
    async RemoveBook({commit}, data) {
        let response = await axios.post('api/books/remove', data)
        commit('REMOVE_BOOK', response.data.data)
    }
}
