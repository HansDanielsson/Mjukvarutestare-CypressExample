/// <reference types="cypress" />

describe('template spec', () => {
  /*
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
  */

  beforeEach(() => {
    cy.visit('index.html')
  })

  it('Mata in namn och ålder i form', () => {
    // Skriv in värden
    cy.wait(1000)
    cy.get('#name').type('Hans')
    cy.wait(1000)
    cy.get('#age').type('60')
    cy.wait(1000)

    // Klicka på button
    cy.get('#btnname').click()
    cy.wait(1000)

    // Kolla att meddelandet stämmer
    cy.get('#nameoutput').should('contains.text', 'Hans är 60 år gammal.')
  })

  it('Kontroll av Count', () => {
    cy.get('#btncount').click()
    cy.get('#counteroutput').should('contains.text', '1')

    for (let i = 0; i < 10; i++) {
      cy.get('#btncount').click()
    }

    cy.get('#counteroutput').should('contains.text', '11')
  })
})
