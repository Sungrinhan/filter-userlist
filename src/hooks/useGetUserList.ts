import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { useGetIdNameQuery } from "../store/services/user";
import { RootState } from "../store";
import { IDNameList } from "../types/index";

import FilteredUserList from "../utils/FilteredUserList";

const useGetUserList = () => {
  const [idNameList, setIdNameList] = useState<IDNameList>([]);

  const { data, error, isLoading } = useGetIdNameQuery(null);

  const letter = useSelector((state: RootState) => state.user.selectedLetters);

  useEffect(() => {
    if (data) {
      setIdNameList(data);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      const filteredByLetters = FilteredUserList(data, letter);

      setIdNameList(filteredByLetters);
    }
  }, [letter]);

  return {
    idNameList,
    error,
    isLoading,
  };
};

export default useGetUserList;
