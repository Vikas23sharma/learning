import { useRef } from 'react'
import './App.css';

function App() {
  // declaring refs for all fields
  const emailref = useRef(null)
  const passwordref = useRef(null)
  const mobileref = useRef(null)
  const quantref = useRef(null)
  const dateref = useRef(null)

  const handlesubmit = (e) => {
    e.preventDefault()
    // form validation 
    // by using .length we can throw alert and by using maxlength and minlength no need
    // to throw alert,it automatically gives an alert

    if (mobileref.current.value.length != 10) {
      alert("Enter correct mobile Number")
      return
    }

    if (passwordref.current.value.length < 6) {
      alert("Password should be six characters atleast")
      return
    }

    console.log(emailref.current.value)
    console.log(passwordref.current.value)
    console.log(mobileref.current.value)
    console.log(quantref.current.value)
    console.log(dateref.current.value)

    //emptying the input boxes after submission
    emailref.current.value = ""
    passwordref.current.value = ""
    mobileref.current.value = ""
    quantref.current.value = ""
    dateref.current.value = ""
  }

  return (
    <div className="App">
      <form onSubmit={handlesubmit}>
        <label>Email: </label>
        {/* giving ref, required,maxlength and minlength attributes for validation  */}
        <input type="email" placeholder="enter name" ref={emailref} required max={8} />
        <br />
        <br />
        <label>Password: </label>
        <input type="password" placeholder="enter password" ref={passwordref} required minLength={6} />
        <br />
        <br />
        <label>Mobile Number: </label>
        <input type="text" placeholder="enter mobile number" ref={mobileref} required minLength={10} />
        <br />
        <br />
        {/* By using the min & max attributes we can put limits on the inputs given by user  */}
        <label>select your DOB</label>
        <input type="date" id="datemax" name="datemax" min="1999-12-31" max="2010-01-31" ref={dateref} required />
        <br />
        <br />
        <label >Quantity (between 1 and 5):</label>
        <input type="number" id="quantity" ref={quantref} name="quantity" min="1" max="5" required />
        <br />
        <button type="submit">submit</button>
      </form>

    </div>
  );
}

export default App;
