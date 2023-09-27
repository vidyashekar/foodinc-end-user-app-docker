import RegisterPage from './RegisterPage';

describe('Register', () => {
    it('should register with name email and password', () => {
      const register = new RegisterPage();
      register.visit();
      register.fillName("Anna");
      register.fillEmail("anna@example.com");
      register.fillPassword("anna123");
      register.submit();
    });

});