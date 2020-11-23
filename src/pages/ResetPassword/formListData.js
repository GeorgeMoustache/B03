export default [
  {
    label: '用户名',
    name: 'loginName',
    type: 'text',
    typeToggle: false,
    placeholder: '请输入用户名',
    verify: false
  },
  {
    label: '手机号码',
    name: 'phoneNo',
    type: 'text',
    typeToggle: false,
    placeholder: '请输入手机号',
    verify: false
  },
  {
    label: '获取验证码',
    name: 'verificationCode',
    type: 'text',
    typeToggle: false,
    placeholder: '请输入验证码',
    verify: true
  },
  {
    label: '新密码',
    name: 'passWord',
    type: 'password',
    typeToggle: true,
    placeholder: '8-10位大小写英数组合',
    verify: false
  },
  {
    label: '确认新密码',
    name: 'repeatPassWord',
    type: 'password',
    typeToggle: true,
    placeholder: '8-10位大小写英数组合',
    verify: false
  },
]