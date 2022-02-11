const assert = require('chai').assert;
const app = require('../app');


sayHelloResult = app.sayHello()
addNumbersResult = app.addNumbers(5,5);


describe('App', function(){
    describe('sayHello', function(){
        it('sayHello should return hello', function(){        
            assert.equal(sayHelloResult, 'Hello!');
        });
        it('sayHello should return type string', function(){            
            assert.typeOf(sayHelloResult, 'string');
        });
    })
    describe('addNumbers', function(){
        it('addNumber should be 10', function(){         
            assert.equal(addNumbersResult, 10);
        });
        it('addNumber should return type number', function(){            
            assert.typeOf(addNumbersResult, 'number');
        });
    })
    
})
