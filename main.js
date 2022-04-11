https://teachablemachine.withgoogle.com/models/mN7p3_UAf/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/mN7p3_UAf/model.json', modelReady);
}

function modelReady()
{
    classifier.classify( gotResults );
}