import { useState } from "react";
import { buildPrompt } from "./utils/promptBuilder";

export default function App() {
  const [role, setRole] = useState("Student");
  const [mindset, setMindset] = useState("Focused");
  const [style, setStyle] = useState("Minimal aesthetic");
  const [device, setDevice] = useState("mobile");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function generateImage() {
    setLoading(true);
    setImage(null);
  
    const prompt = buildPrompt(role, mindset, style, device);
    console.log("Generated prompt:", prompt);
  
    // Pollinations image endpoint
    const encodedPrompt = encodeURIComponent(prompt);
  
    const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=768&height=1344&seed=${Math.floor(Math.random() * 100000)}`;
  
    // Simulate async wait (API generates image on request)
    setTimeout(() => {
      setImage(imageUrl);
      setLoading(false);
    }, 1500);
  }
  
  
  return (
    <div style={{ maxWidth: "420px", margin: "auto", padding: "20px" }}>
      <h1>Identity Wallpaper AI</h1>

      <label>Role</label>
      <select onChange={(e) => setRole(e.target.value)}>
      <option>Focused professional</option>
      <option>Creative thinker</option>
      <option>Founder / Builder</option>
      <option>Quiet achiever</option>

      </select>

      <label>Mental State</label>
      <select onChange={(e) => setMindset(e.target.value)}>
      <option>Deep focus</option>
      <option>Calm clarity</option>
      <option>Low-stress productivity</option>
      <option>Evening wind-down</option>

      </select>

      <label>Visual Style</label>
      <select onChange={(e) => setStyle(e.target.value)}>
      <option>Soft neutral light</option>
      <option>Muted dark elegance</option>
      <option>Warm minimal calm</option>
      <option>Cool modern stillness</option>

      </select>

      <label>Device</label>
      <select onChange={(e) => setDevice(e.target.value)}>
        <option>mobile</option>
        <option>desktop</option>
      </select>

      <button onClick={generateImage} style={{ marginTop: "15px" }}>
        {loading ? "Generating..." : "Generate Wallpaper"}
      </button>

      <p style={{ fontSize: "12px", opacity: 0.7, marginTop: "10px" }}>
        Wallpaper is generated based on your identity & mindset.
      </p>


      {image && (
        <img
          src={image}
          alt="Generated wallpaper"
          style={{ width: "100%", marginTop: "20px", borderRadius: "12px" }}
        />
      )}

    </div>
  );
}
