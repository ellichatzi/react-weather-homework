export default function Forecast() {
  return (
    <div className="forecast">
      <div className="row">
        <div className="col">Saturday</div>
        <div className="col">Sunday</div>
        <div className="col">Monday</div>
        <div className="col">Tuesday</div>
        <div className="col">Wednesday</div>
        <div className="col">Thursday</div>
        <div className="col">Friday</div>
      </div>
      <div className="emojis">
        <div className="row">
          <div className="col">☀️</div>
          <div className="col">⛅</div>
          <div className="col">⛅</div>
          <div className="col">⛅</div>
          <div className="col">⛅</div>
          <div className="col">⛅</div>
          <div className="col">⛅</div>
        </div>
      </div>
      <div className="degrees">
        <div className="row">
          <div className="col">19º | 9º</div>
          <div className="col">19º | 14º</div>
          <div className="col">19º | 11º</div>
          <div className="col">18º | 12º</div>
          <div className="col">18º | 12º</div>
          <div className="col">18º | 8º </div>
          <div className="col">17º | 8º</div>
        </div>
      </div>
    </div>
  );
}
