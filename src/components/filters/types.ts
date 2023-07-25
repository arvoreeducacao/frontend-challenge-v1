export type FilterProps = {
    mainTitle: string
    filters: FilterContentProps
    dispatch: React.Dispatch<React.SetStateAction<boolean>>
    hasSelectedFilters: boolean
    resetFilters: () => void
  }
  
  export type FilterContentProps = {
    price: Price
    availableItems: AvailableItems
    availableFormats: AvailableFormats
  }
  