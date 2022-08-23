const addBook = (data) => {
    console.log(data)
    return ({
        type: "ADD_BOOK",
        payload: data
    })
}
const deleteBook = (data) => {
    return ({
        type: "DELETE_BOOK",
        payload: data
    })
}

export { addBook, deleteBook }