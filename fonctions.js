
    //Fonction Initialiser 
    let tTaches = []; 
    function initialiser(){
        let tTachesJSON = localStorage.tTaches;
        if (tTachesJSON){
            tTaches = JSON.parse(tTachesJSON);
        }
    }


    //Fonction Sauvegarder localstorage
    function sauvegarde(){
        let tTachesJSON = JSON.stringify(tTaches);
        localStorage.tTaches = tTachesJSON;
        }
  
    //Fonction Date 
    function functionDate(){
        let temps = new Date(); 
        let heures = temps.getHours();
        if (heures < 10){
            heures = "0"+heures; 
        }
        let minutes = temps.getMinutes();
        if (minutes < 10){
            minutes = "0"+minutes; 
        }
        let secondes = temps.getSeconds();
        if (secondes < 10){
            secondes = "0"+secondes; 
        }
        let jour = temps.getDate();
        if (jour < 10){
            jour = "0"+jour; 
        }
        let mois = temps.getMonth(); 
        if (mois < 10){
            mois = "0"+mois; 
        }
        let annee = temps.getFullYear(); 
        let dateAjd = jour + "/" + mois + "/" + annee + ", "+heures+":"+minutes+":"+secondes;

        return dateAjd;
  }

