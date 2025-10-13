import ProfileCard from '../components/ProfileCard';

function App() {
  return (
    <div>
      <ProfileCard
        name="Priya Singh"
        age={21}
        bio="Web developer, React learner, esports fan, and passionate about building useful apps for daily life. Always curious to learn and explore new technology."
      />
      <ProfileCard />
    </div>
  );
}



export default App
