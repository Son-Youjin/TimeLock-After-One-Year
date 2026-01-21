import TODAY_TIMESTAMP from "../utils/todayTimestamp";

const ONE_DAY = 1000 * 60 * 60 * 24;

export const db = {
  letters: [
    {
      id: "1",
      title: "27살의 나에게",
      content: "어쩌구저쩌구 잘지내니.",
      createdAt: TODAY_TIMESTAMP - ONE_DAY * 364,
      openAt: TODAY_TIMESTAMP + ONE_DAY * 1,
      song: {
        name: "REBEL HEART",
        artist: "IVE",
        cover: "img-url1",
      },
    },
    {
      id: "2",
      title: "마음 울적한 날엔 거리를 걸어보고",
      content: "운동하자",
      createdAt: TODAY_TIMESTAMP - ONE_DAY * 300,
      openAt: TODAY_TIMESTAMP + ONE_DAY * 65,
      song: {
        name: "칵테일 사랑",
        artist: "마로니에",
        cover: "img-url2",
      },
    },
    {
      id: "3",
      title: "기죽지말거라",
      content: "하다보면 되겠지",
      createdAt: TODAY_TIMESTAMP - ONE_DAY * 365,
      openAt: TODAY_TIMESTAMP,
      song: {
        name: "원더우먼",
        artist: "씨야",
        cover: "img-url3",
      },
    },
  ],
};
