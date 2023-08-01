import React from 'react'
import Autocomplete from './index'


const RenderAutocomplete = () => {
  const [term, setTerm] = React.useState<string>('')
  return (
    
      <Autocomplete
        searchProps={{
          value: term,
          onChange: (e) => setTerm(e.currentTarget.value),
        }}
        loading={false}
        suggestions={[
          {label: 'suggestion 1', value: 'suggestion 1'},
          {label: 'suggestion 2', value: 'suggestion 2'},
          {label: 'suggestion 3', value: 'suggestion 3'},
        ].filter(s => s.label.includes(term))}
    />)
}

describe('<Autocomplete />', () => {
  beforeEach(() => {
    cy.mount(<RenderAutocomplete />)
  });

  it('Renders the component', () => {
    cy.get('input').should('be.visible')
  })

  it('The Suggestions should not be visible while the user not typing', () => {
    cy.get('ul').should('not.exist')
  });

  it('The Suggestions should be visible while the user typing', () => {
    cy.get('input').should('be.visible').type('suggest');
    cy.get('ul').should('be.visible').find('li').should('have.length', 3)
  });

  it('The Suggestions should render a feddback when no one suggestions is provided', () => {
    cy.get('input').should('be.visible').clear().type('xxxxx');
    cy.get('ul').should('be.visible').find('li').should('have.text', 'Nenhum resultado encontrado');
  })
})