function PutReply() {
  return (
    <div>
      {/* 대댓글 입력창 */}
      <div className="relative">
        <div className="mt-3 flex h-auto flex-col rounded-xl border-2 border-gray-400">
          <textarea
            className="min-h-24 h-auto w-full resize-none appearance-none rounded-xl bg-graphybg py-2 px-3 font-ng leading-tight text-gray-700 focus:outline-none"
            id="reply"
            placeholder="수정할 댓글을 입력하세요."
          />
          <button
            className="focus:shadow-outline m-auto my-2 mr-2 h-8 w-16 appearance-none place-items-end rounded-lg border-2 border-gray-400 bg-graphybg font-ng hover:bg-gray-200"
            type="submit"
          >
            수정
          </button>
        </div>
      </div>
    </div>
  );
}

export default PutReply;
