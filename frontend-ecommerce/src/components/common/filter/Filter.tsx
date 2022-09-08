import {FunctionComponent} from 'react';
import {FilterStyled} from './Filter.styled';


interface FilterProps {
    placeholder: string,
    options?: string[]
    
}
 
const Filter: FunctionComponent<FilterProps> = ({placeholder, options}) => {


    return ( 
        <FilterStyled icon>
            <option value="" selected>{placeholder}</option>
            {options && options.map(item => (
                <option>{item}</option>
            ))}

        </FilterStyled>
      );
}
 
export default Filter;