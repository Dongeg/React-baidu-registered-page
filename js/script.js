var MyForm=React.createClass({
	getInitialState:function(){
		return {
			phoneNumber:"",
			passWord:"",
			verifyCode:"",
			checked:"true",
		};
	},
	handleChange:function(name,event){
		var newState={};
		newState[name]= name=="checked"?event.target.checked:event.target.value;
		this.setState(newState);
	},
	submitHandler:function(event){
            event.preventDefault();
            console.log(this.state);
	},
	render:function(){
		return(
		   <form onSubmit={this.submitHandler}>
				<p>
				  <label>手机号</label> 
				  <input type="text" placeholder="用于登陆和找回密码" maxlength="11" autocomplete="off" className="phone" 
				        pattern="[0-9]{11}" title="请输入11位手机号"  value={this.state.phoneNumber} onChange={this.handleChange.bind(this,"phoneNumber")} />
				</p>
				<p><label>密码</label> 
				   <input type="password" placeholder="密码" maxlength="20" autocomplete="off"  className="password"
				          value={this.state.passWord} onChange={this.handleChange.bind(this,"passWord")} />
				</p>
				<p>
					<label>验证码</label>
					<input type="text" placeholder="验证码" maxlength="6" autocomplete="off" className="verifyCode" 
					       value={this.state.verifyCode} onChange={this.handleChange.bind(this,"verifyCode")} />
					<input type="button" value="获取短信验证码" className="getVerifyCode" />
				</p>
				<p>
					<input type="checkbox" autocomplete="off" className="checkbox"
					       checked={this.state.checked} onChange={this.handleChange.bind(this,"checked")} />
					<span className="read">阅读并接受<a href="#">《百度用户协议》</a></span>
				</p>
				<p>
					<input type="submit" value="注册" className="registered" />
				</p>
		   </form>
		  )
	}
})
ReactDOM.render(<MyForm></MyForm>, document.body);