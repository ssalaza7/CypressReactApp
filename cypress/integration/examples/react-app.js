describe('Automatizar formulario', function() {
	it('Probar el submit del formulario con los campos', function() {
		cy.visit('https://reactapp-040691.firebaseapp.com/exercise');
		cy.get('.Fitness-Add').click();
		cy.get('form > :nth-child(1) > .form-control').type('Cypress');
		cy.get('form > :nth-child(2) > .form-control').type('automated text with cypress');
		cy.get(':nth-child(3) > .form-control').type('https://bestofjs.org/logos/cypress.svg');
		cy.get('.form-row > :nth-child(1) > .form-control').type('#8AD578');
		cy.get('.form-row > :nth-child(2) > .form-control').type('#8AD578');
		cy.get('.btn').click();
		cy.scrollTo('bottom');
	});
});
