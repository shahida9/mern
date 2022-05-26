import React, { useState } from "react";

//import './school.css';

const School = () => {
    const [sschoolregid,setSschoolregid] = useState('');
    const [sschoolname, setSschoolname] = useState('');
    const [sschoolsyllabus, setSschoolsyllabus] = useState('');
    const [stotalnoofstudents, setStotalnoofstudents] = useState('');


    const schoolregidHandler = (event) => {
        setSschoolregid(event.target.value);
    }

    const schoolnameHandler = (event) => {
        setSschoolname(event.target.value);
    }
    
    const schoolsyllabusHandler = (event) => {
        setSschoolsyllabus(event.target.value);
    }
    
    const totalnoofstudentsHandler = (event) => {
        setStotalnoofstudents(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const SchoolData = { sschoolregid: sschoolregid, sschoolname: sschoolname, sschoolsyllabus: sschoolsyllabus, stotalnoofstudents: stotalnoofstudents}
            setSschoolregid('');
            setSschoolname('');
            setSschoolsyllabus('');
            setStotalnoofstudents('');

        
    
        console.log(SchoolData);
      
         

    }

   return (
       <div className='school_form'>
             <div id="Head">SCHOOL</div>
           <form style={{ textAlign: 'center' }} onSubmit={submitHandler}>
              <div className='form_input'>
                 SchoolRegID : <input type='number' value={sschoolregid} onChange={schoolregidHandler} />
               </div>
 
              <div className='form_input'>
                 SchoolName : <input type='text' value={sschoolname} onChange={schoolnameHandler} />
                </div>
 
              <div className='form_input'>
                 SchoolSyllabus : <input type='text' value={sschoolsyllabus} onChange={schoolsyllabusHandler} />
              </div>
 
              <div className='form_input'>
                TotalNo.ofStudents: <input type='number' value={stotalnoofstudents} onChange={totalnoofstudentsHandler} />
              </div>
 
              <div id="sub">
                 <input type='submit' value='submit' />
              </div>

           </form>
         
       </div>
                            
            

        

    );

    
};


export default School;
