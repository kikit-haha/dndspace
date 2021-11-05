//테스트용 데이터 생성
const List = [];
let testEndNum = 210;
for (let i = 0; i < testEndNum; i++) {
  List.push({
    number: i,
    title: "문의" + i,
    date: "2021-10-02",
    content: "문의내용" + i,
    answer: true,
    id: "user" + i,
    name: "name" + 1,
    answerData: "답변" + i,
  });
}
for (let i = testEndNum; i < testEndNum + 3; i++) {
  List.push({
    number: i,
    title: "문의" + i,
    date: "2021-10-02",
    content: "문의내용" + i,
    answer: false,
    id: "user" + i,
    name: "name" + 1,
    answerData: "답변" + i,
  });
}
console.log(List.length, "length");

const QuestionLists = document.querySelector("#question-lists");

const end = List.length;
const start = end - 10;

let page = 1; // 현재목록의 페이지번호
let range = 1; // 현재 페이지가 소속된 range

const listSize = 10; // 한 페이지범위에 보여질 페이지 개수
const rangeSize = 5; // 한 페이지당 보여질 리스트개수

let listCnt = List.length; // 전체 게시물의 개수
let rangeCnt = Math.ceil(List.length / listSize);
console.log(rangeCnt, ": rangeCnt");
// 전체 페이지범위의 개수

let startRange = 1; //각 페이지 시작번호
let endRange = startRange + rangeSize - 1; // next가 true일때 각 페이지 끝번호

let prev; //이전페이지여부 boolean
let next; //다음페이지 여부 boolean

let listNow = [];

const prevBtn = document.createElement("button");
const nextBtn = document.createElement("button");

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

//rangeNumber에따라서 게시판목록 만들기
const questionLists = document.createElement("ul");
questionLists.classList.add("lists");

function printList(rangeNum) {
  if (questionLists.innerHTML) questionLists.innerHTML = "";
  const contentList = makeList(rangeNum);

  contentList.map((elem) => {
    let answer = elem.answer ? true : false;
    let answerState = answer ? "question-state complete" : "question-state";

    const li = document.createElement("li");
    li.classList.add("list", "question");

    li.innerHTML = `
    <a href="#" title="${elem.title} 보기">
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
    questionLists.insertBefore(li, questionLists.firstChild);
  });
  QuestionLists.appendChild(questionLists);
}

//페이지네이션
//첫페이지 , 다음 눌렀을때 보여지는 모습
const paginationLists = document.querySelector("#pagination-lists");
const pagination = document.querySelector("#pagination");

//이전,이후버튼 이벤트 위임
pagination.addEventListener("click", function (e) {
  e.preventDefault();
  const target = e.target;
  console.log(target, ": target");
  if (target.id) {
    if (e.target.id === "request-prev-btn") {
      paginationLists.innerHTML = "";
      startRange -= rangeSize;
      endRange -= rangeSize;
      makePagination(startRange, endRange);
    } else if (target.id === "request-next-btn") {
      paginationLists.innerHTML = "";
      startRange += rangeSize;
      endRange += rangeSize;

      makePagination(startRange, endRange);
    }
  }

  if (target.nodeName === "A" && target.classList.contains("pagination-list")) {
    const target = e.target;
    const pagination = document.querySelectorAll(".pagination-list");

    Array.from(pagination).map((elem) => {
      elem.classList.remove("active");
    });
    target.classList.add("active");

    const rangeNum = parseInt(target.innerText);

    console.log(rangeNum, ": rangeNum");
    printList(rangeNum);
  }
});

function makePagination(_startRange, _endRange) {
  if (rangeCnt < _endRange) {
    _endRange = rangeCnt;
  }

  for (let i = _startRange; i <= _endRange; i++) {
    const list = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.setAttribute("href", "#");
    anchor.classList.add("pagination-list");
    anchor.innerText = i;
    list.appendChild(anchor);
    paginationLists.appendChild(list);
  }

  if (paginationLists.hasChildNodes()) {
    const firstChild = paginationLists.children[0].children[0];
    firstChild.classList.add("active");
    printList(_startRange);
  }

  const paginationPrevBtn = document.querySelector("#request-prev-btn");
  const paginationNextBtn = document.querySelector("#request-next-btn");

  if (_endRange % rangeSize === 0 && _endRange !== rangeCnt) {
    next = true;
    paginationNextBtn.classList.add("active");
  } else {
    next = false;
    paginationNextBtn.classList.remove("active");
  }

  if (_startRange === 1) {
    prev = false;
    paginationPrevBtn.classList.remove("active");
  } else {
    prev = true;
    paginationPrevBtn.classList.add("active");
  }
}

printList(1);
makePagination(startRange, endRange);
