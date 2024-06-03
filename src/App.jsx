import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Contact from './routes/Contact/Contact';
import Index from './routes/Index/Index';

export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/fa-webdev-portfolio/" element={<Navigation />}>
          <Route path="/fa-webdev-portfolio/" element={<Index />} />
          <Route path="/fa-webdev-portfolio/:lang/" element={<Index />} />
          <Route path="/fa-webdev-portfolio/:lang/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}
