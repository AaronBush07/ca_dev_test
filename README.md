# ca_dev_test

## Solution Design

### What are some missing edge cases you think this design hasn't covered?
- What is the result for an empty string? Are all results returned or no results returned?
- Is the search matching on whole words or partial words?
- Should there be a limit to how many results are returned? What happens when there are more than 8 results? What happens if there's 1000 results?
- What happens to the design on different sized screens? The picture size may be too small to discern any use to the user if there are too many columns. 
- Are special characters accepted?


### List out some behaviours that this component should have: 
The behaviours that are listed below are only assumptions based on the design given. 
- The component should return results matching on a partial match to what the user has provided. 
- Search is not case sensitive
- The number of results found (example 5) should of course match the label saying "5 found"
- The size of the boxes should remain the same size (relative to each other) no matter the number of results. ie. 5 results will show 4 columns and 2 rows, with each box remaining the same size. The last box out of 5 results will be left aligned. 
- The results should continually update upon each keystroke / edit to the search box. 
- Empty strings should not be accepted or expected to return any results. 
- There should be an indication that the component is still loading results. 
- Interactions when clicking the text or pictures hasn't been provided but it can be assumed that this may have some sort of use, whether it be expanding the image or allowing downloads or linking to another page somewhere. 
- There's no delay to search results when typing. (For optimisation purposes you could add a slight delay and check for further input prior to sending a request for data)
- Long names are not fully displayed on the page. 


## Notes
- Component can be found in frontend/src/components/AutoSearch.vue. There is a vuex store located in frontend/src/store/index.js.
- There is a backend and frontend part to this project. You will need two terminals running to run this. 
- Due to time constraints, I haven't added any validation or tests. Examples of tests I've written can be found my other repositories. 
  
## Backend
- Navigate to the backend folder and run '''npm install''' then run '''nodemon''' to start the backend server. It should be running on http://localhost:3000

## Frontend
- Navigate to the frontend folder and run '''npm install''' then run '''npm run serve''' to start the frontend server. It should be running on http://localhost:8080