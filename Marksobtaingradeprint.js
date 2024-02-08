let num=prompt("enter the number 0 to 100");
{
    let grade;
    if(num>=90 && num<=100)
    {
       grade="A+";
    }
    else if(num>=80 && num<=89)
    {
         grade="A";
    }
     else if(num>=60 && num<=79)
    {
         grade="B";
    }
     else if(num>=45 && num<=59)
    {
          grade="c";
    }
     else if(num>=35 && num<=44)
    {
       grade="Pass";
    }
     else if(num<35)
    {
         grade="Fail";
    }
     console.log("your number take given yor grade  : ",grade);
}