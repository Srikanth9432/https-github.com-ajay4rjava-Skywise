import React from 'react';  
class SampleForms extends React.Component {  
  constructor(props) {  
      super(props);   
      this.updateSubmit = this.updateSubmit.bind(this);  
      this.input = React.createRef(); 
      this.state = {  
        personGoing: true,  
        numberOfPersons: 5  
    };  
    this.handleInputChange = this.handleInputChange.bind(this);  
  }  
  
  updateSubmit(event) {  
      alert('You have entered the Pesrsonal Details successfully.');  
      event.preventDefault();  
  }  
  handleInputChange(event) {  
    const target = event.target;  
    const value = target.type === 'checkbox' ? target.checked : target.value;  
    const name = target.name;  
    this.setState({  
        [name]: value  
    });  
}  
setGender(event) {
    console.log(event.target.value);
  }
  render() {  
    return (  
      <form onSubmit={this.updateSubmit}>  
        <h1>Uncontrolled Form Example</h1>  
        <label>Name:  
            <input type="text" ref={this.input} />  
        </label>  
        <label>  
            CompanyName:  
            <input type="text" ref={this.input} />  
        </label> 
       
        <label>  
                  Is Person going:  
                  <input  
                    name="personGoing"  
                    type="checkbox"  
                    checked={this.state.personGoing}  
                    onChange={this.handleInputChange} />  
             </label> 
             <div onChange={this.setGender.bind(this)}>
        <input type="radio" value="MALE" name="gender"/> Male
        <input type="radio" value="FEMALE" name="gender"/> Female
      </div>  
             <br />    
        <input type="submit" value="Submit" />  
      </form>    
    );  
  }  
}  
export default SampleForms;  