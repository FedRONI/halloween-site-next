import Image from 'next/image'
import Menu from '../components/menu'
import home1 from '../images/home1-img.png'

export default function Category() {
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
          <Menu />
        </div>
        <div className="site__content">
          Категории
        </div>
      </div>
    </div>
  )
}
