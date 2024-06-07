import './App.css'

import { Header } from './components/Header';
import { Home } from "./pages/Home";

export default function App() {

  return (
    <>
      <div className="bg-black min-h-screen text-white">
        <Header />
        <Home />
      </div>
    </>
  )
}