describe('user-onboarding', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    const firstNameInput = () => cy.get('input[name=first_name]')
    const lastNameInput = () => cy.get ('input[name=last_name]')
    const email = () => cy.get('input[name=email]')
    const password = () => cy.get('input[name=password]')
    const terms = () => cy.get('input[name=terms]')
    const submitButton = () => cy.get('button[id="submitButton"]')

    it('sanity check', () => {
        expect(1 + 4).to.equal(5)
        expect(3 + 3).not.to.equal(7)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    it('elements are displaying correctly', () => {
        firstNameInput().should('exist')
        lastNameInput().should('exist')
        email().should('exist')
        password().should('exist')
        terms().should('exist')
        submitButton().should('exist')
        cy.contains('submit!').should('exist')
    })

    describe('filling out inputs and canceling', () => {
        it('user can nav', () => {
            cy.url().should('include', 'localhost')
        })

        it('submit button starts out disabled', () => {
            submitButton().should('be.disabled')
        })

        it('user can type input', () => {
            firstNameInput()
            .should('have.value', '')
            .type('alv')
            .should('have.value', 'alv')

            lastNameInput()
            .should('have.value', '')
            .type('toughie')
            .should('have.value', 'toughie')

            email()
            .should('have.value', '')
            .type('alv@toughie.com')
            .should('have.value', 'alv@toughie.com')

            password()
            .should('have.value', '')
            .type('password')
            .should('have.value', 'password')

            terms().should('not.be.checked').click().should('be.checked')
        })

        it('the submit button enables when all inputs are filled', () => {
            firstNameInput().type('alv')
            lastNameInput().type('toughie')
            email().type('alv@toughie.com')
            password().type('pass')
            terms().should('not.be.checked')
            submitButton().should('be.disabled')
        })
    })
})