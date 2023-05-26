import PutReply from './PutReply';
import delete_reply from '../assets/image/delete.svg';
import pencil_square from '../assets/image/pencil-square.svg';
import reply_icon from '../assets/image/reply_icon.svg';

function ReadReply() {
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
            <p className="ml-1 mr-3 font-ng">ID 1</p>
            <p className="mr-3 hidden border-l border-dashed border-gray-400 pl-3 pr-3 font-ng-b sm:block">
              2000-00-00
            </p>
            <div className="mx-auto mr-2 flex flex-row">
              <button
                className="flex items-center border-l border-dashed border-gray-400 pr-3 pl-2"
                type="button"
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
            123
          </p>
        </div>
      </div>
      {/* 댓글 수정창 */}
      <div className="ml-8">
        <PutReply />
      </div>
    </>
  );
}

export default ReadReply;
