import ProfileCard from "./ProfileCard";

import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <h1>Personal Digital Assistants</h1>
      <ProfileCard
        title="Alexa"
        handle="@alexa99"
        image={AlexaImage}
        description="I'll help you buy stuff off Amazon"
      />

      <ProfileCard
        title="Cortana"
        handle="@cortana32"
        image={CortanaImage}
        description="Personal assistant by Microsoft"
      />

      <ProfileCard
        title="Siri"
        handle="@siri01"
        image={SiriImage}
        description="I don't get a lot of updates anymore"
      />
    </div>
  );
}

export default App;
