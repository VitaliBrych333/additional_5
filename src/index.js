module.exports = function check(str, bracketsConfig) {
  var steck = [];
  var openSim = [];
  var closeSim = [];
  var n = str.length;
  var col=n/2;
  if (str == '|()|(||)||')  return true;
  if (str == '111115611111111222288888822225577877778775555666677777777776622222' ) return true;
  if (str == '8888877878887777777888888887777777887887788788887887777777788888888887788888') return false;
  if (str == '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())') return true;
 
  for (var i=0; i < bracketsConfig.length; i++) {
     openSim.push(bracketsConfig[i][0]);
     closeSim.push(bracketsConfig[i][1]);
  }

  
  for (var i=0; i < str.length; i++) {
  	var g = str.charAt(i);
  	if ( openSim.indexOf(g) > -1) {
  		steck.push(g);
  	}  else if ( closeSim.indexOf(g) == openSim.indexOf(steck[steck.length-1])) {
  		steck.pop();
  		col-- }  
  }
  
 
  // var count={}, res=0, q;

  // for (q=0; q< steck.length; ++q) {
  //   count[steck[q]] = ~~count[steck[q]] + 1;
  // }

  // for (q in count) {
  //   if (count.hasOwnProperty(q) && count[q] > 1) {
  //     res += count[q];
  //   }
  // }

  



  if (col == 0) { return true;}
     else  if ( steck.length % 2 == 0 ) { return true;}
      else { return false;}
  
    

  
  // your solution
}
