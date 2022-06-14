/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
var request = {
  c_ticket_number: {
      faker: 'name.firstName'
  },
  path: {
      faker: 'name.lastName'
  },
  s_ticket_number: {
      faker: 'address.country'
  },
  s_time: {
      faker: 'date.past'
  },
  u_time: {
      faker: 'name.firstName'
  },
  u_by: {
      faker: 'name.lastName'
  },
  status: {
      faker: 'address.country'
  },
}



describe('dashboard', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.intercept('microsoft.com/api/requests', {
      statusCode: 200,
      body: []
    })
    
    cy.visit('localhost:3000/')
  })

  it('displays dashboard', () => {
    cy.get('#header3-c_ticket_number-name').contains('Change Ticket Number')
    cy.get('#row93-0 > .ms-DetailsRow-fields > [data-automation-key="c_ticket_number"]')
  })

  
})
