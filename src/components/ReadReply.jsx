import axios from 'axios';
import { useState } from 'react';
import PutReply from './PutReply';
import delete_reply from '../assets/image/delete.svg';
import pencil_square from '../assets/image/pencil-square.svg';
import reply_icon from '../assets/image/reply_icon.svg';

function ReadReply(props) {
  const { contents, setSelectedValue, setRefresh, id } = props;

  const [putVis, setPutVis] = useState(false);

  const changePutVis = () => {
    setPutVis(false);
  };

  async function deleteReReply() {
    const url = `http://localhost:8080/api/reviews/${contents.reviewId}`;
    try {
      const res = await axios.delete(url);
      console.log(res.data);
      setRefresh();
    } catch (error) {
      if (!navigator.onLine) {
        alert('오프라인 상태입니다. 네트워크 연결을 확인해주세요.');
      } else {
        console.error(error);
        alert('답글 삭제 실패');
      }
    }
  }

  return (
    <>
      <div className="relative">
        <img
          src={reply_icon}
          className="absolute ml-2 mt-1 h-5"
          alt="reply icon"
        />
        <div className="mt-3 ml-8 h-auto rounded-lg border-2 border-gray-400">
          <div className=" flex flex-row border-b border-dashed border-gray-400 py-1 pl-2 font-ng text-sm ">
            <p className="ml-1 mr-3 font-ng">ID {contents.reviewId}</p>
            <p className="mr-3 hidden border-l border-dashed border-gray-400 pl-3 pr-3 font-ng-b sm:block">
              {contents.createAt}
            </p>
            <div className="mx-auto mr-2 flex flex-row">
              <div className="mr-2">{contents.star}점</div>
              <button
                className="flex items-center border-l border-dashed border-gray-400 pr-3 pl-2"
                type="button"
                onClick={() => deleteReReply()}
              >
                <img
                  src={delete_reply}
                  className="mr-1 h-4 font-ng text-sm"
                  alt="delete icon"
                />
                삭제
              </button>
              <button
                className="flex items-center border-l border-dashed border-gray-400 pr-2 pl-3"
                type="button"
                onClick={() => setPutVis(!putVis)}
              >
                <img
                  src={pencil_square}
                  className="mr-1 h-3 font-ng text-sm"
                  alt="pencil icon"
                />
                수정
              </button>
            </div>
          </div>
          <p
            className="my-1 ml-2 break-words font-ng"
            placeholder="댓글 로딩중"
          >
            {contents.content}
          </p>
        </div>
      </div>
      {/* 댓글 수정창 */}
      <div className="ml-8">
        {putVis ? (
          <div className="ml-8">
            <PutReply
              contents={contents}
              changePutVis={changePutVis}
              setSelectedValue={setSelectedValue}
              setRefresh={setRefresh}
              id={id}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default ReadReply;
