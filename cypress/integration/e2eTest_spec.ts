describe('e2e testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('Test input 1 exists', () => {
    cy.get('#input1').should('be.visible');
  });

  it('Test input 2 exists', () => {
    cy.get('#input2').should('be.visible');
  });

  it('Test operationSelector exists', () => {
    cy.get('#operationSelector').should('be.visible');
  });

  it('Test calcButton exists', () => {
    cy.get('#calcButton').should('be.visible');
  });

  it('Test 2 + 3 = 5', () => {
    cy.get('#input1').clear().type('2');
    cy.get('#operationSelector').select('+');
    cy.get('#input2').clear().type('3');
    cy.get('#calcButton').click();

    cy.get('#input3').should('have.value', '5');
  });

  it('Test 5 - 3 = 2', () => {
    cy.get('#input1').clear().type('5');
    cy.get('#operationSelector').select('-');
    cy.get('#input2').clear().type('3');
    cy.get('#calcButton').click();

    cy.get('#input3').should('have.value', '2');
  });

  it('Test 5 * 5 = 25', () => {
    cy.get('#input1').clear().type('5');
    cy.get('#operationSelector').select('*');
    cy.get('#input2').clear().type('5');
    cy.get('#calcButton').click();

    cy.get('#input3').should('have.value', '25');
  });

  it('Test 12 / 6 = 2', () => {
    cy.get('#input1').clear().type('12');
    cy.get('#operationSelector').select('/');
    cy.get('#input2').clear().type('6');
    cy.get('#calcButton').click();

    cy.get('#input3').should('have.value', '2');
  });

  it('Test letters input in input 1', () => {
    cy.get('#input1').clear().type('qwerty');

    cy.get('#input1').should('have.value', '');
  });

  it('Test letters input in input 2', () => {
    cy.get('#input2').clear().type('qwerty');

    cy.get('#input2').should('have.value', '');
  });

  it('Test division by 0', () => {
    cy.get('#operationSelector').select('/');
    cy.get('#input2').clear().type('0');

    cy.get('#input2').should('have.value', '');
  });

  it('Green background when result is 2', () => {
    cy.get('#input1').clear().type('1');
    cy.get('#operationSelector').select('+');
    cy.get('#input2').clear().type('1');
    cy.get('#calcButton').click();

    cy.get('#input3').should('have.css', 'background-color', 'rgb(0, 128, 0)');
  });

  it('Black background when result is 0', () => {
    cy.get('#input1').clear().type('1');
    cy.get('#operationSelector').select('-');
    cy.get('#input2').clear().type('1');
    cy.get('#calcButton').click();

    cy.get('#input3').should('have.css', 'background-color', 'rgb(0, 0, 0)');
  });

  it('Red background when result is -1', () => {
    cy.get('#input1').clear().type('1');
    cy.get('#operationSelector').select('-');
    cy.get('#input2').clear().type('2');
    cy.get('#calcButton').click();

    cy.get('#input3').should('have.css', 'background-color', 'rgb(255, 0, 0)');
  });
})
