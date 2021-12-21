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

let progress = (planData) => {
  result = planData.completedList.length / (planData.completedList.length + planData.pendingList.length) * 100
  if(isNaN(result)){
    return 0;
  } else {
    return result;
  }
}

let cardTemplate = (planData) => `
<div class="card col-xl-3 col-lg-4 col-md-6 col-12 mb-4">
    <div class="card-body">
        <h5 class="card-title">${planData.date} ${planData.title}</h5>
        <p class="card-text">진행률 : ${progress(planData)}%</p>
        <button onclick="openList(${planData.sequence})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#taskModal">상세 보기</button>
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
  for (let planData of toDoListMemoryStorage) {
    tempTDL += cardTemplate(planData);
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

let openList = (sequence) => {
  $planTitle = document.getElementById('planTitle');
  $pendingListNumber = document.getElementById('pending-list-number');
  $addTaskButton = document.getElementById('add-task-button');
  drawCheckFormList(toDoListMemoryStorage[sequence]);
  $planTitle.innerHTML = `${toDoListMemoryStorage[sequence].title} (${toDoListMemoryStorage[sequence].date})`;
  $pendingListNumber.innerHTML = `할 일이 ${toDoListMemoryStorage[sequence].pendingList.length}개 남았습니다!!`;
  $addTaskButton.setAttribute('onClick', `addNewTask(${sequence})`);
}

let drawCheckFormList = (list) => {
  let form = '';
  for (let pending of list.pendingList) {
    form += `
    <div class="form-check">
    <input class="form-check-input " type="checkbox" value="" id="flexCheckChecked" >
    <label class="form-check-label" for="flexCheckChecked">${pending}</label>
    </div>`
  }
  for (let completed of list.completedList) {
    form += `
    <div class="form-check">
    <input class="form-check-input " type="checkbox" value="" id="flexCheckChecked" checked>
    <label class="form-check-label" for="flexCheckChecked">${completed}</label>
    </div>`
  }
  document.getElementById('checkForms').innerHTML=form;
}

let addNewTask = (sequence) => {
  $addTaskValue = document.getElementById("add-task-value");
  toDoListMemoryStorage[sequence].pendingList.push($addTaskValue.value);
  drawCheckFormList(toDoListMemoryStorage[sequence]);
  $addTaskValue.value = "";
  printPlans();
}

printPlans();
