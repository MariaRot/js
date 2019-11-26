var globalVariable = 'Ma aflu in contextul global';

function contextTest() {
  var localVariable = 'Ma aflu in contextul local';
  globalVariable = 'Nu ma aflu in contextul global';

  console.log(globalVariable);
  console.log(localVariable);
 // console.log(noVariable);
}

contextTest();