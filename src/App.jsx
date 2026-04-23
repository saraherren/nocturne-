import './App.css'
import heroImg from './assets/hero.png'

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Nocturne</h1>
        <p>A calm, dark-themed experience</p>

        {heroImg && (
          <img src={heroImg} alt="Nocturne hero" className="hero-img" />
        )}
      </header>

      <main>
        <section>
          <h2>Welcome</h2>
          <p>This is your app running on Vercel.</p>
        </section>

        <section>
          <h2>Next Steps</h2>
          <ul>
            <li>Customize your UI</li>
            <li>Add components</li>
            <li>Connect features</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
