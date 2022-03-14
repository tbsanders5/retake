import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard"

import friends from "./friends.json";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {
        friends.map((friend) => (
          <FriendCard
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          ></FriendCard>
        ))
      }
    </Wrapper>
  );
}

export default App;
