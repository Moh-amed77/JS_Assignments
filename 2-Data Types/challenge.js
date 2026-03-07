var theTitle="Mohamed" , theDesc="Mohamed Web School" , theDate="25/10";
// console.log(desc)

var Markup = ` 
    <div class="parent">
        <h3>Hello ${theTitle}</h3>
        <p>${theDesc}</p>
        <span>${theDate}</span>
    </div>
`

var result=Markup.repeat(4)

document.write(result)