/* 정보입력 */

const TourItem = ({ article }) => {
  const {
    MAIN_TITLE /* 콘텐츠명 */,
    TITLE /* 제목 */,
    SUBTITLE, /* 부제목 */
    GUGUN_NM /* 구군 */,
    MAIN_IMG_NORMAL /* 이미URL */,
    ADDR1 /* 주소 */
  } = article;
  return (
    <div className="item">
      <div className="info">
        <h3>테마별 여행지</h3>
      {/*       {HOMEPAGE_URL && (
              <a href={HOMEPAGE_URL} target="_blank" rel="noreferrer">
                바로가기
              </a>
            )}
            {/* noreferrer : 해당페이지로 넘어가기 위해 http에게 요청함 */}
        <div className="hashtag">
          <ul>
            <li>#{GUGUN_NM}</li>
            <li>#{SUBTITLE}</li>
            <li>#{ADDR1}</li>
            <li>#힐링</li>
          </ul>
        </div> {/* .hashtag end */}
        
        <div className="image">
          <img src={MAIN_IMG_NORMAL} alt={TITLE} />
          <div className="img_text">
            <div className="inner">
              <h2>{MAIN_TITLE}</h2>
            </div>{/* .inner end */}
          </div> {/* .img_text end */}
        </div>{/* .image end */}

      </div>{/* .info end */}

    </div> /* item end */
  );
};

export default TourItem;
