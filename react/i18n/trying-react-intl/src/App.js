import logo from "./logo.svg";
import "./App.css";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

const messagesInFrench = {
  myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
};

function App() {
  return (
    <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
      <p>
        <FormattedMessage
          id="myMessage"
          deafultMessage="Today is {ts, date, ::yyyyMMdd}"
          values={{ ts: Date.now() }}
        />
        <FormattedNumber value={19} style="currency" currency="EUR" />
      </p>
    </IntlProvider>
  );
}

export default App;
