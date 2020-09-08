function createMenuData(data) {
  let result=[];

  // Iterate through the list
  for (let i=0; i<data.length; i++ ){

    // Check if string is in key/value format
    if (data[i].includes("/")){
      
      // Split string in key/value
      let subStrTitle=data[i].split("/");
      
      // Look into the resulting array for a pre-existent key
      let index=(result.findIndex(element => element.title === subStrTitle[0]));

      // The key is not already present, adding
      if (index===-1){
        let elem={};
        
        // Title content
        elem.title=subStrTitle[0];
        
        // Data content
        elem.data=[];
        elem.data.push(subStrTitle[1])

        result.push(elem);
      } 
      // The key was already there, just adding the new data
      else {
        // Pushing some more stuff into Data
        result[index].data.push(subStrTitle[1]);
      }
    }
  }
  return result;
}


describe("menu Data Generator", () => {
    it("creates correct data structure ", () => {
      const data = [
        "parent1/parent1child",
        "parent1/parent1child2",
        "parent2/parent2child",
        "parent2/parent2child2",
        "parent1/parent1child3",
        "parent3",
        "parent3/parent3child1",
        "parent4"
      ];

      const expectedResult = [
        {
          title: "parent1",
          data: ["parent1child", "parent1child2", "parent1child3"]
        },
        { title: "parent2", data: ["parent2child", "parent2child2"] },
        { title: "parent3", data: ["parent3child1"] }
      ];

      const actualResult = createMenuData(data);
      expect(actualResult).toMatchObject(expectedResult);
    });
  });