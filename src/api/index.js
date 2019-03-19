import axios from 'axios'
// 配置基准路径
const baseURL = 'http://localhost:8888/api/private/v1/'
// 配置默认的基准路径
axios.defaults.baseURL = baseURL

// 添加一个拦截器
// config:可以进行请求头的设置，通过headers属性
// 自动调用
axios.interceptors.request.use(function (config) {
  // Do something before request is sent:在请求之前需要做的事情就在这个位置写
  // 1.获取token
  var token = localStorage.getItem('mytoken')
  if (token) {
  // 2.写入请求头
    config.headers['Authorization'] = token
  }
  return config
}, function (error) {
  // Do something with request error：请求失败了的处理在这里写
  return Promise.reject(error)
})

// 登录
export const login = (params) => {
  return axios.post('login', params).then((res) => {
    return res.data
  })
}

// 获取用户数据
export const getAllUserList = (pa) => {
  return axios.get('users', {params: pa}).then((res) => {
    return res.data
  })
}

// 修改用户数据
export const editUser = (res) => {
  return axios.put(`users/${res.id}`, res).then((red) => {
    return red.data
  })
}

// 添加用户数据
export const addUser = (res) => {
  return axios.post('users', res).then((red) => {
    return red.data
  })
}

// 修改用户状态
export const editType = (res) => {
  return axios.put(`users/${res.uId}/state/${res.type}`, res).then((red) => {
    return red.data
  })
}

// 删除单个用户
export const removeUserfrom = (res) => {
  return axios.delete(`users/${res.id}`).then(ret => {
    return ret.data
  })
}

// 查询角色列表
export const seleteRolefrom = (res) => {
  return axios.get('roles').then(ret => {
    return ret.data
  })
}

// 授权角色
export const autRolefrom = (paa) => {
  return axios.put(`users/${paa.id}/role`, {rid: paa.rid}).then(ret => {
    return ret.data
  })
}

// ——————————————————————————角色列表——————————————————————————————————————————————————

// 左侧权限列表

export const leftmenusfrom = (pa) => {
  return axios.get('menus').then(ret => {
    return ret.data
  })
}

// 获取角色列表
export const rolesfrom = (pa) => {
  return axios.get('roles').then(ret => {
    return ret.data
  })
}
// 取消角色的权限
export const deleteRoleright = (res) => {
  return axios.delete(`roles/${res.roleId}/rights/${res.rightId}`).then((red) => {
    return red.data
  })
}
// 添加角色
export const addRoles = (res) => {
  return axios.post('roles', res).then((red) => {
    return red.data
  })
}
// 删除角色
export const deleteRoles = (res) => {
  return axios.delete(`roles/${res.id}`).then((red) => {
    return red.data
  })
}
// 编辑角色
export const putRoles = (res) => {
  return axios.put(`roles/${res.id}`, res).then((red) => {
    return red.data
  })
}

// ——————————————————————————权限列表——————————————————————————————————————————————————

// 获取所有权限列表
export const getRightsList = (res) => {
  return axios.get('rights/list').then((red) => {
    return red.data
  })
}
// 获取所有权限列表
export const getRolesList = (res) => {
  return axios.get('rights/tree').then((red) => {
    return red.data
  })
}
// 提交权限授权
export const autRolesList = (res) => {
  return axios.post(`roles/${res.roleId}/rights`, {rids: res.rids}).then((red) => {
    return red.data
  })
}

// ——————————————————————————商品列表——————————————————————————————————————————————————
// 获取所有商品列表
export const getGoodsList = (red) => {
  return axios.get('goods', {params: red}).then((red) => {
    return red.data
  })
}
