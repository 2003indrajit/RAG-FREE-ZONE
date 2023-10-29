const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

document.getElementById("toggleButtons").addEventListener("click", function () {
    // Toggle the visibility of WhatsApp Chat and Call buttons
    const chatButton = document.querySelector(".click-to-whatsapp-chat-button");
    const callButton = document.querySelector(".click-to-call-button");
  
    chatButton.style.display = chatButton.style.display === "none" ? "block" : "none";
    callButton.style.display = callButton.style.display === "none" ? "block" : "none";
  });
  

//   #our-team {
//     padding: 60px 0;
//     background-color: #fff;
//     text-align: center;
//   }
  
//   #our-team h2 {
//     font-size: 32px;
//     font-weight: 700;
//     margin-bottom: 20px;
//     color: #111;
//   }
  
//   .team-cards {
//     display: flex;
//     justify-content: center; /* Center-align the team cards */
//     flex-wrap: wrap;
//   }
  
//   .team-card {
//     flex: 0 1 calc(25% - 20px);
//     text-align: center;
//     background-color: #fff;
//     padding: 20px;
//     margin: 10px;
//     border-radius: 5px;
//     box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.1);
//     overflow: hidden;
//   }
  
//   .team-card img {
//     max-width: 100%;
//     border-radius: 50%;
//     object-fit: cover;
//     transition: all ease 1s;
  
//   }
  
//   .team-card:hover img{
//     scale: 1.2;
//   }
  
//   .team-card h3 {
//     font-size: 20px;
//     font-weight: 700;
//     margin-top: 10px;
//     color: #111;
//   }
  
//   .team-card p {
//     font-size: 16px;
//     margin: 10px 0;
//     color: #555;
//   }
  
//   .social-media a {
//     font-size: 20px;
//     margin: 0 10px;
//     color: #111;
//   }
  
//   .button.login-button {
//     background: #ffd000;
//     color: #111;
//     border: 2px solid #ffd000;
//     border-radius: 15px;
//     padding: 10px 20px;
//     font-size: 18px;
//     text-decoration: none;
//     margin-top: 20px;
//     display: inline-block;
//   }
  
//   .button.login-button:hover {
//     background: #111;
//     color: #ffd000;
//   }