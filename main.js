var addtask = document.querySelector(".addtask");
var cardContainer = document.querySelector(".card-container");

var tasks = [];

var listItems = (taskData) => {
  return taskData.map((item) => {
    return `<div class="first-container">
  <div class="first-text">${item.title}</div>
  <div class="second-text">
    ${item.desc}
  </div>
  <div class="date">
    <img
      src="icon/icons8-calendar-64 (2).png"
      alt=""
      class="date-img"
    />
    ${item.date}
  </div>
</div>
<div class="divider"></div>
`;
  });
};

addtask.addEventListener("click", () => {
  var nameoftask = document.querySelector(".taskname").value;
  console.log(nameoftask);

  var smailtask = document.querySelector(".description").value;
  console.log(smailtask);

  var date = document.querySelector(".date2").value;
  console.log(date);

  const taskItem = {
    title: nameoftask,
    desc: smailtask,
    date: date,
  };

  tasks.push(taskItem);
  console.log(tasks);
  cardContainer.innerHTML = listItems(tasks);
});

// cardContainer.innerHTML = listItems;
