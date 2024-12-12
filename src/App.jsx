import ReactPainter from 'react-painter';
import './App.css'; // Run using npm run dev

function App() {
  return (
    <>
      <ReactPainter
        width={1000}
        height={600}
        render={({ canvas, triggerSave, setColor, setLineWidth, setLineCap, setLineJoin, imageDownloadUrl }) => (
          <div className="container">
            <h1>🎨 Sketch Book</h1>
            <div className="toolbox">
              <div className="tool">
                <label htmlFor="brushColor">Brush Color</label>
                <input
                  type="color"
                  id="brushColor"
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <div className="tool">
                <label htmlFor="brushSize">Brush Size</label>
                <input
                  type="range"
                  id="brushSize"
                  defaultValue={5}
                  min="1"
                  max="50"
                  onChange={(e) => setLineWidth(parseInt(e.target.value, 10))}
                />
              </div>
              <div className="tool">
                <label htmlFor="lineJoin">Line Join</label>
                <select id="lineJoin" onChange={(e) => setLineJoin(e.target.value)}>
                  <option value="round">Round</option>
                  <option value="bevel">Bevel</option>
                  <option value="miter">Miter</option>
                </select>
              </div>
              <div className="tool">
                <label htmlFor="lineCap">Line Cap</label>
                <select id="lineCap" onChange={(e) => setLineCap(e.target.value)}>
                  <option value="round">Round</option>
                  <option value="butt">Butt</option>
                  <option value="square">Square</option>
                </select>
              </div>
              <div className="tool">
                {imageDownloadUrl ? (
                  <a href={imageDownloadUrl} download className="download-btn">
                    Download
                  </a>
                ) : (
                  <button onClick={triggerSave} className="save-btn">
                    Save
                  </button>
                )}
              </div>
            </div>
            <div className="canvas-container">{canvas}</div>
          </div>
        )}
      />
    </>
  );
}

export default App;
