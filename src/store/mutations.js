/**
 * Created by Administrator on 2017/3/1 0001.
 */
 //实参可以改变
// export const getMsg = (state, state) => {
//   state.msg = payload.msg;
// }
export const common = function(state, {key,date}){
  state[key]=date;
}
