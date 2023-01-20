import { Route, Routes } from 'react-router-dom';
import './App.css';
import BecomeWorker from './Components/BecomeWorker/BecomeWorker';
import RequireAuth from './Components/RequireAuth';
import About from './Pages/About/About';
import SignIn from './Pages/Authentication/SignIn/SignIn';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import Booking from './Pages/Bookings/Booking';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Services/Services';
import Service from './Pages/Services/SVProvidor/Service';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Success from './Pages/Succss/Success';

function App() {
  return (
    <div className="App pt-16">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/service/:id' element={<Service />} />
        <Route path='/joinus' element={<RequireAuth><BecomeWorker /></RequireAuth>} />
        <Route path='/hire/:srvid/:id' element={<RequireAuth><Booking /></RequireAuth>} />
        <Route path='/ssl-payment-success/:id' element={<RequireAuth><Success /></RequireAuth>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
