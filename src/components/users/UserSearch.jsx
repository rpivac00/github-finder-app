import { useState, useContext } from "react";
import { FaGithub } from "react-icons/fa";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import Alert from "../layout/Alert";
function UserSearch() {
  const [text, setText] = useState("");

  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something...", "error");
    } else {
      //search users
      searchUsers(text);
      setText("");
    }
  };

  return (
    <>
      {users.length === 0 ? (
        <h1
          className="text-5xl text-center mb-20
        "
        >
          Search for Github Users
        </h1>
      ) : null}
      <Alert />
      <div className=" grid grid-cols-6 ml-8 mb-8 gap-10 items-center 2xl:ml-16 lg:grid-cols-5 md:grid-cols-4 max-sm:grid-cols-3 max-sm:gap-0">
        <div className="col-span-5 lg:col-span-4 md:col-span-3 max-sm:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="form-control ">
              <div className="relative  ">
                <input
                  type="text"
                  className="w-full pr-40 bg-gray-200 input input-lg text-black border-solid border-2 border-black"
                  placeholder="Search"
                  value={text}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 rouned-l-none w-36 btn btn-lg items-center max-sm:w-20"
                >
                  GO
                </button>
              </div>
            </div>
          </form>
        </div>
        {users.length > 0 ? (
          <div className="mr-8">
            <button
              onClick={clearUsers}
              className="btn btn-ghost btn-lg  max-sm:gap-0"
            >
              Clear
            </button>
          </div>
        ) : (
          <FaGithub className="text-6xl m-auto " />
        )}
      </div>
    </>
  );
}

export default UserSearch;
