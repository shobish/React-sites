import "./MailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, Save Money</h1>
      <span className="mailDec">sign up and We will sent the best</span>
      <div className="mailInputContainer">
        <input type="text" className="email" placeholder="Enter Your Email " />
        <button className="mailButton">Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
