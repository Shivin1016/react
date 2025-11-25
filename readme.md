React is Library of Javascript which helping in build Dynamic and UI compnents for Web and Mobile applications
    1->Developed at facebook in 2011 
    And it is most widely used js library for front-end development
    2->It is Used to create single page Application
    3->By using React , Development process is so fast and code is so optimzied performance wise
    4->By using react -> web page is interect during dynamically changes on web page
    5->React is component based / modular
    6->React is Virtual DOM ->light weight copy of actual DOM
    7->Create single page application with Dynamic updation 
    8->React can maintane state , and manage data using props
    9->we can use hooks which have more features
    10->Using react ->if we create component and use it on so many places and if we add changes then it reflect at all places of that component -> it is vey powerful feature of react.
    To make component ->name.jsx
    11-> Used to create single page application 
    12->work with dom becomes complicated with JS ,so Here react is become helpFul for us to modify DOM 


jsx->(It allow you to write HTMl like code directly into javascript)it is that type of code in which we can Use html in js
for websites we use react-dom and for Mobile applications react-native 

              __ __ __>React-dom(websites)
             |
             |
    react-----
             |
             |__ __ __>React-native(mobile applicaitions)

Basic Way to make react App using npx(node package excuter) and npm(node package manager) by using command -> npx create-react-app 01basicReact
But nowdays basic way is not used ,we use vite(Frontend developer tool)
make react app using vite-> it is an Bundle based dev server

SET Up for React App->
    use command ->npm create vite@latest
    check package.json folder ,
    use comond ->cd <directory_name> then use dir to see folders and if node module folder is not present the use command-> npm i or npm install
    and for runnig react app use commond -> npm run dev

    -->Interview Question ->
            1->Why vite is more famous for react interview ? -> fastest development serve and build tools

            2->Why we don't push noe_modules on git ? -> Because of node modules have lasr size (sometimes it goes in GB) and those who fork the repo , get node modules from the command npm i

            3->Why we write Components first letter in upperLetter -> because in component we write jsx code which then converted by babel into html and js code --> but as usual hmtl is babel understand that all html tags are written in lowercase so , on the compilation time it will think that jsx componnet is like html tag if start component name with small latter that is why we write each component name starts with caps

            4->diff b/w Dependency and devdependency --> Dependency required also when the project is live on serve but the devDependency is not required after the production build , it is required on development time

            5->diff b/w components and functions
                ->functions name starts with small letter wherase component start with caps letter
                ->Also as we wrtie jsx inside component so on parsing time babel must recognise the components and functions
            6->how many types we can export the components
                first ->default export function Setting(){}  export default Setting
                second -> named export --> syntex -> export function Setting(){} 
                we can export default component only one but named export more than one

Extra info --> To know ,in the current directory ->use commad-> pwd

CONCEPTS->
1-> Components-> It is just a function that gives you some HTML type of code
    -->it have function and class based components ,nowdays function based components are used widely
    -->In React we can Assume that Components are nothing but it act as a function
    -->For example->if we want to make any section on webpage then you can create by creating a function that returns you some HTMl type code

    1.1->Dynamic Components ->
        Using {} , we can embed any js expressions directly in jsx. this include variables , function and many more

2->Props->In JSX file , we send props(Which is defined by coder as a variable) which can be used  inside component like username , userId etc...
    -->Simply ,we can say that to pass data inside component for that we use props
    -->Pass data from parent to child component
    -->They are immutable

3->JSX->(Js xml)Inside Component ,we return Code which is HTML like ,inside this code we use javaScript also 

4->Hook--> It is just an utility ,Using Hooks in react, used to just hooks on to the Features(Functionality) provided by the react
     -->In starting of the react ,Inside function based component we did not used hook but inside class based component we can used ,but withtime upgradation in react provide this functionality for function based component also
    -->Functionalities
        1->UseStateHook-> By usibg useStatehook ,you can manage the state of the component
        2->it provide two variables state variable and state function

5->Props as Children--> if we write any content inside the closing tag and opening tag of the component is considered as children
    
