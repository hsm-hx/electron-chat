import React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory } from "react-router";
import Login from "./Login";
import Signup from "./Signup";
import Rooms from "./Rooms";
import Room from "./Room";

// Routingの定義
const appRouting = (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
      <Route path="rooms" component={Rooms}>
        <Route path=":roomid" component={Room} />
      </Route>
    </Route>
  </Router>
);

// Routingの初期化
if (!location.hash.length) {
  location.hash = "#/login";
}

// firebaseの初期化
var config = {
  apiKey: "AIzaSyDpKd-kMXWM3UfQ_BtUyieqUyPISi8247Y",
  authDomain: "electron-chat-2d0b6.firebaseapp.com",
  databaseURL: "https://electron-chat-2d0b6.firebaseio.com",
  projectId: "electron-chat-2d0b6",
  storageBucket: "electron-chat-2d0b6.appspot.com",
  messagingSenderId: "557195514278"
};
firebase.initializeApp(config);

// Applicationの描画
render(appRouting, document.getElementById("app"));
