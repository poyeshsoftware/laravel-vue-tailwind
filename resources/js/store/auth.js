import axios from 'axios'

export default {
    namespaced: true,

    state: {
        user: null,
    },

    getters: {
        authenticated(state) {
            return state.user
        },

        user(state) {
            return state.user
        }
    },

    mutations: {
        SET_USER(state, data) {
            state.user = data
        }
    },

    actions: {
        async signIn({dispatch}, credentials) {
            return new Promise((resolve, reject) => {
                axios.get('sanctum/csrf-cookie').then(async res => {
                    try {
                        await axios.post('api/auth/sign-in', credentials)

                        await dispatch('attempt')
                        resolve();
                    } catch (e) {
                        reject(e);
                        return dispatch('attempt')
                    }
                }).catch((e) => {
                    reject(e);
                    return dispatch('attempt')

                });
            });
        },

        async attempt({commit}) {
            try {
                let response = await axios.get('api/auth/me')
                commit('SET_USER', response.data)
            } catch (e) {
                commit('SET_USER', null)
            }
        },

        signOut({commit}) {
            return axios.post('api/auth/sign-out').then(() => {
                commit('SET_USER', null);
            })
        }
    }
}
