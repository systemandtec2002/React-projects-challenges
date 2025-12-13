import { useState } from "react";
function App() {
  const [isLightOn, setIsLightOn] = useState(false);
  return (
    <div className="container">
      <h1>
        Bulb <span id="text">{isLightOn ? "On" : "Of"}</span>
      </h1>
      <img className="lightbulb"
        src={
          isLightOn ? 'https://cdn.mos.cms.futurecdn.net/HaPnm6P7TZhPQGGUxtDjAg-600-80.jpg' : 'https://t3.ftcdn.net/jpg/05/31/90/50/240_F_531905040_uZUjVnRB9LH2Xk30JTyPzILzRN02jnl3.jpg'
        }
        alt='bulb'
      />
      <div className="btn-group">
        <button onClick={() =>{
setIsLightOn(false)
        }} className="btn btnOf">Of</button>
        <button onClick={() =>{
setIsLightOn(true)
        }} className="btn btnOn">On</button>
      </div>
    </div>
  );
}

export default App;



        // src="https://cdn.mos.cms.futurecdn.net/HaPnm6P7TZhPQGGUxtDjAg-600-80.jpg

        //https://t3.ftcdn.net/jpg/05/31/90/50/240_F_531905040_uZUjVnRB9LH2Xk30JTyPzILzRN02jnl3.jpg"
