import { sortByLastName, contactsGroupMaker } from "./organizedData";
import { contactsList } from "../mocks/data";

describe("test sortByLastName function", () => {
  test("sort array of contact based on lastName field", () => {
    const sortedArray = sortByLastName(contactsList);
    expect(sortedArray[0].name.last).toBe("Adam");
  });
});

describe("test groupedContactsList function", () => {
  test("grouped by first letter in last name", () => {
    const groupedArray = contactsGroupMaker(contactsList);
    const mLetterRecordLength = groupedArray.filter(
      (item) => item.alphabet === "m"
    );
    expect(mLetterRecordLength[0].records.length).toBe(2);
  });
});
