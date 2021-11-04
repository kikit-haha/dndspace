const lists = document.querySelector(".lists");

var data = [
  {
    index: 1,
    title: "제목1",
    id: "user1",
    content: "문의내용1",
    url: "./sub/request_A",
  },
];

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

function createAnswerList(title) {
  const list = document.createElement("li");
  const link = document.createElement("a");
  const answerPre = document.createElement("div");
  answerPre.classList.add("answer-pre");
  answerPre.textContent = "답변 :";

  const titleElem = document.createElement("div");
  titleElem.classList.add("answer-title");
  titleElem.textContent = title;

  const questionIdElem = document.createElement("div");
  questionIdElem.classList.add("id", "answer-id");
  questionIdElem.textContent = "ID:";

  const idElem = document.createElement("div");
  idElem.classList.add("answer-admin");
  idElem.textContent = "관리자";

  link.appendChild(answerPre);
  link.appendChild(titleElem);
  link.appendChild(questionIdElem);
  link.appendChild(idElem);

  list.appendChild(link);
  console.log(list);
}

createAnswerList("d", 1, 2);
//class로 만드는건 어떤가.. 뭐가 더좋지?
