import useGetUserList from "../hooks/useGetUserList";

const UserTable = () => {
  const { idNameList, error, isLoading } = useGetUserList();

  return (
    <>
      <ul className="idnamelist">
        Total Count: {idNameList?.length}
        {idNameList ? (
          idNameList.map(([id, name]) => <li key={id}>{`${id} - ${name}`}</li>)
        ) : (
          <li>...loading</li>
        )}
      </ul>
    </>
  );
};

export default UserTable;
