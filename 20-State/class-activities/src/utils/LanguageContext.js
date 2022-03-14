import React from "react";

const LanguageContext = React.createContext({
    languages: [],
    language: '',
    updateLanguage: () => null
});

export default LanguageContext;