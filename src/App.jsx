import Player from './components/Player.jsx';
import TimerComponent from './components/TimerComponent.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerComponent title={"Easy"} targerTime={1}></TimerComponent>
        <TimerComponent title={"Medium"} targerTime={5}></TimerComponent>
        <TimerComponent title={"Hard"} targerTime={10}></TimerComponent>
        <TimerComponent title={"Pro"} targerTime={15}></TimerComponent>
      </div>
    </>
  );
}

export default App;

