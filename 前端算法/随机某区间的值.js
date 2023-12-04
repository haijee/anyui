function random(a, b) {
    let base = a > b ? b : a;
    const random = Math.random() * Math.abs(a - b) + base;
    return random;
  }
  
  console.log(random(3, 10));
  
  
  function rand(m, n)  {
    return Math.ceil(Math.random() * (n-m+1) + m-1)
  }
  