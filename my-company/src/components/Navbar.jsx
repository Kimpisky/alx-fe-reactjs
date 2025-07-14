import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#333',
        padding: '10px 20px',
        alignItems: 'center',
        color: 'white'
      }}
    >
      <div style={{ fontWeight: 'bold', fontSize: '20px' }}>My Company</div>
      <div>
        <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 10px', color: 'white' }}>About</Link>
        <Link to="/services" style={{ margin: '0 10px', color: 'white' }}>Services</Link>
        <Link to="/contact" style={{ margin: '0 10px', color: 'white' }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
