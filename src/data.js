export const puppyList = [
    {
      id: 1,
      name: "Sir Waggington",
      email: "sir-wag@email.com",
      isCute: true,
      age: 5,
      ownerId: 1,
      tricks: [
        { id: 2, title: "Lay Down" },
        { id: 3, title: "Jump through flaming hoop" },
      ],
    },
    {
      id: 2,
      name: "Fiona Penny Pickles",
      email: "pick-your-pennies@email.com",
      isCute: true,
      age: 6,
      ownerId: 1,
      tricks: [],
    },
    {
      id: 3,
      name: "Professor Wagglesworth",
      email: "waggie@email.com",
      isCute: true,
      age: 6,
      ownerId: 2,
      tricks: [{ id: 1, title: "Sit" }],
    },
    {
      id: 4,
      name: "Sergeant Barkowitz",
      email: "the-sarge@email.com",
      isCute: true,
      age: 4,
      ownerId: 2,
      tricks: [{ id: 2, title: "Lay Down" }],
    },
    {
      id: 5,
      name: "Captain Sniffer",
      email: "capn-sniff@email.com",
      isCute: true,
      age: 7,
      ownerId: 3,
      tricks: [],
    },
    {
      id: 6,
      name: "Miss Furbulous",
      email: "miss-furby@email.com",
      isCute: true,
      age: 1,
      ownerId: 3,
      tricks: [],
    },
    {
      id: 7,
      name: "Alfred von Wigglebottom",
      email: "alfie@email.com",
      isCute: true,
      age: 2,
      ownerId: 3,
      tricks: [],
    },
  ];
  Inspect the data. Specifically, notice an array of puppy objects. Each puppy has id, name, email, isCute, age, ownerID, and tricks properties. Also, notice that we use ES6 syntax and that we export the array out of this file.
  Import the array into the App.jsx component. To do so, at the beginning of your App.jsx file, import the puppyList array by adding the following line of code:
  import {puppyList} from './data.js'
  Use the Data in React
  Let us now go step by step and methodically examine the puppyList array:
  
  Before the return statement in the App component, log the puppyList array to the console:
  console.log(puppyList)
  Note that in the browser console, you should be able to observe the array of puppies. (You might also observe the logs displaying twice. That is because of StrictMode).
  Note that you can now access the puppyList array in your React component. But, the real strength of React is that it, well, reacts to changes in the data of your application. In fact, React can intelligently reflect the updated data. To use this feature of a React component, you need to use the useState hook.
  At the beginning of your App.jsx file, import the useState hook by adding the following line:
  import { useState } from 'react'
  Invoke the hook at the top level, inside the App component (and before the return statement). Remember that useState returns an array. And, the array contains two elements. The first is the value that you are storing. The second is a function, which you can use to reset the value. You can deconstruct both of those values from the array, ending up with this:
  const [puppies, setPuppies] = useState(puppyList)
  Notice that you have passed the puppyList array from the data.js file as the default value.
  Important: Always remember to pass your useState hook a default value. This will come into play later.
  If your console.log statement still exists, change it to log the puppies array from the useState hook.
  Note that you are now ready to work with the data in your application.
  Map Over the Data
  Throughout your life as a React developer, a common pattern that you will use is mapping over lists (or arrays) of data.
  
  You will now do that with your puppies array:
  
  Inside your div element, add a set of braces ({ }).
  Note: The braces allow you to use JavaScript, or escape into JavaScript, and use things like ternary operators and array methods. You will use the Array.map() method to map over your puppies array. And, you will return some JSX code for each puppy.
  For each puppy, return a p tag with the puppy name rendered. To do so, inside the empty set of braces, map over the puppies array, as the following code shows:
  { 
     puppies.map((puppy) => {
       return <p>{puppy.name}</p>
     })
  }
  Save your work, and then go to the browser.
  Notice a list of the puppy names rendered to the screen. Congratulations, you successfully implemented your first map() statement in React.
  Observe your browser's console. Notice a warning:
  Warning: Each child in a list should have a unique "key" prop.
  Note that although this warning will not break your application, you should take care of it.
  To do so, note that when working with lists of data, React needs a key to maintain the integrity of the order of elements. And, the key should be a unique identifier that comes directly from your data. In this case, the puppies each have a unique ID. So, you will use that as your key. So far, your App component might be as follows:
  function App() {
  
    const [puppies, setPuppies] = useState(puppyList);
  
    console.log("puppyList: ", puppyList);
  
    return (
      <div className="App">
        {
          puppies.map((puppy) => {
               return <p key={puppy.id}>{puppy.name}</p>;
             })
         }
      </div>
    );
  }