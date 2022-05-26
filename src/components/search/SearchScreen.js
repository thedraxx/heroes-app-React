import React from 'react'
import { useForm } from '../../hooks/useForm';

export const SearchScreen = () => {

  const [formValues, handleInputChange] = useForm({
    searchText: '',
  })

  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText)
  }

  return (
    <>
      <h1> SearchScreen</h1>
      <div className='row'>
        <div className='col-5'>
          <h4>Search</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder='Search a Hero'
              className='form-control'
              name="searchText"
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              className='btn btn-primary btn-block mt-2'
              type='submit'
            >
              Search...
            </button>
          </form>
        </div>
      </div>
    </>
  )
} 