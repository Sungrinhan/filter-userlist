import { useState } from "react";

const useCheckInput = () => {
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  const checkedItemHandler = (value: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedList((prev) => [...prev, value]);

      return;
    }

    if (!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));
      return;
    }

    return;
  };

  const checkHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setIsChecked(!isChecked);
    checkedItemHandler(value, e.target.checked);
  };

  const inputProps = (type: string) => {
    return {
      checked: checkedList.includes(type),
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        checkHandler(e, type),
    };
  };

  return { checkedList, inputProps };
};

export default useCheckInput;
