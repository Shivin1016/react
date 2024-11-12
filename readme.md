React is Library of Javascript which helping in build a UI compnents for Web and Mobile applications
By using React Development process is fast and code is so optimzied performance wise
By using react -> web page is intect during dynamically changes on web page
React is component based / modular
React is Virtual DOM ->light weight copy of actual DOM
Create single page application with Dynamic updaation 
React can maintane state , and manage data using props
we can use hooks which have more features
Using react ->if we create component and use it on sonmany place an dif add changes then it reflect at all places of that component -> it is vey powerful feature of react
To make component ->name.jsx


jsx->it is that type of code in which Use html in js
for websites we use react-dom and for Mobile applications react -native 
              ______>React-dom
             |
    react-----
             |
             |______>React-native
Basic Way to make react App using npx(node package excuter) and npm(node package manager) by using command -> npx create-react-app 0basicreact
But nowdays basic way is not used ,we use vite 
make react app using vite-> it is an Bundle based dev server
use command ->npm create vite@latest
check package.json folder ,
use comond ->cd <directory_name> then use dir to see folders and if node module folder is not present the use command-> npm i or npm install
and for runnig react app use commond -> npm run dev

Extra info to know ,inthe current directory ->use commad-> pwd

CONCEPTS->
1-> Components-> It is just a function that gives you some HTML type of code
    -->it have function and class based components ,nowdays function based components are  used widely
    -->In React we can Assume that Component as a function
    -->For example->if we want to make any section on webpage then you can create by creating a function that returns you some HTMl type code

2->Props->In JSX file we send props(Which is defined by coder as a variable) which can be used  inside component like username ,userId etc...
    -->Simply ,we can say that to pass data inside component for that we props

3->JSX->(Js xml)Inside Component ,we return Code which is HTML like ,inside this code we use javaScript also 

4->Hook--> It is just an utility ,Using Hooks in react are used to just hooks on to the      Features(Functionality) provided by the react
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
