### Cruddy App Todo

#### Basic Improvments (requirements)

- [ ] create individual items
- [ ] delete individual items
- [ ] edit individual items

##### Notes
- [ ] Keep DOM and localStorage matching 
- [ ] Remember event Delegation when adding new items to .show-text
- [ ] make sure we do not duplicate data
- [ ] add different values to the item

  ex.
```javascript
 item =  {
  id: "thing used for key",
  text-value: "some text",
  categories: [ 'cat1', 'cat2' ],
  isComplete: boolean,
  dateCreated: dateCreated,
  dateCompleted: dateCompleted
  ...
  etc
  }
```

#### Potential Libraries
- [ ] lodash/underscore
- [ ] jquery ui
- [ ] bootstrap/material (css library)

#### My Plan
<!-- - My app will be a sentence generator. It will first create a word list based on up to 10 words input by the user. Then the word list will be randomized, and returned as output. -->
- My app will be a run-of-the-mill to-do app. It will include drag-and-drop functionality to either reorder or delete tasks.

#### My Spin
- [ ] use a drag-and-drop utility to reorder or delete items
  - Here, I will create a drag event, and utilize the DataTransferItem method.
- [ ] the app will allow the user to sort their notes by either drag event, or by prefixing their note with [W] for work, [S] for social, or [P] for personal.
- [ ] use Bootstrap for UI (buttons, created items, arrangement on page, modals, etc.)

##### My Schedule

#### Day 1
- [ ] Write this
- [ ] Research ways to implement ideas I had over the weekend

#### Day 2
- [ ] Outline all the necessary CRUD features
- [ ] Implement, and achieve functionality

#### Day 3
- [ ] Strategize how to implement the drag-and-drop deletion/reorder functionality
- [ ] Implement, and achieve functionality

#### Day 4
- [ ] Strategize my approach for implementing categorization by prefix
- [ ] Implement prefix sorting
- [ ] Design my app with Bootstrap

#### Day 5
- [ ] Prep - Clean up code, walk myself or a friend through my app, explaining features to myself or them.
- [ ] Show up and show off