import { LightningElement, track } from "lwc";

export default class App extends LightningElement {
  @track values = [
    {
      Name: "John Smith",
      Town: "Macelsfield",
      County: "Cheshire",
      Age: 52,
      Profession: "Brewer",
      AnualIncome: "£47,000",
      MatitalStatus: "Married",
      Children: 2
    },
    {
      Name: "Jenny Jones",
      Town: "Threlkeld",
      County: "Cumbria",
      Age: 34,
      Profession: "Shepherdess",
      AnualIncome: "£28,000",
      MatitalStatus: "Single",
      Children: 0
    },
    {
      Name: "Peter Frampton",
      Town: "Avebury",
      County: "Wiltshire",
      Age: 57,
      Profession: "Musician",
      AnualIncome: "£124,000",
      MatitalStatus: "Married",
      Children: 4
    },
    {
      Name: "Simon King",
      Town: "Malvern",
      County: "Worchestershire",
      Age: 48,
      Profession: "Naturalist",
      AnualIncome: "£65,000",
      MatitalStatus: "Married",
      Children: 2
    },
    {
      Name: "Lucy Diamond",
      Town: "St Albans",
      County: "Hertfordshire",
      Age: 67,
      Profession: "Pharmasist",
      AnualIncome: "Retired",
      MatitalStatus: "Married",
      Children: 3
    },
    {
      Name: "Austin Stevenson",
      Town: "Edinburgh",
      County: "Lothian",
      Age: 36,
      Profession: "Vigilante",
      AnualIncome: "£86,000",
      MatitalStatus: "Single",
      Children: 0
    },
    {
      Name: "Wilma Rubble",
      Town: "Bedford",
      County: "Bedfordshire",
      Age: 43,
      Profession: "Housewife",
      AnualIncome: "N/A",
      MatitalStatus: "Married",
      Children: 1
    },
    {
      Name: "Kat Dibble",
      Town: "Manhattan",
      County: "New York",
      Age: 55,
      Profession: "Policewoman",
      AnualIncome: "$36,000",
      MatitalStatus: "Single",
      Children: 1
    },
    {
      Name: "Henry Bolingbroke",
      Town: "Bolingbroke",
      County: "Lincolnshire",
      Age: 45,
      Profession: "Landowner",
      AnualIncome: "$1,000",
      MatitalStatus: "Married",
      Children: 6
    },
    {
      Name: "Alan Brisingamen",
      Town: "Alderley",
      County: "Cheshire",
      Age: 35,
      Profession: "Arcanist",
      AnualIncome: "$-10,000",
      MatitalStatus: "Single",
      Children: 0
    }
  ];

  handleAdd() {
    window.console.log(
      this.values.push({
        Name: "John Smith4",
        Town: "Macelsfield",
        County: "Cheshire",
        Age: 52,
        Profession: "Brewer",
        AnualIncome: "£47,000",
        MatitalStatus: "Married",
        Children: 2
      })
    );
  }
}
