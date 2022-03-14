import React, { useContext } from "react";

import LanguageContext from "../../utils/LanguageContext";

function SelectLanguage() {
    const languageContext = useContext(LanguageContext);

    function handleChange(event) {
        languageContext.updateLanguage(event.target.value);
    }

    return (
        <select
            onChange={handleChange}>
            {
                languageContext.languages.map(languageString =>
                    (<option key={languageString}>{languageString}</option>))
            }
        </select>
    );
}

export default SelectLanguage;