import React from 'react'

const Pagination = ({ gotoPrevPage, gotoNextPage }) => {
    return (
        <>
            {gotoPrevPage && <button className="btn" onClick={gotoPrevPage}>Previous</button>}
            {gotoNextPage && <button className="btn" onClick={gotoNextPage}>Next</button>}
        </>
    )
}

export default Pagination
