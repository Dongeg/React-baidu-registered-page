var MyForm=React.createClass({
	getInitialState:function(){
		return {
			phoneNumber:"",
			passWord:"",
			verifyCode:"",
			checked:true
		};
	},
	handlePhoneNumberChange:function(event){
		this.setState({
			phoneNumber:event.target.value
		});
	},
	handlePassWordChange:function(event){
		this.setState({
			passWord:event.target.value
		})
	},
	handleVerifyCodeChange:function(event){
		this.setState({
			verifyCode:event.target.value
		})		
	},
	handleCheckboxChange:function(event){
		this.setState({
			checked:event.target.checked
		})			
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
				         value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange} />
				</p>
				<p><label>密码</label> 
				   <input type="password" placeholder="密码" maxlength="20" autocomplete="off"  className="password"
				          value={this.state.passWord} onChange={this.handlePassWordChange} />
				</p>
				<p>
					<label>验证码</label>
					<input type="text" placeholder="验证码" maxlength="6" autocomplete="off" className="verifyCode" 
					       value={this.state.verifyCode} onChange={this.handleVerifyCodeChange} />
					<input type="button" value="获取短信验证码" className="getVerifyCode" />
				</p>
				<p>
					<input type="checkbox" autocomplete="off" checked="checked" className="checkbox"
					       value={this.state.checked} onChange={this.handleCheckboxChange} />
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