/* tourItem 정보출력 */

import axios from 'axios';
import { useState, useEffect } from "react";
/* useEffect=> 비동기 가능
   동기:순적으로 값을 진행
   비동기:순차적x, 동시에 가능
   ex)키오스크 주문 동시에 여러개 가능 */
import TourItem from "./tourItem";

const TourList = () => {
  const key =
    "wZeUZ%2FgZ5NhsFo0K8jkOXzFSj7EGpzIcpkyrin3fjDAj3G1Zx87yjwq8UvfcP2rM%2B9tHF%2FOYfERVHUZXWpz2gw%3D%3D";
  const [tour, setTour] = useState([]);

  useEffect(() => {

    //비동기 작업시 사용하는 키워드
    //async
    //await
    //두개 같이 세트로 써야함!_!
    const tourData = async () => {

      /* try, catch
            // 에러가 발생 할 때 스크립트 중단, 콘솔에 출력
            // 에러가 없다면 try안에 코드 실행
            // 에러가 있다면 catch값으로 넘어감 */
      try {
        const response = await axios.get(
          `http://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=${key}&numOfRows=4&pageNo=1&resultType=json`
                                                                                            /* page앞에 숫자:웹에 보여지는 아이템갯수 ex)20=>20개 보여짐
                                                                                               No옆에 숫자: 페이지 번호 ex)5번 페이지 아이템들 보여줌*/
        );
        setTour(response.data.getAttractionKr.item);
      } catch (error) {
        console.log(error);
      }
    };
    tourData();
  }, []);

  return (
    <div className="list">
      <div className="main_list">
        {tour.map((tourMap) => (
          <TourItem article={tourMap} />
        ))}
      </div>
      {/* .main_list end */}
     
    </div> /* .list end */
  );
};

export default TourList;
