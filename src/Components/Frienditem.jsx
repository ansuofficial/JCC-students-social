import Button from "../Components/Button";
const Frienditem = ({ user, search }) => {
  return (
    <>
      {user
        .filter((item) =>
          search == "" ? item : item.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((user, index) => {
          return (
            <li key={index} className="friend-item">
              <div className="img-wrapper">
                <img src={user.img} alt="Friend profile picture" />
              </div>
              <p className="friend-name">{user.name}</p>
              <Button btnClass={`follow-btn ${user.following && "followed"}`}>
                {`${user.following ? "Following" : "Follow"}`}
              </Button>
            </li>
          );
        })}
    </>
  );
};

export default Frienditem;