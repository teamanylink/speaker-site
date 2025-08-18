import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function TestHome() {
  return <div>Test Home Page Works!</div>;
}

function TestAbout() {
  return <div>Test About Page Works!</div>;
}

export default function TestRouter() {
  return (
    <Router>
      <div>
        <nav>
          <a href="/">Home</a> | <a href="/about">About</a>
        </nav>
        <Routes>
          <Route path="/" element={<TestHome />} />
          <Route path="/about" element={<TestAbout />} />
        </Routes>
      </div>
    </Router>
  );
}
