export default function Contents({ children }) {
  return (
    <div className="contents">      
      <div className="cont-wrap">
        <div className="cont-area">{ children }</div>
      </div>
    </div>
  );
}   
