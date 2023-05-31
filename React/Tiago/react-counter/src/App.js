import { useState } from 'react';
import Counter from './Counter'
import Albums from './Albums'
import Users from './Users'

const defaultPage = 'albums'

const pages = {

  albums: {
    text:'Álbuns',
    component: Albums,
  },

  counter: {
    text:'Contador',
    component:Counter,
  },

  users: {
    text: 'Usuário',
    component: Users
  }

}

function App() {
  const [page, setPage] = useState(defaultPage)

  const handleChangePage = page => {
    setPage(page)
  }

  const Page = pages[page].component  

  const pageNames = Object.keys(pages)
  
  return (
    <>
     {
      pageNames.map(page => <button key={page} onClick={() => handleChangePage(page)}>{pages[page].text}</button>)
     }

     {<Page />}
    </>
  );
}

export default App;
