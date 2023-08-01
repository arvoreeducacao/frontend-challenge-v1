import React, { useCallback } from 'react';
import { ContentAutocomplete, AutompleteSearch, ContentSuggestions, Suggestions } from './styles';
import { AutocompleteProps } from './types';

const Autocomplete: React.FC<AutocompleteProps> = props => {
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  
  const onFocus = useCallback(() => {
    const { searchProps: {value: term}, suggestions  } = props;
    if(term && suggestions) {
      setShowSuggestions(true);
    }
  }, [setShowSuggestions, props.searchProps.value, props.suggestions]);

  const onBlur = useCallback(() => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 175);
  }, [setShowSuggestions]);

  const onInputChange = useCallback( (e:any) => {
    const { searchProps: { onChange: _onInputChange} } = props;
    _onInputChange?.(e);
    onFocus();
    props.onChange?.(e, null);
  } , [props.searchProps.onChange, onFocus]);

  return (
    <ContentAutocomplete onMouseLeave={onBlur} onMouseEnter={onFocus}>
      <AutompleteSearch {...props.searchProps} onChange={onInputChange} onBlur={onBlur} />
      {showSuggestions && (
        <ContentSuggestions>
          {props.loading && (
            <Suggestions>...</Suggestions>
          )}
          {(!props.loading && !props.suggestions?.length) && (
            <Suggestions>Nenhum resultado encontrado</Suggestions>
          )}
          {!props.loading && props.suggestions?.map((suggestion, index) => (
            <Suggestions key={index} onClick={event => {
              onBlur();
              props.onChange?.(event, suggestion);
            }}>{suggestion.label}</Suggestions>
          ))}
        </ContentSuggestions>
      )}
    </ContentAutocomplete>
  )
}

export default Autocomplete;