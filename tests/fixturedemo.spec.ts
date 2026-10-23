import{test} from '@playwright/test';


test.beforeEach(async({page})=>{    
    console.log('Before each :Hello World');
    
});

test('Where is my candy',async({page})=>{
    console.log('Finding candy...');
});

test('I am alive',async({page})=>{
    console.log('Test case:I am alive!');
});

test.afterEach(async({page})=>{    
    console.log('After each :Hello World');
    
});

