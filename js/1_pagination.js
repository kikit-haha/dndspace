const listData = [
  {
    number: 1,
    title: "문의1",
    date: "2021-09-01",
    content: "문의내용1",
    answer: true,
    id: "user1",
    answerData: "답변1",
  },
  {
    number: 2,
    title: "문의2",
    date: "2021-09-03",
    content: "문의내용2",
    answer: true,
    id: "user2",
    answerData: "답변2",
  },
  {
    number: 3,
    title: "문의3",
    date: "2021-09-05",
    content: "문의내용3",
    answer: true,
    id: "user3",
    answerData: "답변3",
  },
  {
    number: 4,
    title: "문의4",
    date: "2021-09-01",
    content: "문의내용4",
    answer: true,
    id: "user4",
    answerData: "답변4",
  },
  {
    number: 5,
    title: "문의5",
    date: "2021-09-10",
    content: "문의내용5",
    answer: true,
    id: "user5",
    answerData: "답변5",
  },
  {
    number: 6,
    title: "문의6",
    date: "2021-09-15",
    content: "문의내용6",
    answer: true,
    id: "user6",
    answerData: "답변6",
  },
  {
    number: 7,
    title: "문의7",
    date: "2021-09-21",
    content: "문의내용7",
    answer: true,
    id: "user7",
    answerData: "답변7",
  },
  {
    number: 8,
    title: "문의8",
    date: "2021-09-24",
    content: "문의내용8",
    answer: true,
    id: "user8",
    answerData: "답변8",
  },
  {
    number: 9,
    title: "문의9",
    date: "2021-09-25",
    content: "문의내용9",
    answer: true,
    id: "user9",
    answerData: "답변9",
  },
  {
    number: 10,
    title: "문의10",
    date: "2021-10-21",
    content: "문의내용10",
    answer: true,
    id: "user10",
    answerData: "답변10",
  },
  {
    number: 11,
    title: "문의11",
    date: "2021-10-24",
    content: "문의내용11",
    answer: true,
    id: "user11",
    answerData: "답변11",
  },
  {
    number: 12,
    title: "문의12",
    date: "2021-10-02",
    content: "문의내용12",
    answer: true,
    id: "user12",
    answerData: "답변12",
  },
];

let page = 1; // 현재목록의 페이지번호
let range = 1; // 현재 페이지가 소속된 range

const listSize = 10; // 한 페이지범위에 보여질 페이지 개수
const rangeSize = 5; // 한 페이지당 보여질 리스트개수

let listCnt = 112; // 전체 개시물의 개수 가정
// let listCnt = listData.length;
let rangeCnt = listCnt ? Math.ceil(listCnt / listSize) : 0; // 전체 페이지범위의 개수

let startRange = 1; //각 페이지 시작번호
let endRange = startRange + rangeSize - 1; // 각 페이지 끝번호

let prev; //이전페이지여부 boolean
let next; //다음페이지 여부 boolean
const pagination = document.createElement("ul");
const requestList = document.createElement("ul");

const req = document.querySelector("#req");

function Pagination() {
  listData.slice(0, 10).map((data) => {
    const list = document.createElement("li");
    list.classList.add("req-list");
    list.textContent = data.title;
    requestList.appendChild(list);

    createQuestionList(index, title, date, id, answerState);
  });

  if (endRange < rangeCnt) {
    next = true; //next버튼 보이게
    //Q. 32페이지면 next가 생길텐데?
  } else {
    next = false;
  }

  if (startRange === 1) {
    prev = false;
  } else {
    prev = true;
  }
}

function createQuestionList(index, title, id, url) {
  const list = document.createElement("li");
  const link = document.createElement("a");
  link.setAttribute("href", url); //확인필요
  const number = document.createElement("div");
  number.classList.add("question-num");
  number.textContent = index;

  const titleElem = document.createElement("div");
  titleElem.classList.add("question-title");
  titleElem.textContent = title;

  const questionIdElem = document.createElement("div");
  questionIdElem.classList.add("id", "question-id");
  questionIdElem.textContent = "ID:";

  const idElem = document.createElement("div");
  idElem.classList.add("user-id");
  idElem.textContent = id;

  link.appendChild(number);
  link.appendChild(titleElem);
  link.appendChild(questionIdElem);
  link.appendChild(idElem);

  list.appendChild(link);
  console.log(list);
}

Pagination();
req.appendChild(requestList);
