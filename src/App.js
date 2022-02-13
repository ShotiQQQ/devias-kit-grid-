import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Tabs from './components/Tabs';
import ProfileCard from './components/ProfileCard';
import BasicProfile from './components/BasicProfile';
import Notifications from './components/Notifications';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Aside />
        <div className="content">
          <Tabs />
          <div className="content__left">
            <ProfileCard />
          </div>
          <div className="content__right">
            <BasicProfile />
            <Notifications />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
