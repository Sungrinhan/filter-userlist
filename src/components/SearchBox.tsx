import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import useCheckInput from "../hooks/useCheckInput";
import useGetLetterList from "../hooks/useGetLetterList";

import { changeSelectedLetters } from "../store/reducers/user";
import { RootState } from "../store";

const ControlsContainer = () => {
  const dispatch = useDispatch();
  const { list, isLoading, error } = useGetLetterList();

  const [search, setSearch] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.trim());
  };

  // digit selectbox
  const { checkedList: digitCheckList, inputProps: digitProps } =
    useCheckInput();

  // upper selectbox
  const { checkedList: upperCheckList, inputProps: upperProps } =
    useCheckInput();

  // lower selectbox
  const { checkedList: lowerCheckList, inputProps: lowerProps } =
    useCheckInput();

  const payload = {
    searchBar: search,
    selectedDigits: [...digitCheckList],
    selectedLowerCases: [...lowerCheckList],
    selectedUpperCases: [...upperCheckList],
  };

  useEffect(() => {
    dispatch(changeSelectedLetters(payload));
  }, [dispatch, payload]);

  return (
    <div id="controls">
      <input id="searchbar" type="text" onChange={handleInputChange} />

      <div id="selectbox">
        <div className="selectbox">
          <ul>
            {list.digits.map((digit) => (
              <li key={digit}>
                <input id={digit} type="checkbox" {...digitProps(digit)} />
                <label htmlFor={digit}>{digit}</label>
              </li>
            ))}
          </ul>
        </div>

        <div className="selectbox">
          <ul>
            {list.upperCases.map((letter) => (
              <li key={letter}>
                <input id={letter} type="checkbox" {...upperProps(letter)} />
                <label htmlFor={letter}>{letter}</label>
              </li>
            ))}
          </ul>
        </div>

        <div className="selectbox">
          <ul>
            {list.lowerCases.map((letter) => (
              <li key={letter}>
                <input id={letter} type="checkbox" {...lowerProps(letter)} />
                <label htmlFor={letter}>{letter}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ControlsContainer;
