import React, { useCallback } from 'react';
import { ContentAutocomplete, AutompleteSearch, ContentSuggestions, Suggestions } from './styles';
import { AutocompleteProps } from './types';

const Autocomplete: React.FC<AutocompleteProps> = props => {
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  
  const onFocus = useCallback(() => {
    const { searchProps: {value: term}, suggestions  } = props;
    if(term && suggestions?.length) {
      setShowSuggestions(true);
    }
  }, [setShowSuggestions, props.searchProps.value, props.suggestions]);

  const onBlur = useCallback(() => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  }, [setShowSuggestions]);

  const onInputChange = useCallback( (e:any) => {
    const { searchProps: { onChange: _onInputChange} } = props;
    _onInputChange?.(e);
    onFocus();
    props.onChange?.(e, null);
  } , [props.searchProps.onChange, onFocus]);

  return (
    <ContentAutocomplete onMouseLeave={onBlur} onMouseEnter={onFocus}>
      <AutompleteSearch {...props.searchProps} onChange={onInputChange}/>
      {showSuggestions && props.suggestions?.length && (
        <ContentSuggestions>
          {props.suggestions.map((suggestion, index) => (
            <Suggestions key={index} onClick={event => {
              props.onChange?.(event, suggestion);
            }}>{suggestion.label}</Suggestions>
          ))}
        </ContentSuggestions>
      )}
    </ContentAutocomplete>
  )
}

export default Autocomplete;