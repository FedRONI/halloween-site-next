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
          <div className="site__category">
            <div className="category_text">Favorite Scare Category</div>
            <div className="category_block">
              <div className="block__ghosts">
                <div className="ghost"></div>
                <div className="ghost__text">
                <div className="name_text">Ghosts</div>
                <div className="text__sod">Choose the gosts</div>
                </div>
              </div>
              <div className="block__pumpkins">
                <div className="pimpkin"></div>
                <div className="pimpkin__text">
                <div className="name_text">Pumpkins</div>
                <div className="text__sod">Lol pumpkins</div>
                </div>
              </div>
              <div className="block__whitch">
                <div className="whitch"></div>
                <div className="whitch__text">
                  <div className="name_text">Whitch Hat</div>
                  <div className="text__sod">Omg this is witch</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
