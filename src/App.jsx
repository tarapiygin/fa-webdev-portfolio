import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import About from './routes/About/About';
import Contact from './routes/Contact/Contact';

export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navigation />}>
          <Route index element={<Header />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}
