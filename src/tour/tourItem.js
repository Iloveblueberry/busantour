/* 정보입력 */

const TourItem = ({ article }) => {
  const {
    MAIN_TITLE /* 콘텐츠명 */,
    TITLE /* 제목 */,
    GUGUN_NM /* 구군 */,
    HOMEPAGE_URL /* 홈페이지 */,
    MAIN_IMG_NORMAL /* 이미URL */,
    ADDR1 /* 주소 */,
    TRFC_INFO /* 교통정보 */
  } = article;
  return (
    <div className="item">
        <div className="title">
            <h3>#Best&nbsp;&nbsp;#추천#&nbsp;&nbsp;#여행지</h3>
        </div> {/* .title end */}
      <div className="info">
        <div className="title">
          <h3>#{GUGUN_NM}</h3>
          <strong>#{MAIN_TITLE}</strong>
          <h4>#{TITLE}</h4>
          <div className="ad">
            <p>{ADDR1}</p>
      {/*       {HOMEPAGE_URL && (
              <a href={HOMEPAGE_URL} target="_blank" rel="noreferrer">
                바로가기
              </a>
            )}
            {/* noreferrer : 해당페이지로 넘어가기 위해 http에게 요청함 */}
          </div>{/* ad end */}
        </div>{/* .title end */}

        <div className="image">
          <img src={MAIN_IMG_NORMAL} alt={TITLE} />
          <p>사이트 바로가기</p>
        </div>{/* .image end */}

      </div>{/* .info end */}

    </div> /* item end */
  );
};

export default TourItem;
