import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import ReadReply from './ReadReply';

function Reply(props) {
  const { id } = props;
  const [, setSelectedValue] = useState('regist_order');
  const [visible, setVisible] = useState(true);
  const [reviewData, setReviewData] = useState([]);
  const textAreaRef = useRef(null);
  const [value, setValue] = useState('');
  const projectId = useState(0);
  const [refresh, setRefresh1] = useState(true);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
    if (inputValue.length > 255) {
      setValue(inputValue.substring(0, 255));
      alert('대댓글은 255자까지 입력하실 수 있습니다.');
      return;
    }
    setValue(inputValue);
  };

  function MoveToTop() {
    // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleRefresh() {
    setSelectedValue('regist_order');
  }

  async function getReview() {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/reviews/gym/${id}`,
      );
      console.log(res.data);
      setReviewData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getReview();
  }, [refresh]);

  async function postData() {
    const url = 'http://localhost:8080/api/reviews';
    const data = {
      gymId: 1,
      content: value,
      star: 4,
    };

    try {
      const res = await axios.post(url, data);
      console.log(res.data);
      setRefresh(!refresh);
      setValue('');
      setSelectedValue('regist_order');
    } catch (error) {
      if (!navigator.onLine) {
        alert('오프라인 상태입니다. 네트워크 연결을 확인해주세요.');
      } else if (value.trim().length === 0) {
        alert('댓글을 입력해주세요.');
      } else {
        console.log(error);
        alert('네트워크 오류');
      }
    }
  }

  function setRefresh() {
    setRefresh1(!refresh);
  }

  return (
    <div>
      {/* 댓글 개수, 댓글 나열 카테고리 */}
      <div className="mb-2 flex flex-row whitespace-nowrap border-b-2 border-graphyblue">
        <span
          className="mr-2 flex flex-row font-ng-b text-sm sm:text-lg"
          data-testid="replyCount"
        >
          전체 댓글 {reviewData.length}개
        </span>
        <select
          className="mb-1 hidden rounded border border-black bg-graphybg font-ng text-sm sm:block"
          data-testid="orderSelect"
        >
          <option value="regist_order">등록순</option>
          <option value="newest_order">최신순</option>
          <option value="reply_order">답글순</option>
        </select>
        <div className="mx-auto mr-0 mb-2">
          <button
            className="mr-2 border-r border-gray-500 pr-2 font-ng-b text-xs sm:text-sm"
            onClick={() => MoveToTop()}
            type="button"
          >
            본문 보기
          </button>
          <button
            className="mr-2 border-r border-gray-500 pr-2 font-ng-b text-xs sm:text-sm"
            onClick={() => setVisible(!visible)}
            type="button"
          >
            {visible ? '댓글 닫기' : '댓글 열기'}
          </button>
          <button
            className="mr-1 font-ng-b text-xs sm:text-sm"
            onClick={() => handleRefresh()}
            type="button"
          >
            새로고침
          </button>
        </div>
      </div>
      {/* 댓글 표시 */}
      <div className="my-2 border-graphyblue">
        {visible ? (
          <>
            {reviewData.map((x, y) => (
              <ReadReply
                contents={x}
                key={y}
                setSelectedValue={setSelectedValue}
                setRefresh={setRefresh}
              />
            ))}
          </>
        ) : null}
        {/* 댓글 입력창 */}
        <div className="mb-8 mt-3 border-t-2 border-graphyblue py-3">
          <div className="min-h-24 flex h-auto flex-col rounded-xl border-2 border-gray-400">
            <textarea
              className="h-auto w-full resize-none appearance-none rounded-xl bg-graphybg py-2 px-3 font-ng leading-tight text-gray-700 focus:outline-none"
              id="reply"
              placeholder="댓글을 입력하세요."
              ref={textAreaRef}
              value={value}
              onChange={handleChange}
            />
            <button
              className="focus:shadow-outline m-auto my-2 mr-2 h-8 w-16 appearance-none place-items-end rounded-lg border-2 border-gray-400 bg-graphybg font-ng hover:bg-gray-200"
              type="submit"
              onClick={postData}
            >
              등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reply;
