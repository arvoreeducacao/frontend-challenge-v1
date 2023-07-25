import React from "react";
import {
  Content,
  ContentTitle,
  Button,
  FilterTitle,
  FilterContent,
} from "./styles";
import { FilterProps } from "./types";
import { filtersWithInitialState } from "./constants";

const Filter: React.FC = ({
  mainTitle,
  hasSelectedFilters,
  resetFilters,
}: FilterProps) => {
  const handleToggleCheckbox = () => {
    console.log("click");
  };
  return (
    <Content>
      <ContentTitle>{mainTitle}</ContentTitle>
      {hasSelectedFilters && (
        <Button onClick={resetFilters}>Limpar Filtro</Button>
      )}
      {Object.entries(filtersWithInitialState).map(([filterType, category]) => (
        <div key={filterType}>
          <FilterTitle>{category.title}</FilterTitle>
          <FilterContent>
            <ul>
              {category?.items?.map((item: any) => (
                <li key={item.id}>
                  <input
                    name={item.label}
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleToggleCheckbox()}
                  />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </FilterContent>
        </div>
      ))}
    </Content>
  );
};

export default Filter;
