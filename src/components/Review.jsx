import example from '../assets/image/example.jpeg';
import Score from './Score';
import Reply from './Reply';

function ReviewPage(props) {
  const { infoData, id } = props;
  return (
    <div>
      {/*맨 위*/}
      <div>
        {/*공지 */}
        <div>
          <div className="flex">
            <div className=" text-xl ml-2">헬스장 공지</div>
            <div className="mx-auto mr-2 text-gray-500">2023년 04월 10일</div>
          </div>
          <div className="flex justify-center w-96">
            <img src={example} />
          </div>
        </div>
        {/*별점 */}
        <Score infoData={infoData} />
        {/*리뷰 */}
        <Reply id={id} />
      </div>
    </div>
  );
}

export default ReviewPage;
