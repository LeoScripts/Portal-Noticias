import './style.scss'

export const SearchInput = ({handleChange,searchValue, placeholder}) => {
  return (
    <input
      placeholder={placeholder}
      className='searchInput'
      onChange={handleChange}
      value={searchValue}
      type="search" 
    />
  );
}