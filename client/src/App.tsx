import './App.css'

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      fontFamily: 'system-ui, sans-serif', 
      backgroundColor: '#121214', 
      color: '#e1e1e6' 
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem', color: '#ffcb05', textShadow: '2px 2px 0px #3c5aa6' }}>PokeHub</h1>
      <p style={{ fontSize: '1.2rem', color: '#a8a8b3', marginBottom: '1.5rem' }}>Launcher desktop para jogos Pokémon</p>
      <div style={{ padding: '0.5rem 1rem', backgroundColor: '#202024', borderRadius: '4px', border: '1px solid #29292e', fontSize: '0.9rem', color: '#04d361' }}>
        ⚡ Fase 0: Fundação — Electron + React + TS Ativos
      </div>
    </div>
  )
}

export default App
