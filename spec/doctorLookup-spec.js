import * as doctorLookup from './../src/doctorLookup.js';

describe('Doctor Lookup', function() {
  it('should search for doctors by name', function() {
    let output = doctorLookup.searchByName("Johnson");
    console.log("I'm here");
    console.log(output);
    expect(output).toEqual("");
  });
});
