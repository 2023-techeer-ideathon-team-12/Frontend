import favorite from '../assets/image/favorite.png';
import nonfavorite from '../assets/image/nonfavorite.png';
import ScoreChart from './ScoreChart';

function Score() {
  return (
    <div className="">
      <div>
        <div className="flex">
          {/*별점 */}
          <div className="flex flex-col justify-center">
            <span className=" text-5xl mb-4 mx-auto">4</span>
            {/*별 */}
            <div className="flex">
              <img className="w-6 h-6" src={favorite} />
              <img className="w-6 h-6" src={favorite} />
              <img className="w-6 h-6" src={favorite} />
              <img className="w-6 h-6" src={favorite} />
              <img className="w-6 h-6" src={nonfavorite} />
            </div>
          </div>
          {/*막대 그래프 */}
          <ScoreChart />
        </div>
        <div className="w-96"></div>
      </div>
    </div>
  );
}

export default Score;
