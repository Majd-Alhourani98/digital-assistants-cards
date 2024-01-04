import Card from "./Card";

import alexaImage from "./images/alexa.webp";
import googleImage from "./images/google.png";
import siriImage from "./images/siri.webp";

function App() {
  return (
    <div>
      <Card
        title="Siri"
        company="Apple"
        description=" Apple's voice assistant built into iPhone, iPad, Mac, and Apple Watch.
        It can set reminders, send messages, make calls, and control smart home
        devices."
        image={siriImage}
      />

      <Card
        title="Google Assistant"
        company="Google"
        description="A conversational assistant available on Android phones, smart
          speakers, and displays. It answers questions, plays media, and manages
          your calendar and smart devices."
        image={googleImage}
      />

      <Card
        title="Alexa"
        company="Amazon"
        description="Amazon's assistant powering Echo devices. It plays music, controls
          smart home gadgets, creates shopping lists, and supports thousands of
          third-party 'skills'."
        image={alexaImage}
      />
    </div>
  );
}

export default App;
