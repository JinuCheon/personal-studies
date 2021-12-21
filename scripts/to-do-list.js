let toDoListMemoryStorage = [];
let sequenceCounter = 0;

class ToDoList {
  constructor(date, title, completedList, pendingList) {
    this.sequence = sequenceCounter++;
    this.date = date;
    this.title = title;
    this.completedList = completedList;
    this.pendingList = pendingList;
  }
}

let cardTemplate = (planData) => `
<div class="card col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
    <div class="card-body">
        <h5 class="card-title">${planData.date} ${planData.title}</h5>
        <p class="card-text">진행률 : ${planData.completedList.length / (planData.completedList.length + planData.pendingList.length) * 100}%</p>
        <button onclick="openList(${planData.sequence})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">상세 보기</button>
    </div>
</div>
`

let createNewCardTemplate = () => `
<div class="card col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
<div class="card-body text-center">
    <h5 class="card-title">
        새로운 일정 추가하기
    </h5>
    <p class="h4 card-text">+</p>
    </div>
</div>
`

let checkFormList = (list) => {
  let form = '';
  for (let pending of list.pendingList) {
    form += `
      <div class="form-check">
        <input class="form-check-input " type="checkbox" value="" id="flexCheckChecked" checked>
        <label class="form-check-label" for="flexCheckChecked">${pending}</label>
      </div>`
  }
  for (let completed of list.completedList) {
    form += `
      <div class="form-check">
        <input class="form-check-input " type="checkbox" value="" id="flexCheckChecked">
        <label class="form-check-label" for="flexCheckChecked">${completed}</label>
      </div>`
  }
  return form
}

let openList = (sequence) => {
  $planTitle = document.getElementById('planTitle');
  $pendingListNumber = document.getElementById('pending-list-number');
  $checkForms = document.getElementById('checkForms');
  $checkForms.innerHTML = checkFormList(toDoListMemoryStorage[sequence])
}

let printList = () => {
  let $listWrapper = document.getElementById('list-wrapper');
  console.log($listWrapper);
  let tempTDL = '';
  newTDL();
  newTDL();
  newTDL();
  for (let planData of toDoListMemoryStorage) {
    tempTDL += cardTemplate(planData);
  }
  tempTDL += createNewCardTemplate();
  $listWrapper.innerHTML = tempTDL;
}

let newTDL = () => {
  const toDoList = new ToDoList("12/17", "일정제목", ["a", "b", "c"], ["d", "e", "f"]);
  toDoListMemoryStorage.push(toDoList);
}

printList();
