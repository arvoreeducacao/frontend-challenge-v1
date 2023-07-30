import styled from "styled-components";
import Search from "../search";

export const ContentAutocomplete = styled.div(()=> ({
  position: 'relative',
  width: '100%',
  '@media (min-width: 992px)': {
    width: '70%',
  },
}));

export const AutompleteSearch = styled(Search)(()=> ({
  zIndex: 10,
  position: 'relative',
  '& svg': {
    zIndex: 'inherit',
  }
}));


export const ContentSuggestions = styled.ul(()=> ({
  position: 'absolute',
  zIndex: 1,
  width: '100%',
  backgroundColor: '#F1F7FC',
  border: '1px solid #DEE1E6',
  borderBottomRightRadius: '25px',
  borderBottomLeftRadius: '25px',
  padding: '32px 16px 16px',
  top: '25px',
  boxSizing: 'border-box',
}));

export const Suggestions = styled.li(()=> ({
  listStyle: 'none',
  padding: '0 16px',
  cursor: 'pointer',
  color: '#406a76',
  outline: '#DEE1E6',
  lineHeight: '300%',
  '&:not(:first-child)': {
    borderTop: '1px solid #DEE1E6',
  },

  '&:hover': {
    backgroundColor: '#DEE1E6',
  }
}));