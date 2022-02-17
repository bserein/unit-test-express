const sut = require("../src/index") //system under test, is meant to test dependencies
const supertest = require("supertest") //downloads a requests and tests it /   yarn add -D supertest <-- this is how you add it to test it


describe("Verifies all the endpoints", () => {
    it("should return Hello Darkness", async () => {
        //Arrange
        const request = supertest(sut)
        const expectedResult = "Hello Darkness"
        //Act
        const result = await request.get("/") 
        const actualResult = result.text 

        //Assert
        expect(actualResult).toBe(expectedResult)
    })
})
//this api is tested by checking to see if it reads the hello darkness