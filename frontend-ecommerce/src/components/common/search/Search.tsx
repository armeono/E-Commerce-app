import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { SearchStyled } from "./Search.styled";

interface SearchProps {
  icon?: boolean;
  value?: string | undefined;
  setSearchTerm?: Dispatch<SetStateAction<string | undefined>>;
}

const Search: FunctionComponent<SearchProps> = ({
  icon,
  value,
  setSearchTerm,
}) => {
  return (
    <SearchStyled
      placeholder="Search"
      icon={icon}
      value={value}
      onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
    />
  );
};

export default Search;
