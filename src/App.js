
import Header from './header';
import Buscar from './buscar';
import Video from './video';
import ListVideo from './listVideos';
import { VideoContext } from './videoContext';
import { videos  } from './data/videos';

function App() {
  return (
    <div className='container'>
      <VideoContext.Provider value={videos}>
        <Header/>
        <Buscar/>
        <ListVideo/>
      </VideoContext.Provider>
    </div>
  );
}

export default App;
