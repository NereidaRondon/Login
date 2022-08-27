import lock from './lock.png';
import './Styles.css';

export default function LoginForm() {
  
  const clear=(event)=>{
    event.preventDefault();
    document.getElementById('user').value="";
    document.getElementById('pass').value="";
  };  

  return (
    
    <div className="container login-box shadow-lg">
       <form onSubmit={clear}>
        <h3>Log In</h3>
        <br></br>
          <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Username</label>
              
              <input type="text" name="userNm" class="form-control" id="user" aria-describedby="username"/>
          </div>

          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              
              <input type="password" name="pass" class="form-control" id="pass" aria-describedby="passwordHelpInline"/>
              <div class="col-auto">
                <span id="passwordHelpInline" class="form-text">
                  Must be 8-20 characters long.
                </span>
              </div>
          </div>
        <br></br>
        <button type="submit" class="btn btn-outline-info">Submit</button>
      </form>
    </div>
  );
};
