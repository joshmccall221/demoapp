/// <reference types="cypress" />

import mocker from "mocker-data-generator";

let mockRequestResponse
mocker()
  .schema(
    'request',
    {
      c_ticket_number: { faker: 'name.firstName' },
      path: { faker: 'name.lastName' },
      s_ticket_number: { faker: 'address.country' },
      s_time: { faker: 'date.past' },
      u_time: { faker: 'name.firstName' },
      u_by: { faker: 'name.lastName' },
      status: { faker: 'address.country' },
    },
    200)
  .build()
  .then(({ request }: any) => mockRequestResponse = request)
  .catch((reason: any) => { console.log({ reason }); });

describe('dashboard', () => {
  beforeEach(() => {
    console.log({ mockRequestResponse })
    //https://docs.cypress.io/api/commands/intercept#Syntax
    cy.intercept('microsoft.com/api/requests', { statusCode: 200, body: mockRequestResponse });
    cy.visit('localhost:3000/')
  })

  it('displays dashboard', () => {
    cy.get('#header3-c_ticket_number-name').contains('Change Ticket Number')

    cy.get('.ms-DetailsRow-fields > [data-automation-key="c_ticket_number"]')
      .each((el: any, index: number) => { cy.wrap(el).contains(mockRequestResponse[index]["c_ticket_number"]) })
  })
})