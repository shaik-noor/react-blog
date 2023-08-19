import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/Article';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>My React App</h1>
      <div id="page-body">
        <Routes>
      <Route path="/"element = {<HomePage />} />
      <Route path="/about" element= {<AboutPage />}/>
      <Route path="/articles" element = {<ArticleListPage />} />
      <Route path="/article/:articleid" element = {<ArticlePage />} />
      </Routes> 
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
