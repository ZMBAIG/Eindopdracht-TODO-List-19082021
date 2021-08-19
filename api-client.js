const getTask = function (obj) {
  fetch(`https://wincacademydatabase.firebaseio.com/baig.json`, {
    method: "GET",
    body: JSON.stringify(obj),
  });
};

const patchTask = function (obj) {
  fetch(`https://wincacademydatabase.firebaseio.com/baig.json`, {
    method: "POST",
    body: JSON.stringify(obj),
  });
};

const deleteTask = function (id) {
  fetch(`https://wincacademydatabase.firebaseio.com/baig/${id}.json`, {
    method: "DELETE",
  });
};

const changeDone = function (id, value) {
  fetch(`https://wincacademydatabase.firebaseio.com/baig/${id}/done.json`, {
    method: "PUT",
    body: value,
  });
};

const changeText = function (id, value) {
  fetch(`https://wincacademydatabase.firebaseio.com/baig/${id}/text.json`, {
    method: "PUT",
    body: JSON.stringify(value),
  });
};