6->How to pass a function from parent JSx file to childeren JSx file ,
    -->write a function and inside component pass it 
     example-> <component function = {function}>
    -->if we send children expilicitly as well as inside tags then inside tag will be overlap over the expilicit children

7->State Lifiting in React-> props data Transfer from parent to child ,now the need is ,that how we can transfer data from child to parent ,a technique that allows multiple components to share and update the same state
    we know that->   parent -----> child
            how can do it->  child -----> parent 

8-> Rule of JSX->
                1-> You can return only one html tag element from App.jsx file
                2-> If you are worry about that which tag we should use ,then use fragment tag -> empty opening and closing tag-> <> </>

9->Conditional Rendering-> Displaying content on certain conditions , Allows for dynamic user interfaces
    Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators
       -->using four ways we can do conditonal rendering in react app
       1->using if - else
       2->using ternary operator
       3->using logical operator
       4->using early return
    JSX ignores null / empty values

10->Event Handling-> 

11->UseEffect Hook-> It is an react Hook by which you can generate side effect hook , so it is like that if there is any event occur then we want to generate a side effect 
if any event happen then we want to run any side effect logic
        for example-> when you login on any webpage then you can see your profile picture -> it works like when you login then immediately call goes in DB and your image comes from db  and it renders on your webpage after login

12-> Prop Driling-> Passing props from parent to target child 
    It passes the props to all the upper child of the target child untill the props dosen't get the target child. 
    for example-> if we want to pass the props to the c3
                    Parent
                      | props pass to the child1
                    child1
                      |  props pass to the child2
                    child2 
                      |  props pass to the child3
                    child3(tartget child)
    hence ther is one drawBack that those child don't want the props ,which also get,so for this we used the useContext

12-> useContext-> Passing data Deeply into the tree ,Updating data passed via context 
        There are three stpes
        1->Create The context--> const UserContext = createContext();
        2->Provide --> wrap all the child inside Provider
        3->Consume --> pass the value and consume the value
    Parent Provide the context and Those childs wants to consume the data is called conetxt - consumer
     
13-> Fragments-> when we return more than one elements then(if we return it without wrapping inside div then it gives an error) ,we have to wrapped it inside an extra div tag, so it also adds in DOM tree , hence from over this we use React.Fragment tag instead of extra div tag
    It allows Grouping of multiple elements without extra DOM nodes
    Return Multiple elements without a wrapping parent
    Syntex->
        13.1-> <React.Fragment> ...</React.Fragment>
        13.2-> SHORT HAND SYNTEX-> <>..</>

14->Map Method --> Render lists From Array Data. Transform array items into JSX ,Directly inside JSX
    for example -> we have array of items[] (provide key for uniqueky identifying it)
        {items.map((item) => <li key={item.id}>{item.name} </li>)} 
    key-prop -->Assign Unique Key for optimized re-render
    <div key = {item.id}>{item.name}</div>

15->Conditonal Rendering -->We can display content based on the conditions 
        1->Benifits --> 
                1.1->it help in dynamic rendering like if user wants to see some selected items in e-commerse website then it can only see it , so all it can happens using conditional rendering and it makes user interactions good.
                1.2->reduces unnecessary Rendering , enhance user experince
        2->Methods-> 
                    2.1->If-else-Statement->choose between two blocks of content
                        if(contiton){content, that you want to render}
                    2.2->Ternary Operator-> according condition we can show from any two options (short syntex of if-else)
                        (condition ? <div> true</div> : <div> error</div>)
                    2.3->Logical Operator->usefull when we have to show the content if it is true
                        (condition && <div>"i am Hungry"</div>)

16->Passing data via Props-->Mechanism for passing data , data flows one way (downwards from parent to child) and they are immutable
, used for communication betweeb components
        usages->1->Pass data from parent to child (parent--->child---->grand child)
                2->make component resuable
                3->defined as attribute in JSX

->CSS Modules-> Localized class names to avoid global Conflicts   
    Styles are scoped to individual components
    Helps in creating components-specific styles
    Automatically generates unique class names