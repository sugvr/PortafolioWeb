import React, { useState, useEffect } from "react";
import "./Social.css";
import axios from "axios";

// const URL = `https://www.instagram.com/graphql/query/?query_hash=42323d64886122307be10013ad2dcc44&variables={"id":"251287514","first":1}`

// const Social = () => {
//     const [follower, setFollower] = useState('')
//     const [following, setFollowing] = useState('')
//     const [pic, setPic] = useState('')

//     useEffect(() => {
//         getData()
//     }, [])

//     const getData = async () => {
//         const response = await axios.get(`https://easy-instagram-service.p.rapidapi.com/username`, {
//             headers: {
//                 "content-type": "application/octet-stream",
//                 "x-rapidapi-host": "easy-instagram-service.p.rapidapi.com",
//                 "x-rapidapi-key": "00b4989841msh6f66d81551f861cp141a21jsn826d038ef1fe",
//                 "useQueryString": true
//             }, params: {
//                 "random": "x8n3nsj2",
//                 "username": "sugvr20"
//             }
//         }
//         )
//         console.log(response.data.follower)
//         console.log(response.data.following)
//         console.log(response.data.profile_pic_url)
//         setFollower(response.data.follower)
//         setFollowing(response.data.following)
//         setPic(response.data.profile_pic_url)
//     }

function Social() {
  return (
    <div className="SocialContainer" id="Social">
      <div class="wrapper">
        <div class="section-title"><h2>Redes Sociales</h2></div>
        <ul>
          <li class="facebook">
            <a href="https://www.facebook.com/isaidelgado">
              <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
            </a>
          </li>
          {/* <li class="twitter"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></li> */}
          <li class="instagram">
            <a href="https://www.instagram.com/sugvr20">
              <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
            </a>
          </li>
          <li class="github">
            <a href="https://github.com/sugvr">
              <i class="fa fa-github fa-2x" aria-hidden="true"></i>
            </a>
          </li>
          <li class="linkedin">
            <a href="https://www.linkedin.com/in/isai-delgado-7a5b7b16a/">
              {" "}
              <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* <div className="Tarjetas">
                <h1>Intagram API</h1>
                <img src={pic} className="photo" alt="Foto de perfil de instagram" />
                <p className="ig">Intagram Followers: <p className="name">{follower}</p></p>
                <p className="ig">Intagram Following:  <p className="name"> {following}</p></p>
            </div> */}
    </div>
  );
}

export default Social;
