import React from 'react'
import { connect } from 'react-redux'
import {useSelector, useDispatch} from "react-redux";
import { addBook, deleteBook } from '../store/actions/bookAction';

//=================NO REACT HOOKS=================

// const BookApp = ({ books, addBook, deleteBook }) => {

//     const addNewBook = () => {
//         const data = {
//           id:3,
//           name: "NEW BOOK",
//         }
//         addBook(data)
//       }
    
//     return (
//         <div>
//             <h1>Book Library</h1>
//             <button onClick={addNewBook}>add</button>
//             {books.map(data =>
//                 <div key={data.id}>
//                     <h4>{data.name}</h4>
//                     <button onClick={() => deleteBook(data.id)}>delete</button>
//                 </div>
//             )}
//         </div>
//     )
// }

// const mapStateToProps = (state) => ({
//     books: state.bookReducer.booksData
// })

// export default connect(mapStateToProps,{addBook,deleteBook})(BookApp)

//=================REACT HOOKS=================

const BookApp = () => {
    const books = useSelector(state => state.bookReducer.booksData)
    const dispatch = useDispatch()

    const addNewBook = () => {
        const data = {
          id:3,
          name: "NEW BOOK",
        }
        dispatch(addBook(data))
      }
    
    return (
        <div>
            <h1>Book Library</h1>
            <button onClick={addNewBook}>add</button>
            {books.map(data =>
                <div key={data.id}>
                    <h4>{data.name}</h4>
                    <button onClick={() => dispatch(deleteBook(data.id))}>delete</button>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    books: state.bookReducer.booksData
})

export default connect(mapStateToProps,{addBook,deleteBook})(BookApp)