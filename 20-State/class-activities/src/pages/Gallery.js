import React, { useEffect, useState } from "react";
import API from "../utils/API";

import UserContext from "../utils/userContext";
import LanguageContext from "../utils/LanguageContext";

import CardContainer from "../components/CardContainer";
import SelectLanguage from "../components/SelectLanguage";

import Row from "../components/Row";

function Gallery() {
  const [languageState, setLanguageState] = useState({
    languages: [],
    language: "",
    updateLanguage: (selectedLanguage) => {
      loadUsers(selectedLanguage);
      
      setLanguageState({
        ...languageState,
        languages: languageState.languages,
        language: selectedLanguage
      });
    }
  });
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [userIndex, setUserIndex] = useState(0);

  // When the component mounts, a call will be made to get random users.
  function loadLanguages() {
    return API.getLanguagesList()
      .then(languages => {
        setLanguageState({
          ...languageState,
          languages: languages,
          language: languages[0],
          updateLanguage: (selectedLanguage) => {
            loadUsers(selectedLanguage);

            setLanguageState({
              ...languageState,
              languages: languages,
              language: selectedLanguage
            });
          }
        });

        return languages;
      });
  }

  function loadUsers(language) {
    return API
      .getUsersByLanguage(language)
      .then(users => {
        setUsers(users);
        setUser(users[0]);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    loadLanguages()
      .then(function (languages) {
        loadUsers(languages[0])
      });
  }, []);



  function nextUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex >= users.length) {
      userIndex = 0;
    }
    setUserIndex(userIndex);
    setUser(users[userIndex]);
  }

  function previousUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex < 0) {
      userIndex = users.length - 1;
    }
    setUserIndex(userIndex);
    setUser(users[userIndex]);
  }

  function handleBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newUserIndex = userIndex + 1;
      nextUser(newUserIndex);
    } else {
      const newUserIndex = userIndex - 1;
      previousUser(newUserIndex);
    }
  }

  return (
    <UserContext.Provider value={{ user, users, handleBtnClick }}>
      <LanguageContext.Provider value={languageState}>
        <div>
          <h1 className="text-center">Welcome to LinkedUp</h1>
          <h3 className="text-center">Click on the arrows to browse users</h3>
          <Row>
            <CardContainer />
          </Row>
          <Row>
            <SelectLanguage />
          </Row>
        </div>
      </LanguageContext.Provider>
    </UserContext.Provider>
  );
}

export default Gallery;
