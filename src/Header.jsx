import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className="header">
      <div className="header-description">掲示板</div>
      <div className="LinkToPostThread">
        <Link to={'/PostThread'}>スレッドをたてる</Link>
      </div>
    </header>
  )
}