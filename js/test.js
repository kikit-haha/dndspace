//테스트용 데이터 생성
const List = [];
for (let i = 0; i < 33; i++) {
  List.push({
    number: i,
    title: "문의" + i,
    date: "2021-10-02",
    content: "문의내용" + i,
    answer: true,
    id: "user" + i,
    answerData: "답변" + i,
  });
}
for (let i = 33; i < 36; i++) {
  List.push({
    number: i,
    title: "문의" + i,
    date: "2021-10-02",
    content: "문의내용" + i,
    answer: false,
    id: "user" + i,
    answerData: "답변" + i,
  });
}

// console.log(List, ": List");

const QuestionLists = document.querySelector("#question-lists");
const end = List.length;
const start = end - 10;
const listSize = 10;
const rangeCnt = Math.ceil(List.length / listSize);

let listNow = [];
let range = 1;

console.log(start, end);

//데이터 뒤에서부터 10개씩자른 리스트 만든다
function makeList(rangeNow) {
  let startNow;
  let endNow;

  if (rangeNow === 1) {
    startNow = start;
    endNow = end;
  }

  if (rangeNow === rangeCnt) {
    startNow = 0;
  } else {
    startNow = start - 10 * (rangeNow - 1);
  }

  endNow = end - 10 * (rangeNow - 1);
  listNow = List.slice(startNow, endNow);
  return listNow;
}

function printList(rangeNum) {
  //rangeNumber에따라서 게시판목록 만들기
  const Lists = document.createElement("ul");
  Lists.classList.add("lists");

  const contentList = makeList(rangeNum);
  console.log(contentList, ": contentList");

  contentList.map((elem) => {
    let answer = elem.answer ? true : false;
    let answerState = answer ? "question-state complete" : "question-state";

    const li = document.createElement("li");
    li.classList.add("list", "question");

    li.innerHTML = `
    <a href="./sub/request_A.html" title="${elem.title} 보기">
      <div>${elem.number}</div>
      <div class="question-title">${elem.title}</div>
      <div>${elem.date}</div>
      <div class="question-id">
        ID: <span class="user-id">${elem.id}</span>
      </div>
      <div class="${answerState}">${answer ? "답변완료" : "답변대기"}</div>
    </a>
`;
    //array에서 뒤에있는데이터(최신데이터)가 앞에오도록 넣어야한다
    Lists.insertBefore(li, Lists.firstChild);
  });
  QuestionLists.appendChild(Lists);
}

printList(1);
