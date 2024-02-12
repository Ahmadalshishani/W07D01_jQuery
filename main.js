//------------------Practice -----------------------

//Q2:
/*Using jQuery create two new elements when the page loads
1- create a header saying to do list 
2- create a empty unordered
 */

const body = $("body");
const header = $(`<h1>To do list </h1>`);
body.append(header);
const unordered = $(`<ul></ul>`);
body.append(unordered);

//Q3 :
/*Create a toDos global variable holding three todo items
1-item wake up 
2- eat breakfast
3-code
 */
const toDos = ["wake up", "eat breakfast", "code"];
//Q4 :
/*Create a function renderList
1-a function that repate the list for update
 */
const renderList = () => {
  unordered.html("");
  toDos.forEach((element, index) => {
    const item = $(`<li>${element}</li>`);
    unordered.append(item);
    //--------------Q6-------------------------
    const deleteItem = $(`<button>delete item</button>`);
    deleteItem.addClass(`${index}`);
    deleteItem.on("click", () => {
      toDos.splice(index, 1);
      renderList();
      deleteItem.remove();
    });
    //-----------------Q7--------------------
    const updateList = $(`<button>update</button>`);
    unordered.append(updateList);
    updateList.on("click", () => {
      updateListItem(index);
    });
    item.append(deleteItem);
  });
};
renderList();

//Q5 :
/*Using jQuery create an input and a button
1- creat a button that invoke a function
2- function 'addToList ' that will add new item to toDos var
3- invoke the renderList to add the new item to the list
 */

const addToList = () => {
  toDos.push(addList.val());
  renderList();
};

const addList = $('<input type = "text"><br>');
body.append(addList);
const button = $(`<button>add to list </button><br>`);
body.append(button);
button.on("click", () => {
  addToList();
});

//Q6 :
/*Create a button next to every list item that would delete
1- create a function that will delete the exsisting item
2- create button next to each item that will invoke the delete function

up in line 30 
 */

//Q7 :
/*Using jQuery create a new button for each list item.
1- create a function that update the list item 
2- create a button that invoke th update function
3- create a input that can update the item
 */
const formUpdateItem = $(
  '<form><label for="fname">update the item</label><br></form>'
);
const updateItem = $('<input type="text" id="fname" name="fname">');
formUpdateItem.append(updateItem);
body.append(formUpdateItem);
const updateListItem = (value) => {
  toDos.splice(value, 1, updateItem.val());
  renderList();
};
