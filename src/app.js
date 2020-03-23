console.log('App.js is running or not!')

const app = {
title: 'User Registration',
options : []
};

const onFormSubmit = (e) => {
e.preventDefault();
const option = e.target.elements.option.value;
if(option){
    app.options.push(option)
    render()
    }
}

var appRoot1 = document.getElementById('app')

const render = () => {

    var templateTwo = ( 
        
        <div> 
         {app.options.values} 
        <form onSubmit = {onFormSubmit}>
        <input type = "text" name = "option" />
        <button> Add </button>
        </form>
        </div>
        );

        ReactDOM.render(templateTwo, appRoot1);

}

render()
