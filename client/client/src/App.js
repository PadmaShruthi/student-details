import React, { useState } from 'react';
import Web3 from 'web3';
import { simpleStorageAbi } from './abi/abis';
import './App.css';
const web3 = new Web3(Web3.givenProvider);
// contract address is provided by Truffle migration
const contractAddr = '0x262E2078217937978cccd3a08681AdD77D5DdFE3';
const SimpleContract = new web3.eth.Contract(simpleStorageAbi, contractAddr);
function App() {
  const [name, setName] = useState();
  const [getName, setGetName] = useState();

  const [dept, setDept] = useState();
  const [getDept, setGetDept] = useState();

  const [phonenumber, setPhonenumber] = useState();
  const [getPhonenumber, setGetPhonenumber] = useState();

  const [homeaddress, setHomeaddress] = useState();
  const [getHomeaddress, setGetHomeaddress] = useState();

  const [emailid, setEmailid] = useState();
  const [getEmailid, setGetEmailid] = useState();

  const [aadhar, setAadhar] = useState();
  const [getAadhar, setGetAadhar] = useState();



  const handleNameSet = async (e) => {
    e.preventDefault();    
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await SimpleContract.methods.setname(name).estimateGas();
    const result = await SimpleContract.methods.setname(name).send({
      from: account,
      gas 
    })
    console.log(result);
  }

  const handleNameGet = async (e) => {
    e.preventDefault();
    const result = await SimpleContract.methods.getname().call();
    setGetName(result);
    console.log(result);
  }

  const handleDeptSet = async (e) => {
    e.preventDefault();    
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await SimpleContract.methods.setdept(dept).estimateGas();
    const result = await SimpleContract.methods.setdept(dept).send({
      from: account,
      gas 
    })
    console.log(result);
  }

  const handleDeptGet = async (e) => {
    e.preventDefault();
    const result = await SimpleContract.methods.getdept().call();
    setGetDept(result);
    console.log(result);
  }


  const handlePhonenumberSet = async (e) => {
    e.preventDefault();    
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await SimpleContract.methods.setphonenumber(name).estimateGas();
    const result = await SimpleContract.methods.setphonenumber(name).send({
      from: account,
      gas 
    })
    console.log(result);
  }

  const handlePhonenumberGet = async (e) => {
    e.preventDefault();
    const result = await SimpleContract.methods.getphonenumber().call();
    setGetPhonenumber(result);
    console.log(result);
  }
  

  const handleHomeaddressSet = async (e) => {
    e.preventDefault();    
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await SimpleContract.methods.setaddresshome(name).estimateGas();
    const result = await SimpleContract.methods.setaddresshome(name).send({
      from: account,
      gas 
    })
    console.log(result);
  }

  const handleHomeaddressGet = async (e) => {
    e.preventDefault();
    const result = await SimpleContract.methods.getaddresshome().call();
    setGetHomeaddress(result);
    console.log(result);
  }

  const handleEmailidSet = async (e) => {
    e.preventDefault();    
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await SimpleContract.methods.setemailid(name).estimateGas();
    const result = await SimpleContract.methods.setemailid(name).send({
      from: account,
      gas 
    })
    console.log(result);
  }

  const handleEmailidGet = async (e) => {
    e.preventDefault();
    const result = await SimpleContract.methods.getemailid().call();
    setGetEmailid(result);
    console.log(result);
  }

  const handleAadharSet = async (e) => {
    e.preventDefault();    
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await SimpleContract.methods.setaadhar(name).estimateGas();
    const result = await SimpleContract.methods.setaadhar(name).send({
      from: account,
      gas 
    })
    console.log(result);
  }

  const handleAadharGet = async (e) => {
    e.preventDefault();
    const result = await SimpleContract.methods.getaadhar().call();
    setGetAadhar(result);
    console.log(result);
  }

return (
  <div className="App">
    <header className="App-header">
      <h1> Student Details </h1>
    </header>
    <div className="wrapper">
      <form className= "Form" onSubmit={handleNameSet}>
        <label>
          <h3 style={{textAlign:"left",marginBottom:"0.5px",fontFamily:"unset"}}>NAME:</h3>
          <input className="Form"
            type="text"
            name="name"
            value={name}
            onChange={ e => setName(e.target.value) } />
        </label>
        <input className="body" type="submit" value="Set it" />
        <button
        className="body"
        onClick={handleNameGet}
        type="button" > 
        Get it
      </button>
      { getName }
      </form>


      <form className= "Form" onSubmit={handleDeptSet}>
      <label>
          <h3 style={{textAlign:"left",marginBottom:"0.5px",fontFamily:"unset"}}>DEPARTMENT:</h3>
          <input className="Form"
            type="text"
            name="dept"
            value={dept}
            onChange={ e => setDept(e.target.value) } />
        </label>
        <input className="body" type="submit" value="Set it" />
        <button
        className="body"
        onClick={handleDeptGet}
        type="button" > 
        Get it 
      </button>
      { getDept }
       </form>

       <form className= "Form" onSubmit={handlePhonenumberSet}>
      <label>
          <h3 style={{textAlign:"left",marginBottom:"0.5px",fontFamily:"unset"}}>PHONE NUMBER:</h3>
          <input className="Form"
            type="text"
            name="dept"
            value={phonenumber}
            onChange={ e => setPhonenumber(e.target.value) } />
        </label>
        <input className="body" type="submit" value="Set it" />
        <button
        className="body"
        onClick={handlePhonenumberGet}
        type="button" > 
        Get it 
      </button>
      { getPhonenumber }
       </form>


       <form className= "Form" onSubmit={handleHomeaddressSet}>
        <label>
          <h3 style={{textAlign:"left",marginBottom:"0.5px",fontFamily:"unset"}}>ADDRESS:</h3>
          <input className="Form"
            type="text"
            name="name"
            value={homeaddress}
            onChange={ e => setHomeaddress(e.target.value) } />
        </label>
        <input className="body" type="submit" value="Set it" />
        <button
        className="body"
        onClick={handleHomeaddressGet}
        type="button" > 
        Get it
      </button>
      { getHomeaddress }
      </form>

      <form className= "Form" onSubmit={handleEmailidSet}>
        <label>
          <h3 style={{textAlign:"left",marginBottom:"0.5px",fontFamily:"unset"}}>EMAIL ID:</h3>
          <input className="Form"
            type="text"
            name="name"
            value={emailid}
            onChange={ e => setEmailid(e.target.value) } />
        </label>
        <input className="body" type="submit" value="Set it" />
        <button
        className="body"
        onClick={handleEmailidGet}
        type="button" > 
        Get it
      </button>
      { getEmailid }
      </form>

      <form className= "Form" onSubmit={handleAadharSet}>
        <label>
          <h3 style={{textAlign:"left",marginBottom:"0.5px",fontFamily:"unset"}}>AADHAR NO.:</h3>
          <input className="Form"
            type="text"
            name="name"
            value={aadhar}
            onChange={ e => setAadhar(e.target.value) } />
        </label>
        <input className="body" type="submit" value="Set it" />
        <button
        className="body"
        onClick={handleAadharGet}
        type="button" > 
        Get it
      </button>
      { getAadhar }
      </form>

      <br/>
      </div>
      
      <button className="files" type="button" >Add files..</button>

  </div>  
);
};
export default App;