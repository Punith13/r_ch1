# REA UI CHALLENGE

### Description  

Display the list of properties using the data set within the "results" array running down the page in a column that has a heading labeled Results. There will be a second column with a heading Saved Properties, along side the Results column. It will contain the initial property within the "saved" array
Hovering over a property card in the Results column will display an 'add' button. Clicking the "add" button will create the property in the Saved Properties column. Hovering over a property card in the Saved Properties column will display a 'remove' button. Clicking the 'remove' button will remove the property from the list of saved properties.

The Solution to the challenge is implented in the React - Redux environment.

#### Building the project

Navigate to the root folder and run the following commands

```
> npm install 
> npm run build
```

#### Running the application 

```
> node server.js 
```

The application would be running on <a href="http://localhost:3004"> Port 3004 </a>

#### Testing the Project 

Navigate to the root folder and run the command 

```
> npm run test 
```

The following test cases have been included :

```
> Checking the number of result property cards rendered against the mock up Result json data. 
> Checking the number of saved property cards 
rendered against the mock up Saved json data. 
> Simulating the addition of property to the Saved Property by hovering over the Result Property card and clicking on the 'Add Property' Button. 
> Simulating the removal of property from the Saved Property by hovering over the Saved Property card and clicking on the 'Remove Property' Button. 
```

### Project Structure 

The code is organized as : 

```
> Atomic Card Component
> Molecular Card List Component 
> Result Container built by adding Result Application State to Card List Component
> Saved Property Container built by addiing Saved Property Application State to Card List Component. 
> A Parent App component which holds the Result and Saved Property Containers. 
> Action creators , Reducers and application Store to implement the Flux design pattern. 
```













