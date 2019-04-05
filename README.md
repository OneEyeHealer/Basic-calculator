# Basic-calculator

## Idea
##### I include two section in Input Area.
##### 1. History section which store history
##### 2. output section which give final result.

### Whats Their ?
##### You can perform basic calculation Arithmatic operation like i.e. +,-,*,/,% .But here % not give you reminder it divite the reslt by 100 which is percentage.

### whats not their ?
##### You see what haven't included or its range of output just change remove the display property from ccs file in class info
i.e.
```
.info{
display: none;// remove this part 
}
```
###### Then you able to see the below code in web page.
```
<div class="info">
      <h1><strong>NOTE:- &nbsp;This calculator does not cover all logic as the original basic calculator. </strong></h1>
      <div class="about">
        <h2><i class="fas fa-bug"></i> Bugs</h2>
        <ol>
          <li>Input data can not be deleted form the history Event if the output is empty.</li>
          <li>'%' work as percentage finder but it just give the output divide by 100. <br><em>i.e.</em> 4 % = 0.04</li>
          <li>You can make decimal no using Equal to operator(=) <br><em>i.e.</em> 2. operator(=) 4 give 2.4 which is decimal no.</li>
        </ol>
      </div>
 ```
 
 ### Technology used.
 #### 1. Javascript
 #### 2. Html
 #### 3. Css
