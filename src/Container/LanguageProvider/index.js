import React from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider  } from 'react-intl';
import { messages } from "../../site-translation/messages";
export default function LanguageProvider(props) {

  const { locale } = useSelector(state => state.language);
  console.log("LanguageProvider locale: ", locale);
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div dir={locale==='ar'?"rtl":"ltr"}>  
        {React.Children.only(props.children)}
      </div>
    </IntlProvider>
  );
}

// LanguageProvider.propTypes = {
//   messages: PropTypes.object,
//   children: PropTypes.element.isRequired,
// };