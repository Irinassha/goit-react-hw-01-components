export const FriendList = ({ friends }) => {
    return <ul className="friend-list">
    {friends.map(item => {return (
      <li className="item" key={item.id}>
            <span className="status">{item.status}</span>
        <img className="avatar" src={item.avatar} alt="User avatar" width="48" />
            <p className="name">{item.name}</p>
      </li>
    );})}
  
</ul>


}