import Body from "./componenets/Body";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
     <Body/>
       <ToastContainer 
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
    </div>
  );
}

export default App;
