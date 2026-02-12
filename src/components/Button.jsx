export default function Button({ action, onAction }) { 
  //console.log(action);
  let title = "";
  let className = "";

  switch (action) { 
    case "write":
      title = "입력"
      break;
    case "save":
      title = "저장";
      break;
    case "edit":
      title = "수정";
      break;
    case "delete":
      title = "삭제";
      break;
    case "cancel":
      title = "취소";
      break;
    default:
      return null;
  }

  return (
    <button className={className} onClick= {onAction}> { title }</button>
  );
};