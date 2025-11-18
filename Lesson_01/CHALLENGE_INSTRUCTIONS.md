# 📝 Challenge: To-Do List - DOM Manipulation

## 🎯 Objective
Create an interactive to-do list application using JavaScript to manipulate the DOM. This challenge will cover fundamental concepts of:
- Element selection
- Dynamic element creation
- Event manipulation
- CSS class modification
- Content updating

## 📋 Features to Implement

### ✅ Basic Features
1. **Add Task**: Allow user to add new tasks
2. **Mark as Complete**: Checkbox to mark/unmark tasks
3. **Delete Task**: Button to remove individual tasks
4. **Statistics**: Show total, completed and pending tasks
5. **Clear Completed**: Remove all marked tasks
6. **Clear All**: Remove all tasks (with confirmation)

### 🎨 Visual Features
- Modern and responsive interface
- Smooth animations
- Visual states for completed tasks
- Message when there are no tasks

## 🚀 Getting Started

### 1. File Structure
- `index.html` - HTML structure (ready)
- `styles.css` - CSS styles (ready)
- `script.js` - JavaScript to complete
- `script-solution.js` - Complete solution (for teacher)

### 2. Open the Project
1. Open `index.html` file in browser
2. Open `script.js` file in code editor
3. Complete the functions following the TODO comments

## 📚 Concepts to Practice

### Element Selection
```javascript
document.getElementById('id')
document.querySelector('.class')
document.querySelectorAll('.class')
```

### Element Creation
```javascript
document.createElement('tag')
element.classList.add('class')
element.innerHTML = 'content'
```

### Events
```javascript
element.addEventListener('click', function)
element.addEventListener('keypress', function)
```

### Class Manipulation
```javascript
element.classList.add('class')
element.classList.remove('class')
element.classList.toggle('class')
```

## 🎯 Challenge Steps

### Step 1: Element Selection (5 min)
Complete section 1 of `script.js` by selecting all necessary elements using `document.getElementById()`.

### Step 2: createTask Function (15 min)
Implement the function that creates a new task element:
- Create an `<li>` element
- Add CSS class
- Set inner HTML
- Add event listeners for checkbox and delete button

### Step 3: addTask Function (10 min)
Implement the function to add new tasks:
- Get input value
- Validate it's not empty
- Create and add task to list
- Clear input

### Step 4: updateStats Function (10 min)
Implement statistics updating:
- Count total tasks
- Count completed tasks
- Calculate pending tasks
- Update screen elements

### Step 5: Cleanup Functions (10 min)
Implement task cleanup functions:
- `clearCompletedTasks()`: Remove only completed ones
- `clearAllTasks()`: Remove all (with confirmation)

### Step 6: Event Listeners (5 min)
Add event listeners for:
- Add button
- Enter key in input
- Cleanup buttons

### Step 7: Initialization (2 min)
Call `updateStats()` to set up initial state.

## 🏆 Extra Challenges (For Advanced Students)

### 🌟 Intermediate Level
1. **Task Editing**: Double click to edit
2. **Filters**: Show all, pending or completed
3. **Character Counter**: Character limit for tasks

### 🌟 Advanced Level
1. **LocalStorage**: Save tasks in browser
2. **Drag & Drop**: Reorder tasks by dragging
3. **Priorities**: Priority system (high, medium, low)
4. **Due Dates**: Add dates to tasks

## 🔧 Important Tips

### For Students
- Read comments carefully
- Test each function as you implement
- Use browser console for debugging
- Don't be afraid to experiment!

### For Teacher
- Walk around helping individually
- Encourage students to test in browser
- Show DevTools for debugging
- Use complete solution as reference

## 🐛 Common Issues

### Error: "Cannot read property of null"
- **Cause**: Element not selected correctly
- **Solution**: Check if ID/class is correct

### Task doesn't appear in list
- **Cause**: Not added to DOM
- **Solution**: Use `appendChild()` or `append()`

### Statistics don't update
- **Cause**: `updateStats()` function not called
- **Solution**: Call after each list modification

### Event listeners don't work
- **Cause**: Dynamically created elements
- **Solution**: Add listeners after creating element

## 📖 Additional Resources

- [MDN - DOM Manipulation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN - addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN - querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

## ⏱️ Estimated Time
- **Beginners**: 60-90 minutes
- **With experience**: 30-45 minutes
- **Extra challenges**: +30-60 minutes

Good luck and have fun coding! 🚀
