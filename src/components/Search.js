import React from 'react'

const Search = () => {
    const handleSubmit = () => {
        window.alert('Submitted');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search..." value="" />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default Search
