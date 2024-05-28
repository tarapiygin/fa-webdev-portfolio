import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Contact from './routes/Contact/Contact';
import Index from './routes/Index/Index';

export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navigation />}>
          <Route path="/" element={<Index />} />
          <Route path="/:lang/" element={<Index />} />
          <Route path="/:lang/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}
