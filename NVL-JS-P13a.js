var n = 0

function primo(n) 
{

  for (var i = 2; i < n; i++) 
  {

    if (n % i === 0) 
    {
      console.log(n + " NO es un numero primo");
      return false;
    }
    else 
    {
    console.log(n + " SI es un numero primo.");
  	}

  }
}

primo(1);
primo(2);
primo(3);
primo(4);
primo(5);
primo(6);
primo(7);
primo(8);
primo(9);
primo(10);
