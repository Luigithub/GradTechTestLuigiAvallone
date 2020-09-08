function createMenuData(data) {
  let result=[];
  for (let i=0; i<data.length; i++ ){

    if (data[i].includes("/")){
      let subStrTitle=data[i].split("/");
      let index=(result.findIndex(element => element.title ===subStrTitle[0]));
      if (index===-1){
        let elem={};
        elem.title=subStrTitle[0];
        elem.data=[];
        elem.data.push(subStrTitle[1])
        result.push(elem);
      } else {
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