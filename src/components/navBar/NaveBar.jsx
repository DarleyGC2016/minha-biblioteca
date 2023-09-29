import { Link } from "react-router-dom"

const NaveBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/novo'}>Novo</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NaveBar