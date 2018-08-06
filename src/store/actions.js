import request from '../utils/request.js'
export const action_count1 = function({commit},arg){
  commit({
    type: 'common',     //对应mutation.js中的getMsg方法
    key: 'count1',
    data: arg,
  });
};
export const action_count2 = function({commit},arg){
  commit({
    type: 'common',     //对应mutation.js中的getMsg方法
    key: 'count2',
    data: arg,
  });
};
export const action_ajax1 = function({commit},arg){
 return request('http://www.2-class.com/api/homePage/list',arg,'GET').then(res=>{
    commit({
      type: 'initAjaxType',
      key: 'ajax1',
      data: res.data,
    });
  }).catch(error=>{
    console.log(error)
  })

};
