const initialState = {
    booksData: [
        {
            id: 1,
            name: "book1"
        },
        {
            id: 2,
            name: "book2"
        }
    ]
}

const bookReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'ADD_BOOK':
            return {
                ...state,
                booksData: [...state.booksData, payload]
            }
        case 'DELETE_BOOK':
            return {
                ...state,
                booksData: state.booksData.filter(booksData => booksData.id !== payload)
            }
        default:
            return {
                ...state
            }
    }
}

export default bookReducer