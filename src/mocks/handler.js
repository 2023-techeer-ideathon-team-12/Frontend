import { rest } from 'msw';

export const handlers = [
  rest.get('/api/gym', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        gym_name: 'ㅁㅁ체육관',
        address: '경기도 시흥시 산기대학로 237 한국공학대학교',
        current_user: '40',
        machine: ['바벨', '덤벨', '케틀벨'],
        star_avg: 4,
        thumbnail_url: 'mockurl',
        gym_latitude: 37.34408968277233,
        gym_longtitude: 126.74015069537656,
        created_at: '2000-01-01T00:00:00.000000',
        updated_at: '2000-01-01T00:00:00.000000',
      }),
    );
  }),

  rest.get('/api/review', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        {
          gym_id: 0,
          content: '가짜 내용',
          star: 4,
          created_at: '2000-01-01T00:00:00.000000',
          updated_at: '2000-01-01T00:00:00.000000',
        },
        {
          gym_id: 1,
          content: '가짜 내용',
          star: 5,
          created_at: '2000-01-01T00:00:00.000000',
          updated_at: '2000-01-01T00:00:00.000000',
        },
      ),
    );
  }),
];
