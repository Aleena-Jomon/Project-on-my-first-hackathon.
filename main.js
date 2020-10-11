function myFunction() {
    var d = document.getElementById("mySelect").value;
    switch(d){
        case "Sunday":
           q = "\"Always put your best foot forward.\"<br><br><br>Sunday clears away the rust of the whole week.<br>You need tp take sufficient rest today,and enjoy the day's vibe.<br>Pray to your God, it will give you strength.<br>Make this day a refreshing onr so that you can have energy for the coming days.<br>Don't forget to finish any pending works.  :-)";
           break;
        case "Monday":
           q = "\"A journey of thousand miles begins with a single step.\"<br><br><br>It's Monday. Beginning of a week to work. <br>Get a new perspective. Whatever obstacle you are facing,<br> is not permanent. Remember this and start focusing. :-)";
            break;
        case "Tuesday":
           q = "\"Necessity is the mother of invention.\"<br><br><br>Tuesday is the confirmation that your goals are being moved another step forward.<br>Choose to Smile. Choose to Love. Choose to be Happy! <br>:-)";
            break;
        case "Wednesday":
           q = "\"A thing begun is half done.\"<br><br><br>It's Wednesday!<br><br>Believe that you can and you are half way done. :-)";
            break;
        case "Thursday":
           q = "\"Fall seven times. Stand up eight.\"<br><br><br>Nothing is more pleasurable than opening your eyes and realizing that<br> every day, God gives us a chance to try again , and not looking back. :-)";
            break;
        case "Friday":
           q = "\"Action speaks louder than words.\"<br><br><br>Friday - the day to finish your goals fr the week.<br>It's a day to celebrate that which you set out to <br>accomplish at the begginning of the week.<br>Well Done!!<br>:-)";
            break;  
        case "Saturday":
          q = "\"Good things come to those who wait.\"Saturday - The word has 'Sat' in it.<br>Make sure you take the time for this day to sit and relax. ";
            break;
    }
    document.getElementById("demo").innerHTML = q;
}