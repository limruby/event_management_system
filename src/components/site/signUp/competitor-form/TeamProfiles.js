import React, { Component } from 'react'

export class Profiles extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    //hide/show display
    constructor(props) {
        super(props);
        this.state = {display1: 'hide', display2: 'hide',display3: 'hide', display4: 'hide'};
      }
    
        //set the state value based on select option value
    divstatus = (e) =>{
        //clear all inputs
        if(e.target.value==0){
            this.setState({display1:'hide',display2: 'hide',display3: 'hide',display4: 'hide' });
        }
        else if(e.target.value==1){
            this.setState({display1:'show', display2: 'hide', display3: 'hide',display4: 'hide' });
        }
        else if(e.target.value==2){
            this.setState({display1:'show',display2:'show', display3: 'hide',display4: 'hide'});            
        }
        else if(e.target.value==3){
            this.setState({display1:'show',display2:'show',display3:'show',display4: 'hide'});
        }
        else if(e.target.value==4){
            this.setState({display1:'show',display2:'show',display3:'show',display4:'show'});
        }
     }


    render() {
        const { values, inputChange } = this.props

        const handleForm=(e)=>{
           e.preventDefault();
        // perform all neccassary validations
            if (values.no_of_team_members==""){
                alert("Form not fill");
            }
            else{
                if (values.no_of_team_members==0){
                    this.continue(e);

                }
                else if(values.no_of_team_members==1){
                    if(values.name_2==""||values.ic_passport_selection_2==""||values.ic_passport_number_2=="")
                        {alert("Form not fill");}
                    else{
                        values.members.push({'name': values.name_2, 'ic_passport_selection':values.ic_passport_selection_2, 'ic_passport_number':values.ic_passport_number_2})
                        this.continue(e);

                    }
                }
                else if(values.no_of_team_members==2){
                    
                    if(values.name_2==""||values.ic_passport_selection_2==""||values.ic_passport_number_2==""||
                            values.name_3==""||values.ic_passport_selection_3==""||values.ic_passport_number_3=="")
                        {alert("Form not fill");}
                    else{
                        values.members.push({'name': values.name_2, 'ic_passport_selection':values.ic_passport_selection_2, 'ic_passport_number':values.ic_passport_number_2});
                        values.members.push({'name': values.name_3, 'ic_passport_selection':values.ic_passport_selection_3, 'ic_passport_number':values.ic_passport_number_3});
                        this.continue(e);}
                }
                else if(values.no_of_team_members==3){
                    if(values.name_2==""||values.ic_passport_selection_2==""||values.ic_passport_number_2==""||
                            values.name_3==""||values.ic_passport_selection_3==""||values.ic_passport_number_3==""||
                            values.name_4==""||values.ic_passport_selection_4==""||values.ic_passport_number_4=="")
                        {alert("Form not fill");}
                    else{
                        values.members.push({'name': values.name_2, 'ic_passport_selection':values.ic_passport_selection_2, 'ic_passport_number':values.ic_passport_number_2});
                        values.members.push({'name': values.name_3, 'ic_passport_selection':values.ic_passport_selection_3, 'ic_passport_number':values.ic_passport_number_3});
                        values.members.push({'name': values.name_4, 'ic_passport_selection':values.ic_passport_selection_4, 'ic_passport_number':values.ic_passport_number_4});
                       this.continue(e);}
                }
                else if(values.no_of_team_members==4){    
                    if(values.name_2==""||values.ic_passport_selection_2==""||values.ic_passport_number_2==""||
                            values.name_3==""||values.ic_passport_selection_3==""||values.ic_passport_number_3==""||
                            values.name_4==""||values.ic_passport_selection_4==""||values.ic_passport_number_4==""||
                            values.name_5==""||values.ic_passport_selection_5==""||values.ic_passport_number_5=="")
                        {alert("Form not fill");}
                    else{ 
                        values.members.push({'name': values.name_2, 'ic_passport_selection':values.ic_passport_selection_2, 'ic_passport_number':values.ic_passport_number_2});
                        values.members.push({'name': values.name_3, 'ic_passport_selection':values.ic_passport_selection_3, 'ic_passport_number':values.ic_passport_number_3});
                        values.members.push({'name': values.name_4, 'ic_passport_selection':values.ic_passport_selection_4, 'ic_passport_number':values.ic_passport_number_4});
                        values.members.push({'name': values.name_5, 'ic_passport_selection':values.ic_passport_selection_5, 'ic_passport_number':values.ic_passport_number_5});
                        this.continue(e);}
                }
                
            }
        }



        return (
            <div>
                <form onSubmit={handleForm}>
                <h1 className="mb-5">Team Members Profile</h1>
                <p>Exclude Team Leader</p>
                <p></p>



                <div className="form-group">
                    <label htmlFor="no_of_team_members_id"><span>*</span>Number of Team Members</label>
                    <select className="form-control" id="no_of_team_members_id" required
                    onChange={this.divstatus}
                    onInput={inputChange('no_of_team_members')}
                    value={values.no_of_team_members} >
                        <option value="">Please select</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>


            <div className={this.state.display1}>
                <div className="form-group">
                    <h5>Team Member 1</h5>
                    <label htmlFor="name_2"><span>*</span>Full Name (as per IC / Passport)</label>
                    <input type="text" className="form-control" name="name_2" id="name_2"
                    placeholder='Full Name (as per IC / Passport)' 

                    onChange={inputChange('name_2')} value={values.name_2} />
                </div>
                <div className="form-group">
                    <label htmlFor="ic_passport_selection_2"><span>*</span>NRIC / Passport Number</label>
                    <select className="form-control" id="ic_passport_selection_2" 
                    onChange={inputChange('ic_passport_selection_2')} value={values.ic_passport_selection_2} >
                        <option value="">Please select</option>
                        <option value="NRIC">NRIC</option>
                        <option value="PASSPORT NUMBER">Passport Number</option>
                    </select>
                    <br/>
                    <input className="form-control" type='text'name='ic_passport_number_2' id="ic_passport_number_2"
                    placeholder='NRIC / Passport Number' 
                    onChange={inputChange('ic_passport_number_2')} value={values.ic_passport_number_2} />
                </div>
            </div>    


             <div className={this.state.display2}>
                <div className="form-group">
                    <h5>Team Member 2</h5>
                    <label htmlFor="name_3"><span>*</span>Full Name (as per IC / Passport)</label>
                    <input type="text" className="form-control" name="name_3" id="name_3"
                    placeholder='Full Name (as per IC / Passport)'                   
                    onChange={inputChange('name_3')} value={values.name_3} />
                </div>
                <div className="form-group">
                    <label htmlFor="ic_passport_selection_3"><span>*</span>NRIC / Passport Number</label>
                    <select className="form-control" id="ic_passport_selection_3"  
                    onChange={inputChange('ic_passport_selection_3')} value={values.ic_passport_selection_3} >
                        <option value="">Please select</option>
                        <option value="NRIC">NRIC</option>
                        <option value="PASSPORT NUMBER">Passport Number</option>
                    </select>
                    <br/>
                    <input className="form-control" type='text'name='ic_passport_number_3' id="ic_passport_number_3"
                    placeholder='NRIC / Passport Number'  
                    onChange={inputChange('ic_passport_number_3')} value={values.ic_passport_number_3} />
                </div>
            </div>    

             <div className={this.state.display3}>
                <div className="form-group">
                    <h5>Team Member 3</h5>
                    <label htmlFor="name_4"><span>*</span>Full Name (as per IC / Passport)</label>
                    <input type="text" className="form-control" name="name_4" id="name_4"
                    placeholder='Full Name (as per IC / Passport)'                      
                    onChange={inputChange('name_4')} value={values.name_4} />
                </div>
                <div className="form-group">
                    <label htmlFor="ic_passport_selection_4"><span>*</span>NRIC / Passport Number</label>
                    <select className="form-control" id="ic_passport_selection_4"  
                    onChange={inputChange('ic_passport_selection_4')} value={values.ic_passport_selection_4} >
                        <option value="">Please select</option>
                        <option value="NRIC">NRIC</option>
                        <option value="PASSPORT NUMBER">Passport Number</option>
                    </select>
                    <br/>
                    <input className="form-control" type='text'name='ic_passport_number_4' id="ic_passport_number_4"
                    placeholder='NRIC / Passport Number'  
                    onChange={inputChange('ic_passport_number_4')} value={values.ic_passport_number_4} />
                </div>
            </div>    

            <div className={this.state.display4}>
                <div className="form-group">
                    <h5>Team Member 4</h5>
                    <label htmlFor="name_5"><span>*</span>Full Name (as per IC / Passport)</label>
                    <input type="text" className="form-control" name="name_5" id="name_5"
                    placeholder='Full Name (as per IC / Passport)'                      
                    onChange={inputChange('name_5')} value={values.name_5} />
                </div>
                <div className="form-group">
                    <label htmlFor="ic_passport_selection_5"><span>*</span>NRIC / Passport Number</label>
                    <select className="form-control" id="ic_passport_selection_5"  
                    onChange={inputChange('ic_passport_selection_5')} value={values.ic_passport_selection_5} >
                        <option value="">Please select</option>
                        <option value="NRIC">NRIC</option>
                        <option value="PASSPORT NUMBER">Passport Number</option>
                    </select>
                    <br/>
                    <input className="form-control" type='text'name='ic_passport_number_5' id="ic_passport_number_5"
                    placeholder='NRIC / Passport Number'  
                    onChange={inputChange('ic_passport_number_5')} value={values.ic_passport_number_5} />
                </div>
            </div>    

                <br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                          <input className="btn btn-primary" type="submit" value="Continue" />
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

export default Profiles
