import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
//import { JwtHelperService } from '@auth0/angular-jwt';

//import '../components/reguserprofile/reguserprofile.component/loggedUserData';

import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {

  user:any;
  admin:any;
  authtoken:any;
  authtokenA:any;

  constructor(
    private http:Http,
    //private jwthlper:JwtHelperService
  ) { }

  registerUser(user){
    //console.log('Authentify');
   // console.log(user);

    let headers = new Headers();
    headers.append('Content-Type','application/json');

    //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
    return this.http.post("http://localhost:3000/user/register",user, {headers:headers});
    
  }

  logingRegUser(userdata){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    
    return this.http.post("http://localhost:3000/user/login", userdata, {headers:headers}).map(res=>res.json());
  }

  storeData(token, userdata){
    localStorage.setItem("tokenId", token);
    localStorage.setItem("user", JSON.stringify(userdata));

    this.user=userdata;
    this.authtoken=token;

  }

  getUserProfileDet(){
    this.fetchUserToken();
    let headers = new Headers();
    headers.append('Authorization',this.authtoken);   

    headers.append('Content-Type','application/json');   
    //return this.http.get("http://localhost:3000/user/profile", {headers:headers}).map(res=>res.json());
    return this.http.post("http://localhost:3000/user/profile", this.user, {headers:headers}).map(res=>res.json());
    
  }

  fetchUserToken(){
    const Token = localStorage.getItem("tokenId");
    this.authtoken = Token;
  }

  logoutUser(){
    this.authtoken=null;
    this.user = null;
    localStorage.removeItem("tokenId");
    localStorage.removeItem("user");

  }

  getBookDet(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post("http://localhost:3000/books/show", {headers:headers}).map(res=>res.json());
   // return this.http.post('');
  }

  logingAdminUser(admndata){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    //console.log(admndata);

    
    return this.http.post("http://localhost:3000/admin/login", admndata, {headers:headers}).map(res=>res.json());
  }

  storeadmnData(token, admndata){

    

    localStorage.setItem("tokenIdA", token);
    localStorage.setItem("admin", JSON.stringify(admndata));
    //localStorage.setItem("admin", admndata);

    this.admin=admndata;
    this.authtokenA=token;

  }

  getAdmnProfileDet(){
    this.fetchAdminToken();
    let headers = new Headers();
    headers.append('Authorization',this.authtokenA);   

    headers.append('Content-Type','application/json');   
    //return this.http.get("http://localhost:3000/user/profile", {headers:headers}).map(res=>res.json());
    return this.http.post("http://localhost:3000/admin/profile", this.admin, {headers:headers}).map(res=>res.json());
    
  }

  fetchAdminToken(){
    const Token = localStorage.getItem("tokenIdA");
    this.authtokenA = Token;
  }

  logoutAdmin(){
    this.authtokenA=null;
    this.admin = null;
    localStorage.removeItem("tokenIdA");
    localStorage.removeItem("admin");

  }

  registerBook(nwbook){
    //console.log('Authentify');
   // console.log(user);

    let headers = new Headers();
    headers.append('Content-Type','application/json');

    //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
    return this.http.post("http://localhost:3000/books/new",nwbook, {headers:headers});
    
  }

  editMyBook(book){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    console.log("in auth file..");
    console.log(book);

    //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
    return this.http.post("http://localhost:3000/books/edit",book, {headers:headers});
  }

  deleteBook(borrowreq){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
    return this.http.post("http://localhost:3000/books/delete",borrowreq, {headers:headers});
  }

  getallUserDet(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post("http://localhost:3000/user/show", {headers:headers}).map(res=>res.json());
   // return this.http.post('');
  }

  deleteUser(usr){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
    return this.http.post("http://localhost:3000/user/delete",usr, {headers:headers});
  }

  requestBorrowbk(bkdet){
    //console.log('Authentify');
   // console.log(user);

    let headers = new Headers();
    headers.append('Content-Type','application/json');

    //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
    return this.http.post("http://localhost:3000/brwbook/request",bkdet, {headers:headers});
    
  }

  getAllBookRequest(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post("http://localhost:3000/brwbook/show", {headers:headers}).map(res=>res.json());
   // return this.http.post('');
  }

  setBorrowDet(borrowdet){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
    return this.http.post("http://localhost:3000/borrows/insert",borrowdet, {headers:headers});
  }

  deleteBrwReq(borrowreq){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
    return this.http.post("http://localhost:3000/brwbook/delete1",borrowreq, {headers:headers});
  }

  getBookBorrowDet(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post("http://localhost:3000/borrows/show", {headers:headers}).map(res=>res.json());
   // return this.http.post('');
  }

  shwMyBrwReq(userdet){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
    return this.http.post("http://localhost:3000/brwbook/showMine",userdet, {headers:headers}).map(res=>res.json());
  }


  getMyBorrwDet(userdet){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //console.log('Userdetails: '+userdet);
    //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
    return this.http.post("http://localhost:3000/borrows/showMine",userdet, {headers:headers}).map(res=>res.json());
    //return dtset;
  }

  editBorrowdet(brw){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    console.log("in auth file..");
    console.log(brw);

    //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
    return this.http.post("http://localhost:3000/borrows/edit",brw, {headers:headers});
  }

  addRslvdBrw(brw){
    //console.log('Authentify');
   // console.log(user);

    let headers = new Headers();
    headers.append('Content-Type','application/json');

    //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
    return this.http.post("http://localhost:3000/rslvdbrw/new",brw, {headers:headers});
    
  }

  deleteBrwDet(borrow){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
    return this.http.post("http://localhost:3000/borrows/delete",borrow, {headers:headers});
  }

  ShowAllRslvedBrw(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
    return this.http.post("http://localhost:3000/rslvdbrw/show", {headers:headers}).map(res=>res.json());
  }

  ShowAllUnPaid(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
    return this.http.post("http://localhost:3000/rslvdbrw/showUnpaid", {headers:headers}).map(res=>res.json());
  }

  updateUnpaid(details){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
    return this.http.post("http://localhost:3000/rslvdbrw/edit",details, {headers:headers});
  }

  showAllSub(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
    return this.http.post("http://localhost:3000/sub/show", {headers:headers}).map(res=>res.json());
  }

  showMyRslved(usrdet){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    //return this.http.post("http://localhost:3000/user/register",user, {headers:headers}).map(res=>res.json());
    return this.http.post("http://localhost:3000/rslvdbrw/showByMe", usrdet, {headers:headers}).map(res=>res.json());
  }

}

