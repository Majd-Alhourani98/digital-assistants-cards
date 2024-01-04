# Digital Assistants Cards

A small React app that displays three cards, one for each popular digital assistant: Siri, Google Assistant, and Alexa. Each card shows the assistant's logo, name, company, and a short description.

## Features

- Reusable `Card` component that receives its data through props
- Three cards rendered from the `App` component
- Responsive-friendly card layout styled with plain CSS
- Hover effect on each card

## Tech Stack

- [React](https://react.dev/) 19
- [Create React App](https://create-react-app.dev/) (`react-scripts` 5)
- Plain CSS

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)

### Installation

```bash
npm install
```

### Run the app

```bash
npm start
```

The app opens at [http://localhost:3000](http://localhost:3000).

### Other scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm start`     | Start the development server |
| `npm run build` | Create a production build    |
| `npm test`      | Run the tests                |

## Project Structure

```
src/
├── images/
│   ├── alexa.webp
│   ├── google.png
│   └── siri.webp
├── App.js        # Renders the three assistant cards
├── Card.js       # Reusable card component
├── index.css     # Global and card styles
└── index.js      # App entry point
```

## The Card Component

`Card` accepts four props:

| Prop          | Type   | Description                        |
| ------------- | ------ | ---------------------------------- |
| `title`       | string | Name of the assistant              |
| `company`     | string | Company that makes the assistant   |
| `description` | string | Short description of the assistant |
| `image`       | string | Imported image used as the logo    |

Example:

```jsx
import Card from "./Card";
import siriImage from "./images/siri.webp";

<Card
  title="Siri"
  company="Apple"
  description="Apple's voice assistant built into iPhone, iPad, Mac, and Apple Watch."
  image={siriImage}
/>;
```

## Adding a New Assistant

1. Add the logo to `src/images/`.
2. Import it in `App.js`.
3. Add another `<Card />` inside `App` with its `title`, `company`, `description`, and `image` props.

## License

This project is for learning purposes. Logos belong to their respective owners (Apple, Google, and Amazon).
