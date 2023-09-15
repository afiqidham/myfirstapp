function BookList({ bookList }) {
    return(
        <ul>
            {bookList.map((item) => {
              return <li key={item.id}>{item.title}</li>
            })}
        </ul>
    );
}

export default BookList;