describe("TypeScript specs", () => {
	it("should run this test as well", async () => {
		const foo:string = "Foo";
		const bar:number = 45.24;
		foo.should.be.a("string").that.equals("Foo");
		bar.should.be.a("number").that.equals(45.24);
	});
});
