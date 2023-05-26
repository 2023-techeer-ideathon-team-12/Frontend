import ExampleReview from '../assets/image/ExampleReview.png';
import Score from './Score';
import Reply from './Reply';

function ReviewPage() {
  return (
    <div>
      {/*맨 위*/}
      {/*메뉴 */}
      <div>
        {/*공지 */}
        <div>
          <div className="flex">
            <div className=" text-xl ml-2">헬스장 공지</div>
            <div className="mx-auto mr-2 text-gray-500">2011년 06월 10일</div>
          </div>
          <div className="flex justify-center w-96">
            <img src={ExampleReview} />
          </div>
        </div>
        {/*별점 */}
        <Score />
        {/*리뷰 */}
        <Reply />
      </div>
    </div>
  );
}

export default ReviewPage;
