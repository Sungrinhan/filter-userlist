import "./App.css";

export const App = () => {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const upperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  const lowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  const idNameList: [string, string][] = [
    ["E3hI0gAc7D", "Nico Burris"],
    ["ABCDEFGHIJ", "Warren Bullock"],
  ];

  return (
    <div className="app">
      <div id="controls">
        <input id="searchbar" type="text" />

        <div id="selectbox">
          <div className="selectbox">
            <ul>
              {digits.map((digit) => (
                <li key={digit}>
                  <input id={digit} type="checkbox" />
                  <label htmlFor={digit}>{digit}</label>
                </li>
              ))}
            </ul>
          </div>

          <div className="selectbox">
            <ul>
              {upperCases.map((letter) => (
                <li key={letter}>
                  <input id={letter} type="checkbox" />
                  <label htmlFor={letter}>{letter}</label>
                </li>
              ))}
            </ul>
          </div>

          <div className="selectbox">
            <ul>
              {lowerCases.map((letter) => (
                <li key={letter}>
                  <input id={letter} type="checkbox" />
                  <label htmlFor={letter}>{letter}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ul className="idnamelist">
        {idNameList.map(([id, name]) => (
          <li key={id}>{`${id} - ${name}`}</li>
        ))}
      </ul>
    </div>
  );
};
