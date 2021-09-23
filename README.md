# ca_dev_test

## Solution Design

### What are some missing edge cases you think this design hasn't covered?
- What is the result for an empty string? Are all results returned or no results returned?
- Is the search matching on whole words or partial words?
- Should there be a limit to how many results are returned? What happens when there are more than 8 results? 
- What happens to the design on different sized screens? The picture size may be too small to discern any use to the user if there are too many columns. 
- Special characters are accepted. 


### List out some behaviours that this component should have: 
The behaviours that are listed below are only assumptions based on the design given. 
- The component should return results matching on a partial match to what the user has provided. 
- The number of results found (example 5) should of course match the label saying "5 found"
- The size of the boxes should remain the same size (relative to each other) no matter the number of results. ie. 5 results will show 4 columns and 2 rows, with each box remaining the same size. The last box will be left aligned. 
- The results should continually update upon each keystroke / edit to the search box. 
- Empty strings should not be accepted or expected to return any results. 
- Interactions when clicking the text or pictures hasn't been provided but it can be assumed that this may have some sort of use, whether it be expanding the image or allowing downloads or linking to another page somewhere. 