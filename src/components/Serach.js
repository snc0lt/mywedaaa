import React from 'react'

const Search = ({query, setQuery, search}) => {
  
  return (
    <div className="row justify-content-md-center">
      <div className="col-md-6">
        <div className="input-group mb-3">
          <input type="text" className="form-control" 
          placeholder="Search" onChange={(e) => setQuery(e.target.value)} value={query} onKeyPress={search}/>
        </div>
      </div>
    </div>
  )
}

export default Search
