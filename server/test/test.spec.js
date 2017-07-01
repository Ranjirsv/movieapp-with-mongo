let request=require('supertest');
var should = require('chai').should();
let app=require('../index');
var url=request('http://localhost:3000');
describe('Movie App testing',function(err){
    it('Test for status code 200', function(done){
       url
       .get("/search?name=bahubali")
       .expect(200)
       .end(function(err,res){
         if (err) {
                        throw err;
            }
else{
         res.ok.should.equal(true);
     }

         done();
        });
    });
    it('test for type of json', function(){
        url
        .get('/search?name=irumugan')
        .expect(200)
        .end(function(err,res){
            var movieobj=JSON.parse(res);
            expect(typeof(movieobj).to.deep.equal('object'));
            done();
        });
    });
    
});