const User = require('./user');

describe('User', () => {
  
    test('', () => {
        const user = new User('Mi', 'Jean', 'azed@hotmail.com', new Date(2000, 1, 1));
        expect(user.isValid()).toBe(true);
    });

    test('', () => {
        const user = new User('Mi', 'Jean', 'azed@gmail.com', new Date(2015, 1, 1));
        expect(user.isValid()).toBe(false);
    });

    test('', () => {
        const user = new User('Mi', 'Jean', 'invalid-', new Date(2000, 1, 1));
        expect(user.isValid()).toBe(false);
    });

    test('', () => {
        const user = new User('0', 'Jean', 'azed@zaaz.com', new Date(2000, 1, 1));
        expect(user.isValid()).toBe(false);
    });

    test('', () => {
        const user = new User('rie', '', 'azed@za!8z.com', new Date(2000, 1, 1));
        expect(user.isValid()).toBe(false);
    });
});
