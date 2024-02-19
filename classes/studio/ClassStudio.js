//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass + 'kg';
        this.scores = scores;
    }
    addScore(newScores) {
        this.scores.push(newScores);
        console.log(this.scores);
    }
    sumNewScore(){
    let sum = 0;
    for (let i = 0; i < this.scores.length; i++){
    sum += this.scores[i];
    }
    console.log(sum/this.scores.length);
    }
    status(){
        if (this.sumNewScore > 90){
            console.log('Accepted');
        } else if (80 > this.sumNewScore < 89){
            console.log('Reserve');
        } else if (70 > this.sumNewScore < 79){
            console.log('Probationary');
        } else {
            console.log('Rejected');
        }
    }

}

let bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let merryM = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let gladG = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

console.log(bubbaBear, merryM, gladG);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

console.log(gladG.addScore(83));
console.log(gladG.sumNewScore());
console.log(gladG.status())

console.log(`${gladG} earned an average test score of ${gladG.sumNewScore()}% and has a status of ${gladG.status()}`)
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

