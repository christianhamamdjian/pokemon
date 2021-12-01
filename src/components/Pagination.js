import React from 'react'

const Pagination = ({ gotoPrevPage, gotoNextPage }) => {
    return (
        <>
            {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
            {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
        </>
    )
}

export default Pagination
