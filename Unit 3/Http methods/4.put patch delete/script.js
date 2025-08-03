const BASE_URL = 'https://688f9ca7f21ab1769f89b17c.mockapi.io/users/users';
const taskList = document.getElementById('taskList');
const editForm = document.getElementById('editForm');
const editTitleInput = document.getElementById('editTitle');
const editStatusInput = document.getElementById('editStatus');
const saveBtn = document.getElementById('saveBtn');
const cancelBtn = document.getElementById('cancelBtn');
let editTaskId = null;

// 1. Load and Display Tasks
async function loadTasks() {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();

    taskList.innerHTML = '';
    data.forEach(task => {
      const card = document.createElement('div');
      card.className = 'task-card';

      const titleEl = document.createElement('h3');
      titleEl.innerText = task.title;

      const statusEl = document.createElement('p');
      statusEl.innerText = `Status: ${task.status}`;

      const editBtn = document.createElement('button');
      editBtn.className = 'btn';
      editBtn.innerText = 'Edit';
      editBtn.addEventListener('click', () => {
        showEditForm(task.id, task.title, task.status);
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn';
      deleteBtn.innerText = 'Delete';
      deleteBtn.addEventListener('click', () => {
        deleteTask(task.id);
      });

      card.appendChild(titleEl);
      card.appendChild(statusEl);
      card.appendChild(editBtn);
      card.appendChild(deleteBtn);
      taskList.appendChild(card);
    });
  } catch (err) {
    alert('Error fetching tasks');
  }
}

// 2. Show Edit Form
function showEditForm(id, title, status) {
  editTaskId = id;
  editTitleInput.value = title;
  editStatusInput.value = status;
  editForm.style.display = 'block';
}

// 3. Hide Edit Form
cancelBtn.onclick = () => {
  editForm.style.display = 'none';
  editTaskId = null;
};

// 4. Save Changes (PATCH)
saveBtn.onclick = async () => {
  const updatedTitle = editTitleInput.value;
  const updatedStatus = editStatusInput.value;

  try {
    await fetch(`${BASE_URL}/${editTaskId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: updatedTitle,
        status: updatedStatus,
      }),
    });
    editForm.style.display = 'none';
    editTaskId = null;
    loadTasks();
  } catch (err) {
    alert('Failed to update task');
  }
};

// 5. Delete Task
async function deleteTask(id) {
  const confirmDelete = confirm("Are you sure you want to delete?");
  if (!confirmDelete) return;

  try {
    await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
    loadTasks();
  } catch (err) {
    alert('Failed to delete task');
  }
}

// 6. Load Tasks on Page Load
loadTasks();