import React from 'react'
import { Link } from 'react-router-dom'
import { menu } from '../utils/restaurant'
import { ItemWrap, Title, Wrap } from './style'

const Soups = () => {
  return (
    <Wrap>
        <Title soup>
        <div>Suyuq Ovqatlar</div><span>/</span>
        <div>Soups</div><span>/</span>
        <div>수프</div>
      </Title>
      <ItemWrap>
          {
            menu.slice(4,7).map((val)=>(
              <div key={val.id} className='image-wrap'>
              <Link to={`/soups/:${val.id}`}><img  src={val.img} alt="" /></Link>
              </div>
            ))
          }
      </ItemWrap>
    </Wrap>
  )
}

export default Soups;