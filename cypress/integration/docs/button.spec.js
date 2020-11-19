describe('Button Docs Page', () => {
    before(() => {
      cy.visit('/src-button-button')
    })
  
    it('it has title Button', () => {
      cy.get('#button').then(($btn)=>{
          expect($btn).to.have.text('Button')
      })
    })

    it('it has section Usage', () => {
        cy.get('#usage').should('exist')
    })

    it('it has section API', () => {
        cy.get('#api').should('exist')
    })

    it('it has section Props', () => {
        cy.get('#props').should('exist')
    })

    it('it has Default button', () => {
        cy.get('button').contains('Default').should('exist')
    })

    it('it has Disabled button and it is disabled', () => {
        cy.get('button').contains('Disabled').should('be.visible') 
    })

    it('it has Fullwidth button and it is full width', () => {
        cy.get('button').contains('Full Width').should('not.have.css', 'width', 'auto')
    })

    it('it has Import stated', () => {
        cy.contains("import { Button } from 'react95'").should('exist')
    })
  })