class Form{
    constructor(){}

    display(){

        var title=createElement('h2') 
        title.html("Car Racing Game")
        title.position(130,0) 

        var input = createInput(" Name")
        var button = createButton("Play")

        input.position(330,160);
        button.position(350,200);

        // var input2=createInput("Enter the Language")
        // input2.position(200,200)
        // var lang=input2.value()
       
        
        button.mousePressed(function(){
            input.hide();
            button.hide();
            // input2.hide();

            var name = input.value();
            var greeting=createElement('h3')
            // if(lang=="ENGLISH"){
            //     greeting.html("Hello " +name)
            // }
            // else if (lang=="HINDI"){
            //     greeting.html("Namaste " +name)
            // }
            // else if (lang=="SPANISH"){
            //     greeting.html("Hola " +name)
            // }
            // else if (lang=="FRENCH"){
            //     greeting.html("Bonjour "+name)
            // }
            // else {
            //     greeting.html("HI "+name)
            // }
            greeting.html("Hello Hola "+name)
            greeting.position(230,160)



        })
        
        
        
    
    }
}
