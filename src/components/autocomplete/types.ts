import { SearchProps } from "../search/types";

export type Suggestion<T> = {
  label: string,
  value: T,
}

export type AutocompleteProps = {
  value?: any,
  searchProps: SearchProps,
  onChange?: (event: any, newValue: Suggestion<any> | null) => void,
  suggestions?: Suggestion<any>[],
  loading?: boolean,
}