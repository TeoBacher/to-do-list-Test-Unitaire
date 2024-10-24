const Item = require('./Items');

describe('Items', () => {
    test('', () => { 
        const now = new Date(); 
        now.setMinutes(now.getMinutes() - 29);
        const item = new Item('Mi','zdekfrfjuhoiafkozjG' ,now);
        expect(item.nameIsValid()).toBe(true);
     })

     test('', () => { 
        const now = new Date(); 
        now.setMinutes(now.getMinutes() - 29);
        const item = new Item('','zdekfrfjuhoiafkozjG' ,now);
        expect(item.nameIsValid()).toBe(false);
     })

     test('', () => { 
        const now = new Date(); 
        now.setMinutes(now.getMinutes() - 29);
        const item = new Item('Mi','zdekfrfjuhoiafkozjG' ,now);
        expect(item.contentIsValid()).toBe(true);
     })

     test('', () => { 
        const now = new Date(); 
        now.setMinutes(now.getMinutes() - 29);
        const item = new Item('Mi','zdekfrfjuhoiafkozjG' ,now);
        expect(item.dateIsValid()).toBe(true);
     })

     test('', () => { 
        const now = new Date(); 
        now.setMinutes(now.getMinutes() - 29);
        const item = new Item('Mi','zdekfrfjuhoiafkozjG' ,'dq');
        expect(item.dateIsValid()).toBe(true);
     })

     test('', () => { 
        const now = new Date(); 
        now.setMinutes(now.getMinutes() - 29);
        const item = new Item('Mi','zdekfrfjuhoiafkozjG' ,now);
        expect(item.isValid()).toBe(true);
     })

     test('', () => { 
        const now = new Date(); 
        now.setMinutes(now.getMinutes() - 29);
        const item = new Item('Mi','zdekfrfjuhoiafkozjG' ,'eqfq');
        expect(item.isValid()).toBe(true);
     })
});