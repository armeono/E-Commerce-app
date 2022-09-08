import {FunctionComponent} from 'react'; 
import {SearchStyled} from './Search.styled';

interface SearchProps {
    icon?: boolean
}
 
const Search: FunctionComponent<SearchProps> = ({icon}) => {
    return (
        <SearchStyled placeholder='Search' icon={icon}/>
      );
}
 
export default Search;