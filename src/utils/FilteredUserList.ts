import { IDNameList } from "../types/index";

const FilteredUserList = (data: IDNameList, letter: any) => {
  const filteredData = data?.filter(([id, name]) => {
    let inputText = new RegExp(".");
    let numberCheck = new RegExp(".");
    let upperCheck = new RegExp(".");
    let lowerCheck = new RegExp(".");

    if (letter.searchBar.length > 0) {
      inputText = new RegExp(letter.searchBar, "i");
    }

    if (letter.selectedDigits.length > 0) {
      numberCheck = new RegExp("[" + letter.selectedDigits.join("") + "]");
    }

    if (letter.selectedLowerCases.length > 0) {
      lowerCheck = new RegExp("[" + letter.selectedLowerCases.join("") + "]");
    }

    if (letter.selectedUpperCases.length > 0) {
      upperCheck = new RegExp("[" + letter.selectedUpperCases.join("") + "]");
    }

    return (
      numberCheck.test(id) &&
      upperCheck.test(id) &&
      lowerCheck.test(id) &&
      inputText.test(name)
    );
  });

  return filteredData;
};

export default FilteredUserList;
