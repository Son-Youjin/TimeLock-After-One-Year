const ONE_DAY = 1000 * 60 * 60 * 24;

export const db = {
  letters: [
    {
      id: "1",
      title: "27살의 나에게",
      content: "어쩌구저쩌구 잘지내니.",
      createdAt: Date.now() - ONE_DAY * 105,
      openAt: Date.now() + ONE_DAY * 260,
      song: {
        title: "REBEL HEART",
        artist: "IVE",
        cover: "img-url1",
      },
    },
    {
      id: "2",
      title: "마음 울적한 날엔 거리를 걸어보고",
      content: "운동하자",
      createdAt: Date.now() - ONE_DAY * 300,
      openAt: Date.now() + ONE_DAY * 65,
      song: {
        title: "칵테일 사랑",
        artist: "마로니에",
        cover: "img-url2",
      },
    },
    {
      id: "3",
      title: "기죽지말거라",
      content: "하다보면 되겠지",
      createdAt: Date.now() - ONE_DAY * 363,
      openAt: Date.now() + ONE_DAY * 2,
      song: {
        title: "원더우먼",
        artist: "씨야",
        cover: "img-url3",
      },
    },
  ],
};
