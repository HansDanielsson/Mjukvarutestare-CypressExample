/// <reference types="cypress" />

describe('Simulera UserInput mot textfält', () => {
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
    cy.get('h1').should('contains.text', 'My First Page')
  })

  it('Medieinstitutet som namn', () => {
    cy.get('#name').type('Medieinstitutet')
    cy.get('#btnname').click()
    cy.get('h1').should('contains.text', 'Second Page')
  })

  it('Kontroll av Count', () => {
    // Första klicket
    cy.get('#btncount').click()
    cy.get('#counteroutput').should('contains.text', '1')

    for (let i = 0; i < 10; i++) {
      cy.get('#btncount').click()
    }

    cy.get('#counteroutput').should('contains.text', '11')
  })
})
