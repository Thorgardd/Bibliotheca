import {createStore} from "vuex";
import {books} from "@/data/books";

const bookStore = createStore({
    state: {
        websiteBookList: books.map((el) => {
            return el
        }),
        userBookList: [],
    },
    getters: {
        getWebsiteBookList: (state) => {
            return state.websiteBookList;
        },
        getUserBookList: (state) => {
            return state.userBookList;
        }
    },
    mutations: {
        AddBookToUserBookList: (state, payload) => {
            state.userBookList.push(payload)
            console.log(JSON.parse(JSON.stringify(state.userBookList)))
        },
        RemoveBookFromUserBookList: (state, payload) => {
            let index = state.userBookList.findIndex(data => data.name === payload.name)
            state.userBookList.splice(index);
            console.log(JSON.parse(JSON.stringify(state.userBookList)))
        }
    },
    actions: {

    },
    modules: {

    }
})

export default bookStore