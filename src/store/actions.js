
export const action_count1 = function({commit},arg){
  commit({
    type: 'common',     //对应mutation.js中的getMsg方法
    key: 'count1',
    date: arg,
  });
};
export const action_count2 = function({commit},arg){
  commit({
    type: 'common',     //对应mutation.js中的getMsg方法
    key: 'count2',
    date: arg,
  });
};
