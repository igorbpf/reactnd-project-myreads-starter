import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookButton from './BookButton'

// class Book extends Component {
//     static propType = {
//         book: PropTypes.object.isRequired
//     }
//
//     render() {
//
//         const {title, authors, image} = this.props.book
//
//         console.log(image)
//
//         return (
//
//             <div className="book">
//               <div className="book-top">
//                   <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
//                   <div className="book-shelf-changer">
//                   <select>
//                     <option value="none" disabled>Move to...</option>
//                     <option value="currentlyReading">Currently Reading</option>
//                     <option value="wantToRead">Want to Read</option>
//                     <option value="read">Read</option>
//                     <option value="none">None</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="book-title">{title}</div>
//               <div className="book-authors">{authors}</div>
//             </div>
//
//
//
//
//
//         )
//
//
//
//     }
// }



const Book = ({book}) => {
    const {title, authors, image} = book

    console.log(image)

    return (

        <div className="book">
          <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>

              <BookButton/>

          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>





    )

}

export default Book
