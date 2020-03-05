var team1 = ['Garrosh', 'Brightwing', 'Liming', 'Thrall', 'Varian'];
var team2 = ['Valla', 'Arthas', 'Anduin', 'Stitches', 'Raynor'];

var sumTeam1 =0;
var sumTeam2 =0;




function sumAllyPoint(team, sum) {
    sum=0;
    for (var i = 0; i < 5; i++){
        for (var k = 0; k < 5; k++){
            if (i == k){
                sum = sum + 0;
                
            }
            else {
                sum = sum + objAllyPoint[team[i]][team[k]];    
            }
        }
    }
    sum =  sum /2;
}
    
sumAllyPoint(team1, sumTeam1);
sumAllyPoint(team2, sumTeam2);


console.log('sumTeam1: ' + sumTeam1)
console.log('sumTeam2: ' + sumTeam2)
