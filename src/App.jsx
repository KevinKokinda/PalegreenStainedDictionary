import React, { useState } from "react";
import "./App.css";

const memeTemplates = [
  {
    name: "Drake Hotline Bling",
    url: "https://i.imgflip.com/30b1gx.jpg",
    defaultTopText: "When you...",
    defaultBottomText: "But then...",
  },
  {
    name: "Two Buttons",
    url: "https://i.imgflip.com/1g8my4.jpg",
    defaultTopText: "Choose wisely...",
    defaultBottomText: "",
  },
  {
    name: "Distracted Boyfriend",
    url: "https://i.imgflip.com/1ur9b0.jpg",
    defaultTopText: "You vs. the guy...",
    defaultBottomText: "She told you not to worry about.",
  },
  {
    name: "Grumpy Cat",
    url: "https://i.imgflip.com/8p0a.jpg",
    defaultTopText: "I had fun once...",
    defaultBottomText: "It was awful.",
  },
  {
    name: "Success Kid",
    url: "https://i.imgflip.com/1bhk.jpg",
    defaultTopText: "I got a good grade...",
    defaultBottomText: "On my test!",
  },
  {
    name: "Bad Luck Brian",
    url: "https://i.imgflip.com/1bip.jpg",
    defaultTopText: "Takes a test...",
    defaultBottomText: "Fails it.",
  },
  {
    name: "One Does Not Simply",
    url: "https://i.imgflip.com/1does.jpg",
    defaultTopText: "One does not simply...",
    defaultBottomText: "Walk into Mordor.",
  },
  {
    name: "Futurama Fry",
    url: "https://i.imgflip.com/1bgw.jpg",
    defaultTopText: "Not sure if...",
    defaultBottomText: "This is a good idea or not.",
  },
  {
    name: "Philosoraptor",
    url: "https://i.imgflip.com/1bh8.jpg",
    defaultTopText: "If a tree falls in the forest...",
    defaultBottomText: "Does it make a sound?",
  },
  {
    name: "Y U No",
    url: "https://i.imgflip.com/1bh3.jpg",
    defaultTopText: "Y U No...",
    defaultBottomText: "Do your homework?",
  },
  {
    name: "Mocking Spongebob",
    url: "https://i.imgflip.com/1otk96.jpg",
    defaultTopText: "OH SO YOU THINK...",
    defaultBottomText: "You're funny?",
  },
  {
    name: "Expanding Brain",
    url: "https://i.imgflip.com/1jwhww.jpg",
    defaultTopText: "Small brain...",
    defaultBottomText: "Big brain!",
  },
  {
    name: "Roll Safe Think About It",
    url: "https://i.imgflip.com/1h7in3.jpg",
    defaultTopText: "Can't fail the test...",
    defaultBottomText: "If you don't take it.",
  },
  {
    name: "Change My Mind",
    url: "https://i.imgflip.com/24y43o.jpg",
    defaultTopText: "Change my mind...",
    defaultBottomText: "",
  },
  {
    name: "Is This A Pigeon",
    url: "https://i.imgflip.com/1o00in.jpg",
    defaultTopText: "Is this...",
    defaultBottomText: "A meme?",
  },
  {
    name: "Running Away Balloon",
    url: "https://i.imgflip.com/261o3j.jpg",
    defaultTopText: "Problems...",
    defaultBottomText: "Me running away.",
  },
  {
    name: "Left Exit 12 Off Ramp",
    url: "https://i.imgflip.com/22bdq6.jpg",
    defaultTopText: "Staying on task...",
    defaultBottomText: "Getting distracted.",
  },
  {
    name: "Woman Yelling At Cat",
    url: "https://i.imgflip.com/345v97.jpg",
    defaultTopText: "You did what?",
    defaultBottomText: "The cat: I did nothing.",
  },
  {
    name: "Distracted Boyfriend",
    url: "https://i.imgflip.com/1ur9b0.jpg",
    defaultTopText: "Looking at...",
    defaultBottomText: "Something I shouldn't.",
  },
  {
    name: "Evil Kermit",
    url: "https://i.imgflip.com/1e7ql7.jpg",
    defaultTopText: "Me: I should stay calm...",
    defaultBottomText: "Also me: Yell louder!",
  },
];

function App() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleTemplateChange = (e) => {
    const selectedTemplate = memeTemplates.find(
      (template) => template.name === e.target.value
    );
    setImage(selectedTemplate.url);
    setTopText(selectedTemplate.defaultTopText);
    setBottomText(selectedTemplate.defaultBottomText);
  };

  const generateRandomMeme = () => {
    const randomTemplate =
      memeTemplates[Math.floor(Math.random() * memeTemplates.length)];
    setImage(randomTemplate.url);
    setTopText(randomTemplate.defaultTopText);
    setBottomText(randomTemplate.defaultBottomText);
  };

  return (
    <div className="App">
      <h1>Custom Meme Generator</h1>
      <button onClick={generateRandomMeme}>Generate Random Meme</button>
      <select onChange={handleTemplateChange}>
        <option value="">Select a Meme Template</option>
        {memeTemplates.map((template) => (
          <option key={template.name} value={template.name}>
            {template.name}
          </option>
        ))}
      </select>
      <input
        type="file"
        onChange={handleImageUpload}
        accept="image/*"
      />
      <input
        type="text"
        placeholder="Top text"
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bottom text"
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
      />
      <div className="meme">
        {image && <img src={image} alt="Meme" />}
        <h2 className="top-text">{topText}</h2>
        <h2 className="bottom-text">{bottomText}</h2>
      </div>
    </div>
  );
}

export default App;
