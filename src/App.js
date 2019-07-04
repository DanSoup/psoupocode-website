import React, {useState} from 'react';
import logo from './logo.svg';
import './normalize.css';
import './App.css';
import PageHeader from './components/pageHeader/pageHeader.js';

function App() {

  const [sPathName, uPathName] = useState(window.location.pathname);
  const [sLastPathName, uLastPathName] = useState(window.location.pathname);
  const [sPageChanging, uPageChanging] = useState(false);

  const navigate = (path) => {
    window.history.pushState({}, 'boogie boogie', path);
    uPathName(window.location.pathname);
  }

  console.log(sLastPathName, sPathName)

  const RoutePage = ({path, children}) => {
    console.log(path)
    return (
      <div onTransitionEnd={() => {if (sPathName !== sLastPathName) uLastPathName(sPathName)}} className={`route-page${sPathName === sLastPathName && sLastPathName === path ? '' : ' invisible'}${sLastPathName === path ? '' : ' hidden'}`}>{children}</div>
    );
  }

  return (
    <div onScroll={e => {
      const nav = document.getElementsByTagName('nav')[0];
      const navTitle = document.getElementById('navbar-title');
      if (nav.offsetTop === e.target.scrollTop) {
        // setTimeout(() => navTitle.className = 'on-screen', 0);
        navTitle.className = 'on-screen';
      } else if (nav.offsetTop !== e.target.scrollTop) {
        // setTimeout(() => navTitle.className = '', 0);
        navTitle.className = '';
      }
    }} className="app">
      <PageHeader/>
      <nav>
        <div id="navbar-title">
          <h1>PSOUPOCODE</h1>
        </div>
        <div id="navbar-buttons">
          <button onClick={() => navigate('/')}><span>Home</span></button>
          <button onClick={() => navigate('/categories')}>Categories</button>
          <button onClick={() => navigate('/about')}>About</button>
        </div>
      </nav>
      {window.location.pathname === '/' && <div><h1>HOME</h1></div>}
      {window.location.pathname === '/categories' && <div><h1>CATS</h1></div>}
      {window.location.pathname === '/about' && <div><h1>ABOUT</h1></div>}
      <RoutePage path="/"><h1>Home</h1></RoutePage>
      <RoutePage path="/categories"><h1>Cats</h1></RoutePage>
      <RoutePage path="/about"><h1>About</h1></RoutePage>
      {/* {sLastPathName === '/' && <h1 onTransitionEnd={() => {if (sPathName !== sLastPathName) uLastPathName(sPathName)}} className={sPathName === sLastPathName && sLastPathName === '/' ? '' : 'invisible'}>HOME</h1>}
      {sLastPathName === '/categories' && <h1 onTransitionEnd={() => {if (sPathName !== sLastPathName) uLastPathName(sPathName)}} className={sPathName === sLastPathName && sLastPathName === '/categories' ? '' : 'invisible'}>CATS</h1>}
      {sLastPathName === '/about' && <h1 onTransitionEnd={() => {if (sPathName !== sLastPathName) uLastPathName(sPathName)}} className={sPathName === sLastPathName && sLastPathName === '/about' ? '' : 'invisible'}>ABOUT</h1>} */}
      <p>{JSON.stringify(window.location)}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum lacinia felis eget malesuada. Donec interdum, erat vitae pulvinar sollicitudin, sem leo lacinia lectus, a imperdiet elit magna a ex. Vestibulum molestie lorem ac varius suscipit. Quisque gravida ex odio, dictum vestibulum lacus cursus non. Mauris dui ante, egestas quis felis non, consequat euismod mauris. Praesent id mauris ac nulla eleifend finibus a nec nulla. Nulla aliquet velit mollis volutpat porta. Sed sit amet ipsum dolor. Nullam id dui nec purus dapibus sollicitudin. Maecenas neque enim, convallis aliquet urna ac, facilisis hendrerit velit. Aliquam ac consectetur velit. Donec egestas, purus non malesuada ultrices, tellus purus aliquam enim, sit amet euismod tellus lectus vitae nunc.</p>
      <p>Curabitur tincidunt vel est at accumsan. Nulla eros augue, mollis eget tempor in, suscipit eu dui. Morbi ex diam, condimentum sit amet auctor ut, ultricies vel turpis. Ut auctor quam ac fringilla pulvinar. Ut in erat porta, fermentum nunc a, porttitor justo. Integer in aliquam massa. Sed ultrices nulla at efficitur semper. Aenean sit amet euismod nibh. Fusce tincidunt eros sed mattis rhoncus. Suspendisse efficitur erat eget ligula scelerisque tincidunt. Phasellus ultrices a mauris id mollis. Nullam id gravida eros.</p>
      <p>Aliquam enim dui, ornare id nisi at, egestas posuere mauris. Sed quis augue nec mauris interdum vulputate. Aliquam scelerisque, odio et faucibus bibendum, diam felis interdum risus, rhoncus vestibulum nunc lacus vitae augue. Donec mattis ultrices posuere. Donec consequat eu elit non sollicitudin. In tristique sapien a ipsum fringilla commodo. Donec nunc dui, blandit eget blandit a, vulputate ac tortor. Nunc in tempor metus. Suspendisse posuere fermentum massa, a fermentum nisl dignissim ac. Donec in rhoncus nibh.</p>
      <p>Vivamus finibus erat nisi, ut eleifend lectus interdum ac. Etiam tincidunt neque eu ante iaculis imperdiet. Proin justo justo, dapibus vitae consequat at, ornare maximus neque. Cras id ligula enim. Maecenas aliquam dolor et tortor sagittis ultricies. Vivamus eget luctus orci, sit amet dictum dui. Phasellus neque mi, pharetra ut luctus a, sollicitudin non mauris. Integer ultricies pretium varius.</p>
      <p>Ut mattis eleifend scelerisque. Vestibulum a suscipit diam. Suspendisse eleifend tincidunt enim, ac dictum eros commodo at. Duis viverra nunc mauris, non ultrices velit condimentum fermentum. Fusce sodales, felis in volutpat lobortis, nulla mauris sagittis lectus, sed ultricies est ipsum nec tellus. Praesent tellus ex, ullamcorper eget dictum euismod, tempor et metus. Pellentesque enim quam, tempus a arcu suscipit, viverra finibus ex. Nam eu ante iaculis, convallis mauris vitae, rhoncus ligula. Aliquam varius, sapien nec rhoncus porta, nunc sem malesuada justo, ut porttitor quam mi eu sem. Fusce lacinia convallis tempor.</p>
      <p>Mauris vel mattis arcu. Mauris eu nisi et enim suscipit luctus. Maecenas pharetra massa vel ex dapibus, eleifend semper dolor viverra. Fusce venenatis pharetra luctus. Aliquam erat volutpat. Nam commodo ultrices nisi eu faucibus. Morbi urna metus, blandit eu convallis ut, egestas non nibh. Nunc consectetur congue sem nec convallis. Aliquam id tellus urna. Sed scelerisque consequat libero in ultrices. Suspendisse sed porta augue, ultrices molestie sapien. Morbi vel sapien id sem condimentum mollis. Nunc ultrices neque eu pulvinar tempus. Sed consequat enim tristique arcu maximus consectetur. Fusce venenatis fringilla sem, vel dapibus nisl mattis vitae. Nam eros urna, volutpat sed viverra at, iaculis suscipit turpis.</p>
      <p>Sed at congue massa. Sed eget odio condimentum, ornare magna volutpat, bibendum augue. Mauris sit amet interdum arcu. Aliquam mollis pretium urna, eget auctor arcu suscipit in. Cras volutpat sagittis risus, in vulputate nunc aliquam eget. Integer imperdiet dictum sem eu gravida. Nunc porttitor lectus arcu, in faucibus risus venenatis id. Pellentesque pretium suscipit elit, in cursus massa placerat in. Etiam egestas, est ut tempus faucibus, lectus elit sagittis quam, id ultricies ligula nunc ac lorem. Sed gravida erat eget lectus consequat, a mollis libero varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ac consectetur erat. Proin eget odio auctor, mollis massa ut, aliquet diam. Ut laoreet eros ac ante pellentesque malesuada. Ut ornare nunc mi, et dapibus orci cursus eu. Donec rutrum, nibh sit amet pellentesque interdum, mi nunc consectetur neque, at cursus diam magna id erat.</p>
      <p>Proin in vulputate sapien, et ornare lorem. Aliquam sit amet euismod augue. Aliquam mattis sed mi eu semper. Mauris luctus volutpat venenatis. Cras neque elit, imperdiet eget eleifend quis, pretium sit amet sapien. Pellentesque et velit vel eros dignissim porttitor. Aliquam erat volutpat. Aliquam sit amet sagittis erat. Mauris condimentum porttitor sapien id sollicitudin. Sed commodo tortor vestibulum laoreet rhoncus. Donec in massa vitae velit fermentum ornare at ut neque.</p>
      <p>Phasellus eu orci arcu. Mauris non euismod quam, eu vulputate libero. Nunc maximus, mi nec placerat scelerisque, tellus nibh efficitur velit, ac egestas urna ligula a tellus. Sed at diam eget tortor imperdiet pellentesque id sed massa. Fusce aliquam lobortis nisi eget suscipit. Aliquam tempor sapien malesuada, sodales dolor cursus, interdum purus. Etiam condimentum ipsum id velit iaculis, vel sagittis turpis rhoncus. Sed rutrum dui nisl, pulvinar maximus dolor lacinia at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      <p>Nam iaculis dolor id velit tincidunt, et mattis justo bibendum. Integer viverra sodales lectus, id commodo urna suscipit eu. Pellentesque non tempor ipsum, at finibus massa. Nam rhoncus, sem ac aliquam convallis, urna purus dignissim leo, in fermentum eros nisi vel velit. Donec posuere dignissim pharetra. Praesent rutrum finibus felis id ullamcorper. Sed metus est, scelerisque vel diam ut, tempor laoreet nisl. Sed sit amet semper tellus, ut aliquet sapien. Suspendisse maximus sem sit amet cursus lobortis. Aenean eget dictum ligula. Duis ipsum arcu, luctus vitae imperdiet a, fermentum vel sem. Proin vel nulla pretium, imperdiet erat sed, ultricies turpis. Vivamus laoreet posuere pulvinar.</p>
      <p>Nulla tincidunt faucibus mi, nec posuere mi malesuada quis. Vivamus varius, purus at scelerisque feugiat, massa mauris venenatis felis, ut auctor justo dolor et arcu. Donec eleifend consequat dui, et pulvinar libero. Curabitur pellentesque sem lacus, eget placerat urna viverra quis. Curabitur vehicula sem eget dui suscipit placerat. Suspendisse potenti. Donec eu neque aliquet, dapibus nisi tempor, lacinia ligula. Suspendisse potenti. Duis et ante porta, eleifend ligula interdum, tempus dui. Nulla pellentesque eget ante at sagittis.</p>
      <p>Nulla facilisi. Suspendisse eget euismod elit. Integer ut tempus turpis. In hac habitasse platea dictumst. Integer at augue aliquam, ultricies massa sed, posuere ligula. Morbi sed felis commodo, dictum mi eu, ultricies magna. Nullam bibendum dictum magna in sodales. Suspendisse ac lorem pretium, sollicitudin mauris at, luctus arcu. Duis porta fermentum elit, a posuere odio pretium eu. Mauris a libero luctus, faucibus diam euismod, finibus lectus. Nunc eget eros erat. Pellentesque lacus purus, volutpat vel enim ut, varius porta tellus.</p>
      <p>Phasellus faucibus velit nec ligula tincidunt, sed ultrices augue ultrices. Nullam porttitor enim metus, ut mattis ligula aliquet id. Donec vitae leo ac ex varius sollicitudin in a mi. Aliquam faucibus justo eget odio consequat sollicitudin. Phasellus iaculis, eros sed tempus interdum, lorem magna sodales arcu, sed vestibulum nulla arcu sit amet urna. Maecenas tincidunt, lorem tincidunt consequat tincidunt, velit elit molestie massa, ut suscipit enim libero et ante. Ut velit mauris, porta pharetra orci dictum, finibus rutrum nibh. Suspendisse ultrices non turpis in laoreet. Nulla sit amet consequat neque, venenatis aliquet risus. Fusce lobortis dolor et neque volutpat aliquam. Duis scelerisque finibus velit, eget cursus eros finibus non. Nunc ut nisl a tortor malesuada blandit posuere tristique nisi. Proin est velit, interdum eu eros vitae, tincidunt faucibus arcu. Maecenas elit nunc, rutrum sit amet maximus vitae, eleifend eget justo. Nam at viverra dui, vitae ullamcorper leo.</p>
      <p>Nullam lacinia neque quis tincidunt lobortis. Quisque vitae purus leo. Integer volutpat elit mauris, at consequat lacus dictum ac. Donec mattis, velit auctor luctus pharetra, arcu purus venenatis magna, nec auctor justo enim id urna. Vestibulum nisl orci, commodo id eros quis, fringilla elementum orci. Sed vestibulum elit id odio convallis, vel vulputate nisl tincidunt. Nam congue euismod lorem, non tempus mi. Sed sit amet elementum massa. Phasellus quis tellus quis ipsum varius efficitur.</p>
      <p>Aenean porta porta convallis. Curabitur laoreet neque non quam accumsan, non consequat eros aliquam. Nulla bibendum porttitor lorem, non suscipit tellus mollis vel. Aliquam in finibus libero. Nunc ex dolor, aliquet eget purus nec, euismod vestibulum nulla. Vestibulum at congue augue. Nam convallis porttitor mi id hendrerit. Duis lobortis dolor et blandit consequat.</p>
      <p>Quisque imperdiet lobortis cursus. Maecenas eget velit in purus ultricies vestibulum ut id ex. Donec vitae tincidunt sapien, eu sodales ligula. In vestibulum tortor posuere, lobortis metus et, finibus massa. Donec facilisis diam ac augue aliquet semper. Duis facilisis non mauris sed blandit. Nulla nec lacus pulvinar, porttitor augue ac, placerat mauris. Phasellus ut metus sit amet lorem ornare sollicitudin. Proin tincidunt elit felis, vel sollicitudin massa vestibulum id. Donec efficitur enim diam, luctus laoreet sapien aliquam quis.</p>
      <p>Nam fringilla sem tortor, non egestas leo porta eget. Sed commodo sollicitudin purus, ac pretium ante egestas ut. Donec id pulvinar enim, eget fermentum magna. Aliquam ut sapien quis velit porta tempus. Sed ut condimentum massa. Vestibulum ornare et tortor at venenatis. Etiam sollicitudin nulla non molestie iaculis. Proin mauris erat, fringilla ut consectetur nec, lobortis in massa. Mauris vitae mollis justo, id gravida turpis. Etiam eget elit et eros aliquam eleifend. Integer laoreet nunc nec diam efficitur, id congue augue dapibus. Sed mollis placerat rutrum. Quisque malesuada, tellus ac faucibus volutpat, urna metus tristique dolor, vitae pretium odio dui eget justo. Suspendisse potenti.</p>
      <p>Morbi gravida euismod consequat. Cras mattis auctor iaculis. Nulla vitae tortor et diam elementum dapibus. Nulla quis lectus non lectus blandit sodales. Phasellus nunc elit, rutrum non porttitor at, eleifend id velit. Aenean pellentesque ultrices lorem, quis efficitur massa porttitor eu. Ut a blandit dolor. Nulla accumsan et tellus ut commodo. Fusce metus mauris, egestas a congue eu, accumsan ut orci. Pellentesque ac tellus non orci dapibus efficitur et vel diam. Phasellus convallis sapien eu tincidunt vestibulum. Nulla facilisi. Sed lacinia gravida mattis. Pellentesque scelerisque est et euismod sodales.</p>
      <p>Duis ornare metus vel neque varius finibus. Donec at laoreet augue, non porta turpis. Ut ac mauris est. Sed ut eleifend nisl, id vehicula tortor. Morbi convallis lectus at nibh lobortis semper. Sed malesuada eu ligula dictum tincidunt. Duis ac nulla euismod, iaculis nisi a, lobortis diam. Aenean vulputate nibh ac velit consequat ullamcorper.</p>
      <p>Suspendisse et erat sed justo molestie faucibus a sit amet quam. Curabitur sed mattis turpis. Vivamus porta massa id neque facilisis, nec euismod libero finibus. Proin euismod erat vel felis tempor ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus vulputate dapibus eros, vitae suscipit lacus. Mauris in ultricies orci. Maecenas quis lorem eu est convallis scelerisque at interdum justo. Vivamus ornare at ligula eu pellentesque. Etiam in mi ornare, euismod felis eget, mattis dui. Vivamus pretium ipsum eu orci cursus, vel blandit sem maximus. Etiam et fringilla mi. </p>
    </div>
  );
}

export default App;