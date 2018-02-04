import React from "react"
import { Menu, Icon, Switch , Button } from 'antd';
let publicPath=`http://localhost:3000/`

export default class Sider extends React.Component {
    constructor (){
       super()
       this.state={
          img:'',
          id:0,
          id2:0,
          val0:'',
          val1:'',
          val2:'',
          val3:'',
          val4:'',
          val5:'',
          val6:'',
          val7:'',
          val8:'',
          val9:'无',
          val10:'',
          val11:'',
          listnum:0
       }
       this.files={}
    }
    getIMGlist (){
        this.fetchFn('http://localhost:8006/news/newsimg')
          this.refs.news_img_add.style.display="block";
    }
    upDataimg (){
        return () => {
          this.refs.setImg.style.display="block";
          this.refs.setImg.children[0].style.display="block";
        }
    }
    filechange () {
      return (e)=>{
        this.files={}  
        e.persist()
        for (var i in e.target.files){
          isNaN(i)!=true && (this.files[i]=e.target.files[i])
        }
      }
        
    }
    chuanclick (){
        var _self = this ;
        let fd = new FormData() ;
        for(var i in this.files){
            Object.defineProperty(this.files[i], 'name', {
               writable: true //设置属性为可写
            });
            this.files[i].name='8989880.jpg' ;
             Object.defineProperty(this.files[i], 'name', {
               writable: false //设置属性为可写
            });
            console.log(this.files[i])
            fd.append("upload"+i,this.files[i])
        }
            

        this.addImgAjax('public/replaceimg',fd,function (data){
          console.log(data)
          _self.setState({
              img:publicPath+`${data[0]['path']}`
          },function (){
            _self.refs.setImg.style.display="none";
            _self.refs.setImg.children[0].style.display="none";
          })
        })
    }
    cancel (x){
      return ()=>{
        this.refs.setImg.style.display="none"
        this.refs.setImg.children[x].style.display="none";
      }
    }
    addImgs (){
        this.refs.setImg.style.display="block";
        this.refs.setImg.children[1].style.display="block";
    }
    //添加  file改变函数
    addChange (){
      return (e)=>{
        this.files={}
        e.persist()
        console.log(e.target.files)
        for (var i in e.target.files){
          isNaN(i)!=true && (this.files[i]=e.target.files[i])
        }
        console.log(this.files)
      }
    }
    addgo (){
        var _self = this ;
        let fd=new FormData();
        console.log(this.files)
        for(var i in this.files){
            fd.append("upload"+i,this.files[i])
        }
        console.log(fd)
        this.addImgAjax('public/addimg',fd,function (data){
            //将地址插入当前页面
          let arr=[]
          for(var i in data){
              arr.push(data[i]['path'])
          }
          console.log(data)
          _self.setState({
              img:publicPath+`${data[0]['path']}`
          },function (){

            _self.refs.setImg.style.display="none";
            _self.refs.setImg.children[1].style.display="none";
          })
        })
    }
    //删除
    delete (x){
        return ()=>{         
          let str=`id=${x}`
          console.log(x,str)
          this.fetchDelete("http://localhost:8006/news/deles",str)
        }
    }
    storageInfo (){
        var _self = this ;
        var listNode = this.refs.storage_detail ;
        var data = {} ;
        var datastr = ''
        for(var i = 0; i<listNode.children.length; i++){
            data['detail'+i] = listNode.children[i].children[1].value ;
        }
        data.detail12 = this.state.img
        for(var j in data){
           if(data[j]==''){
              return false 
           }else{
              if(j=="detail12"){
                datastr+=j+"="+data[j]

              }else{
                datastr+=j+"="+data[j]+"&"
              }
           }
        }
        // console.log(datastr)
        //   formData.append('abc','123')

        this.postAjax('public/storage',datastr,function (data){
            if(data.errcode == 0){
              var index = _self.state.listnum
                _self.setState({
                  img:'',
                  val0:'',
                  val1:'',
                  val2:'',
                  val3:'',
                  val4:'',
                  val5:'',
                  val6:'',
                  val7:'',
                  val8:'',
                  listnum:index+1
                })
            }else{
                alert(data.errmsg)

            }
        })
        // _self.refs.setImg.style.display="none";
    }
    storageChange (e,i){
        // console.log(e.target.value||"不能为空")
        var data = '{"val'+i+'":"'+(e.target.value)+'"}'
        // console.log(data)
        var newdata = JSON.parse(data)
        this.setState(newdata)
        // console.log(newdata,1)
    }
    render() {

      return (
        <div className="news_imgbox">
            <div>
               本次以成功保存<span>{this.state.listnum}</span>条数据
            </div>
            <div className="storage_img">
                <span>图片信息</span><img src={this.state.img} />
                <div id="news_img_add" ref="news_img_add">
                    <Button type="primary" onClick={this.addImgs.bind(this)}>添加图片</Button>
                    <Button type="primary" onClick={this.upDataimg()}>替换图片</Button>
                </div>
            </div>
            <ul className="storage_detail" ref='storage_detail'>
                <li><label>检测编号</label><input type='text' value={this.state.val0} onChange={(e) => this.storageChange(e,0)}/></li>
                <li><label>鉴定结果</label><input type='text' value={this.state.val1} onChange={(e) => this.storageChange(e,1)}/></li>
                <li><label>总重量</label><input type='text' value={this.state.val2} onChange={(e) => this.storageChange(e,2)}/></li>
                <li><label>形状</label><input type='text' value={this.state.val3} onChange={(e) => this.storageChange(e,3)}/></li>
                <li><label>主石名称</label><input type='text' value={this.state.val4} onChange={(e) => this.storageChange(e,4)}/></li>
                <li><label>颜色</label><input type='text' value={this.state.val5} onChange={(e) => this.storageChange(e,5)}/></li>
                <li><label>折射率</label><input type='text' value={this.state.val6} onChange={(e) => this.storageChange(e,6)}/></li>
                <li><label>密度</label><input type='text' value={this.state.val7} onChange={(e) => this.storageChange(e,7)}/></li>
                <li><label>放大检查</label><input type='text' value={this.state.val8} onChange={(e) => this.storageChange(e,8)}/></li>
                <li><label>备注</label><input type='text' value={this.state.val9} onChange={(e) => this.storageChange(e,9)}/></li>
                <li><label>鉴定师</label><input type='text' value={this.state.val10} onChange={(e) => this.storageChange(e,10)}/></li>
                <li><label>审核人</label><input type='text' value={this.state.val11} onChange={(e) => this.storageChange(e,11)}/></li>
            </ul>
            <div id="news_img_add" ref="news_img_add">
                <Button type="primary" onClick={() => {this.storageInfo()}}>保存</Button>
            </div>
            <div id="setImg" ref="setImg">
                <div className="setImgs">
                    <p>替换图片</p>
                    <input type="file" onChange={this.filechange()}/>
                    <Button onClick={this.cancel(0)}>Cancel</Button>
                    <Button onClick={this.chuanclick.bind(this)}>确定</Button>
                </div>
                <div className="setImgs">
                    <p>添加图片</p>
                    <input type="file" onChange={this.addChange()}/>
                    <Button onClick={this.cancel(1)}>Cancel</Button>
                    <Button onClick={this.addgo.bind(this)}>确定</Button>
                </div>
            </div>
        </div>
      );
    }
    //数据表添加地址
    fetchFn2 (url,fd){
        fetch(url,{
          method:"post",
          headers: { 
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" 
          },
          body:fd          
        })
        .then((data)=>data.json())
        .then((data)=>{
            this.fetchFn('http://localhost:8006/news/newsimg')

            this.refs.setImg.style.display="none";
            this.refs.setImg.children[1].style.display="none";


        })
        .catch((x)=>{
            console.log(x)
        })
    }
    fetchFn (url){
        fetch(url)
        .then((data)=>data.json())
        .then((data)=>{
          console.log(data)
          this.setState({
            img:data
          })
        })
        .catch((x)=>{
            console.log(x)
        })
    }
    //*＊＊＊＊＊＊＊＊数据库添加图片＊＊＊＊＊＊＊*/
    fetchFnupdata2 (url,fd){
        fetch(url,{
          method:"post",
          body:fd
        })
        .then( data =>{
            if(data.ok) return data.json()            
          })
        .then( data => {
          //将地址插入当前页面
          let arr=[]
          for(var i in data){
              arr.push(data[i]['path'])
          }
          console.log(data)
          let str=`imgs=http://localhost:8006/${data[0]['path']}`
          // this.fetchFn2("http://localhost:8006/news/news",str)

          //插入数据库

        })
        .catch((x)=>{
            alert("请选择图片")
        })
    }
    //删除
    fetchDelete (url,fd){
        fetch(url,{
          method:"post",
           headers: { 
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" 
          },
          body:fd
        })
        .then( data =>{
            if(data.ok) return data.json()            
          })
        .then( data => {
            this.fetchFn('http://localhost:8006/news/newsimg')
            
        })
        .catch((x)=>{
            console.log(x)
        })
    }
    fetchFnupdata (url,fd){
        fetch(url,{
          method:"post",
          body:fd
        })
        .then( data =>{
            if(data.ok){
                return data.json() 
            }
          })
        .then( data => {
          //将地址插入当前页面
          console.log(this.state.img,this.state.id,this.state.id2)
          this.state.img[this.state.id2]['img']="http://localhost:8006/"+data[0]['path']
          this.setState({
              img:this.state.img
          })
          //插入数据库
          let fds=new FormData();
          fds.append("id",this.state.id);
          fds.append("imgstr",data[0]['path']);
          console.log(data[0]['path']);
          var str=`id=${this.state.id}&imgstr=http://localhost:8006/${data[0]['path']}`;
          this.fetchUpdata("http://localhost:8006/news/replace",str);
        })
        .catch((x)=>{
            alert("请选择图片")
        })
    }
    //更新
    fetchUpdata (url,fd){
        fetch(url,{
          method:"post",
          headers: { 
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" 
          },
          body:fd
        })
        .then(data => data.text())
        .then(data => {
            console.log("成功");
            this.refs.setImg.style.display="none";
            this.refs.setImg.children[0].style.display="block";


        })
        .catch((e) => {
          console.log(e)
        })
    }
    addImgAjax (url,data,callback){
        fetch(publicPath+url,{
          method:"post",
          body:data
        })
        .then( data =>{
            if(data.ok){
                return data.json() 
            }
          })
        .then( data => {
          //将地址插入当前页面
          callback(data)
        })
        .catch((x)=>{
            alert("请选择图片")
        })
    }
    postAjax (url,data,callback){
        fetch(publicPath+url,{
            method:"POST",
            headers:{
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" 
            },
            body:data
        })
        .then((data)=>data.json())
        .then((data)=>{ 
            callback(data)    
        })
        .catch((x)=>{
            console.log(x)
        })
      }


}



