import { useContext } from 'react';
import {CardContext, CardProvider} from './CardContext';
import InfoArea from './InfoArea';
import SubHeader from '../components/SubHeader';

//반복 처리 컴포넌트
function CardItemData({dataitem}){
  const {handleSelect, toggleLike} = useContext(CardContext); // 선택함수, 좋아요토글 컴포넌트트
  return(
    
  <li className="card-item">
    <div className="cont-wrap">
      {/* 카드선택 */}
      <div  onClick={() => handleSelect(dataitem.id, "view")}>
        <dl>
          <dt><img src = {dataitem.src} /></dt>
          <dd className="info-area">
            <p>{dataitem.name}</p>
            <p>
              <button className = "btn-like" onClick={()=> toggleLike(dataitem.id)}> {dataitem.like ? "♥" : "♡"} </button>
            </p>
          </dd>
        </dl>
      </div>
    </div>
  </li>
  );
}
//카드 영역 컴포넌트
function CardItem(){
  const { list } = useContext(CardContext); //카드목록 컴포넌트
  return(
    <div className="card-area">
      <ul>
        {list.map(item => (
          <CardItemData
            key={item.id}
            dataitem={item}
          />
        ))}
      </ul>
    </div>
  );
}
//전체 컴포넌트
function CardWrapper({datalist}){ 
      return(
    <div className="card-wrapper">
      <CardProvider initialList={datalist}>
        <InfoArea />
        <CardItem />
      </CardProvider>
    </div>
  );
}

//가상의 데이터
const DATAS = [
  {id:1, name: "동물이미지1", src: "/image/animal-a.png", alt: "", like: true},
  {id:2, name: "동물이미지2", src: "/image/animal-b.png", alt: "", like: true},
  {id:3, name: "동물이미지3", src: "/image/animal-c.png", alt: "", like: false},
  {id:4, name: "동물이미지4", src: "/image/animal-d.png", alt: "", like: true},
  {id:5, name: "동물이미지5", src: "/image/animal-e.png", alt: "", like: false},
];

export default function Card() {
  return (
    <>
      <SubHeader title="카드정보" />
      <CardWrapper datalist={DATAS} />
    </>
  );
}