let toDoListMemoryStorage = [];

class ToDoList {
  constructor(date, title, completedList, pendingList) {
    this.date = date;
    this.title = title;
    this.completedList = completedList;
    this.pendingList = pendingList;
  }
}

let progress = (planData) => {
  result = planData.completedList.length / (planData.completedList.length + planData.pendingList.length) * 100
  if(isNaN(result)){
    return 0;
  } else {
    return result;
  }
}

let cardTemplate = (planData, sequence) => `
<div class="card col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
    <div class="card-body">
        <h5 class="card-title">${planData.date} ${planData.title}</h5>
        <p class="card-text">진행률 : ${Math.round(Math.round(progress(planData)))}%</p>
        <button onclick="openList(${sequence})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#taskModal">상세 보기</button>
        <button type="button" class="delete-plan-button btn-close" aria-label="Close" onclick="deletePlan(${planData.sequence})"></button>
    </div>
</div>
`

let createNewCardTemplate = () => `
<div class="card col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
<div class="card-body text-center" data-bs-toggle="modal" data-bs-target="#addNewPlan">
    <h5 class="card-title">
        새로운 일정 추가하기
    </h5>
    <p class="h4 card-text">+</p>
    </div>
</div>
`

let printPlans = () => {
  let $listWrapper = document.getElementById('list-wrapper');
  console.log($listWrapper);
  let tempTDL = '';
  for (let sequence in toDoListMemoryStorage) {
    tempTDL += cardTemplate(toDoListMemoryStorage[sequence], sequence);
  }
  tempTDL += createNewCardTemplate();
  $listWrapper.innerHTML = tempTDL;
}


let addPlans = () => {
  $addPlanTitle = document.getElementById("add-plan-title");
  $addPlanDate = document.getElementById("add-plan-date");
  newPlan = new ToDoList($addPlanTitle.value, $addPlanDate.value, [], []);
  toDoListMemoryStorage.push(newPlan);
  $addPlanTitle.value = "";
  $addPlanDate.value = "";
  printPlans();
}

let deletePlan = (sequence) => {
  toDoListMemoryStorage.splice(sequence,1);
  printPlans();
}

let openList = (sequence) => {
  $planTitle = document.getElementById('planTitle');
  $addTaskButton = document.getElementById('add-task-button');
  drawCheckFormList(sequence);
  $planTitle.innerHTML = `${toDoListMemoryStorage[sequence].title} (${toDoListMemoryStorage[sequence].date})`;
  $addTaskButton.setAttribute('onClick', `addNewTask(${sequence})`);
}

let drawCheckFormList = (sequence) => {
  document.getElementById('pending-list-number').innerHTML = `할 일이 ${toDoListMemoryStorage[sequence].pendingList.length}개 남았습니다!!`;
  let form = '';
  for (let i in toDoListMemoryStorage[sequence].pendingList) {
    form += `
    <div class="form-check">
    <input onclick="pendingCheckboxEvent(${sequence}, ${i})" class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
    <label class="form-check-label" for="flexCheckChecked">${toDoListMemoryStorage[sequence].pendingList[i]}</label>
    <button onclick="deleteTask(${sequence}, ${i}, 0)" type="button" class="btn-close btn-close-muted close-button-font" aria-label="Close"></button>
    </div>`
  }
  for (let i in toDoListMemoryStorage[sequence].completedList) {
    form += `
    <div class="form-check">
    <input onclick="completedCheckboxEvent(${sequence}, ${i})" class="form-check-input " type="checkbox" value="" id="flexCheckChecked" checked>
    <label class="form-check-label" for="flexCheckChecked">${toDoListMemoryStorage[sequence].completedList[i]}</label>
    <button onclick="deleteTask(${sequence}, ${i}, 1)" type="button" class="btn-close btn-close-muted close-button-font" aria-label="Close"></button>
    </div>`
  }
  document.getElementById('checkForms').innerHTML=form;
}

let addNewTask = (sequence) => {
  $addTaskValue = document.getElementById("add-task-value");
  toDoListMemoryStorage[sequence].pendingList.push($addTaskValue.value);
  drawCheckFormList(sequence);
  $addTaskValue.value = "";
  printPlans();
}

let deleteTask = (planSequence, taskSequence, state) => { //state 0->pending 1->completed
  if(state){
    toDoListMemoryStorage[planSequence].completedList.splice(taskSequence,1);
  } else {
    toDoListMemoryStorage[planSequence].pendingList.splice(taskSequence,1);
  }
  drawCheckFormList(planSequence);
  printPlans();
}

let pendingCheckboxEvent = (planSequence, taskSequence) => {
  console.log(planSequence, taskSequence);
  console.log(toDoListMemoryStorage[planSequence].pendingList[taskSequence]);
  toDoListMemoryStorage[planSequence].completedList.push(toDoListMemoryStorage[planSequence].pendingList[taskSequence]);
  toDoListMemoryStorage[planSequence].pendingList.splice(taskSequence,1);
  drawCheckFormList(planSequence);
  printPlans();
}

let completedCheckboxEvent = (planSequence, taskSequence) => {
  console.log(toDoListMemoryStorage[planSequence].completedList[taskSequence]);
  toDoListMemoryStorage[planSequence].pendingList.push(toDoListMemoryStorage[planSequence].completedList[taskSequence]);
  toDoListMemoryStorage[planSequence].completedList.splice(taskSequence,1);
  drawCheckFormList(planSequence);
  printPlans();
}

//for test
let makeTestCase = () => {
  newPlan = new ToDoList("이사 날", "2021/12/20", ["이사하기","코딩하기","부동산 아줌마랑 싸우기","집주인이랑 싸우기"], ["방정리하기"]);
  toDoListMemoryStorage.push(newPlan);
  newPlan = new ToDoList("정리하는 날", "2021/12/21", ["정리하기","공부하기","집주인이랑 싸우기"], ["커텐 달기", "러그 깔기"]);
  toDoListMemoryStorage.push(newPlan);
}

makeTestCase();
printPlans();
