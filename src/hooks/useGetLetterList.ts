import { useEffect, useState } from "react";
import { useGetLetterQuery } from "../store/services/user";

import { LetterList } from "../types";

const useGetLetterList = () => {
  const { data: letterList, isLoading, error } = useGetLetterQuery(null);

  const [list, setList] = useState<LetterList>({
    digits: [],
    upperCases: [],
    lowerCases: [],
  });

  useEffect(() => {
    if (letterList) {
      setList(letterList);
    }
  }, [letterList]);

  return { list, isLoading, error };
};

export default useGetLetterList;
