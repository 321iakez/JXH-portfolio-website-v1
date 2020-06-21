var ul = document.getElementById("collapsible");
var items = ul.getElementsByTagName("li");
for(var i = 0; i < items.length; i++){
    items[i].style.display = "block";
}
function expand() {
    var ul = document.getElementById("collapsible");
    var items = ul.getElementsByTagName("li");
    for(var i  = 0; i < items.length; i++){
        
        if(items[i].style.display === "none"){
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
}

function showContact(){

}

function showFurniture(){
    document.getElementById('furniture').style.display = 'block';
    document.getElementById('body').style.display = 'none';
    document.getElementById('misc').style.display = 'none';
    document.getElementById('spoon').style.display = 'none';
    document.getElementById('room').style.display = 'none';
    document.getElementById('giraffePicture').style.display = 'none';
    document.getElementById('giraffeDescription').style.display = 'none';
    document.getElementById('alphabetPicture').style.display = 'none';
    document.getElementById('alphabetDescription').style.display = 'none';
    document.getElementById('buddhaPicture').style.display = 'none';
    document.getElementById('buddhaDescription').style.display = 'none';
    document.getElementById('teapotPicture').style.display = 'none';
    document.getElementById('teapotDescription').style.display = 'none';
    document.getElementById('b1d').style.display = 'none';
    document.getElementById('b1p').style.display = 'none';
    document.getElementById('b2d').style.display = 'none';
    document.getElementById('b2p').style.display = 'none';
    document.getElementById('b3d').style.display = 'none';
    document.getElementById('b3p').style.display = 'none';
    document.getElementById('b4d').style.display = 'none';
    document.getElementById('b4p').style.display = 'none';
    document.getElementById('r1d').style.display = 'none';
    document.getElementById('r1p').style.display = 'none';
    document.getElementById('r2d').style.display = 'none';
    document.getElementById('r2p').style.display = 'none';
    document.getElementById('r3d').style.display = 'none';
    document.getElementById('r3p').style.display = 'none';
    document.getElementById('s1d').style.display = 'none';
    document.getElementById('s1p').style.display = 'none';
    document.getElementById('s2d').style.display = 'none';
    document.getElementById('s2p').style.display = 'none';
    document.getElementById('s3d').style.display = 'none';
    document.getElementById('s3p').style.display = 'none';
    document.getElementById('f1d').style.display = 'none';
    document.getElementById('f1p').style.display = 'none';
    document.getElementById('f2d').style.display = 'none';
    document.getElementById('f2p').style.display = 'none';
    document.getElementById('f3d').style.display = 'none';
    document.getElementById('f3p').style.display = 'none';
}

function showPeople(){
    document.getElementById('furniture').style.display = 'none';
    document.getElementById('body').style.display = 'block';
    document.getElementById('misc').style.display = 'none';
    document.getElementById('spoon').style.display = 'none';
    document.getElementById('room').style.display = 'none';
    document.getElementById('giraffePicture').style.display = 'none';
    document.getElementById('giraffeDescription').style.display = 'none';
    document.getElementById('alphabetPicture').style.display = 'none';
    document.getElementById('alphabetDescription').style.display = 'none';
    document.getElementById('buddhaPicture').style.display = 'none';
    document.getElementById('buddhaDescription').style.display = 'none';
    document.getElementById('teapotPicture').style.display = 'none';
    document.getElementById('teapotDescription').style.display = 'none';
    document.getElementById('b1d').style.display = 'none';
    document.getElementById('b1p').style.display = 'none';
    document.getElementById('b2d').style.display = 'none';
    document.getElementById('b2p').style.display = 'none';
    document.getElementById('b3d').style.display = 'none';
    document.getElementById('b3p').style.display = 'none';
    document.getElementById('b4d').style.display = 'none';
    document.getElementById('b4p').style.display = 'none';
    document.getElementById('r1d').style.display = 'none';
    document.getElementById('r1p').style.display = 'none';
    document.getElementById('r2d').style.display = 'none';
    document.getElementById('r2p').style.display = 'none';
    document.getElementById('r3d').style.display = 'none';
    document.getElementById('r3p').style.display = 'none';
    document.getElementById('s1d').style.display = 'none';
    document.getElementById('s1p').style.display = 'none';
    document.getElementById('s2d').style.display = 'none';
    document.getElementById('s2p').style.display = 'none';
    document.getElementById('s3d').style.display = 'none';
    document.getElementById('s3p').style.display = 'none';
    document.getElementById('f1d').style.display = 'none';
    document.getElementById('f1p').style.display = 'none';
    document.getElementById('f2d').style.display = 'none';
    document.getElementById('f2p').style.display = 'none';
    document.getElementById('f3d').style.display = 'none';
    document.getElementById('f3p').style.display = 'none';
}

function showInterior(){
    document.getElementById('furniture').style.display = 'none';
    document.getElementById('body').style.display = 'none';
    document.getElementById('misc').style.display = 'none';
    document.getElementById('spoon').style.display = 'none';
    document.getElementById('room').style.display = 'block';
    document.getElementById('giraffePicture').style.display = 'none';
    document.getElementById('giraffeDescription').style.display = 'none';
    document.getElementById('alphabetPicture').style.display = 'none';
    document.getElementById('alphabetDescription').style.display = 'none';
    document.getElementById('buddhaPicture').style.display = 'none';
    document.getElementById('buddhaDescription').style.display = 'none';
    document.getElementById('teapotPicture').style.display = 'none';
    document.getElementById('teapotDescription').style.display = 'none';
    document.getElementById('b1d').style.display = 'none';
    document.getElementById('b1p').style.display = 'none';
    document.getElementById('b2d').style.display = 'none';
    document.getElementById('b2p').style.display = 'none';
    document.getElementById('b3d').style.display = 'none';
    document.getElementById('b3p').style.display = 'none';
    document.getElementById('b4d').style.display = 'none';
    document.getElementById('b4p').style.display = 'none';
    document.getElementById('r1d').style.display = 'none';
    document.getElementById('r1p').style.display = 'none';
    document.getElementById('r2d').style.display = 'none';
    document.getElementById('r2p').style.display = 'none';
    document.getElementById('r3d').style.display = 'none';
    document.getElementById('r3p').style.display = 'none';
    document.getElementById('s1d').style.display = 'none';
    document.getElementById('s1p').style.display = 'none';
    document.getElementById('s2d').style.display = 'none';
    document.getElementById('s2p').style.display = 'none';
    document.getElementById('s3d').style.display = 'none';
    document.getElementById('s3p').style.display = 'none';
    document.getElementById('f1d').style.display = 'none';
    document.getElementById('f1p').style.display = 'none';
    document.getElementById('f2d').style.display = 'none';
    document.getElementById('f2p').style.display = 'none';
    document.getElementById('f3d').style.display = 'none';
    document.getElementById('f3p').style.display = 'none';
}

function showObjects(){
    document.getElementById('furniture').style.display = 'none';
    document.getElementById('body').style.display = 'none';
    document.getElementById('misc').style.display = 'none';
    document.getElementById('spoon').style.display = 'block';
    document.getElementById('room').style.display = 'none';
    document.getElementById('giraffePicture').style.display = 'none';
    document.getElementById('giraffeDescription').style.display = 'none';
    document.getElementById('alphabetPicture').style.display = 'none';
    document.getElementById('alphabetDescription').style.display = 'none';
    document.getElementById('buddhaPicture').style.display = 'none';
    document.getElementById('buddhaDescription').style.display = 'none';
    document.getElementById('teapotPicture').style.display = 'none';
    document.getElementById('teapotDescription').style.display = 'none';
    document.getElementById('b1d').style.display = 'none';
    document.getElementById('b1p').style.display = 'none';
    document.getElementById('b2d').style.display = 'none';
    document.getElementById('b2p').style.display = 'none';
    document.getElementById('b3d').style.display = 'none';
    document.getElementById('b3p').style.display = 'none';
    document.getElementById('b4d').style.display = 'none';
    document.getElementById('b4p').style.display = 'none';
    document.getElementById('r1d').style.display = 'none';
    document.getElementById('r1p').style.display = 'none';
    document.getElementById('r2d').style.display = 'none';
    document.getElementById('r2p').style.display = 'none';
    document.getElementById('r3d').style.display = 'none';
    document.getElementById('r3p').style.display = 'none';
    document.getElementById('s1d').style.display = 'none';
    document.getElementById('s1p').style.display = 'none';
    document.getElementById('s2d').style.display = 'none';
    document.getElementById('s2p').style.display = 'none';
    document.getElementById('s3d').style.display = 'none';
    document.getElementById('s3p').style.display = 'none';
    document.getElementById('f1d').style.display = 'none';
    document.getElementById('f1p').style.display = 'none';
    document.getElementById('f2d').style.display = 'none';
    document.getElementById('f2p').style.display = 'none';
    document.getElementById('f3d').style.display = 'none';
    document.getElementById('f3p').style.display = 'none';
}

function showMisc(){
    document.getElementById('furniture').style.display = 'none';
    document.getElementById('body').style.display = 'none';
    document.getElementById('misc').style.display = 'block';
    document.getElementById('spoon').style.display = 'none';
    document.getElementById('room').style.display = 'none';
    document.getElementById('giraffePicture').style.display = 'none';
    document.getElementById('giraffeDescription').style.display = 'none';
    document.getElementById('alphabetPicture').style.display = 'none';
    document.getElementById('alphabetDescription').style.display = 'none';
    document.getElementById('buddhaPicture').style.display = 'none';
    document.getElementById('buddhaDescription').style.display = 'none';
    document.getElementById('teapotPicture').style.display = 'none';
    document.getElementById('teapotDescription').style.display = 'none';
    document.getElementById('b1d').style.display = 'none';
    document.getElementById('b1p').style.display = 'none';
    document.getElementById('b2d').style.display = 'none';
    document.getElementById('b2p').style.display = 'none';
    document.getElementById('b3d').style.display = 'none';
    document.getElementById('b3p').style.display = 'none';
    document.getElementById('b4d').style.display = 'none';
    document.getElementById('b4p').style.display = 'none';
    document.getElementById('r1d').style.display = 'none';
    document.getElementById('r1p').style.display = 'none';
    document.getElementById('r2d').style.display = 'none';
    document.getElementById('r2p').style.display = 'none';
    document.getElementById('r3d').style.display = 'none';
    document.getElementById('r3p').style.display = 'none';
    document.getElementById('s1d').style.display = 'none';
    document.getElementById('s1p').style.display = 'none';
    document.getElementById('s2d').style.display = 'none';
    document.getElementById('s2p').style.display = 'none';
    document.getElementById('s3d').style.display = 'none';
    document.getElementById('s3p').style.display = 'none';
    document.getElementById('f1d').style.display = 'none';
    document.getElementById('f1p').style.display = 'none';
    document.getElementById('f2d').style.display = 'none';
    document.getElementById('f2p').style.display = 'none';
    document.getElementById('f3d').style.display = 'none';
    document.getElementById('f3p').style.display = 'none';
}

/* body buttons */
function b1b (){
    document.getElementById('b1p').style.display = 'none';
    document.getElementById('b1d').style.display = 'none';
    document.getElementById('body').style.display = 'block';
}

function b2b (){
    document.getElementById('b2p').style.display = 'none';
    document.getElementById('b2d').style.display = 'none';
    document.getElementById('body').style.display = 'block';
}

function b3b (){
    document.getElementById('b2p').style.display = 'none';
    document.getElementById('b2d').style.display = 'none';
    document.getElementById('body').style.display = 'block';
}

function b4b (){
    document.getElementById('b2p').style.display = 'none';
    document.getElementById('b2d').style.display = 'none';
    document.getElementById('body').style.display = 'block';
}

function b1v(){
    document.getElementById('b1p').style.display = 'block';
    document.getElementById('b1d').style.display = 'block';
    document.getElementById('body').style.display = 'none';
}

function b2v(){
    document.getElementById('b2p').style.display = 'block';
    document.getElementById('b2d').style.display = 'block';
    document.getElementById('body').style.display = 'none';
}

function b3v(){
    document.getElementById('b3p').style.display = 'block';
    document.getElementById('b3d').style.display = 'block';
    document.getElementById('body').style.display = 'none';
}

function b4v(){
    document.getElementById('b4p').style.display = 'block';
    document.getElementById('b4d').style.display = 'block';
    document.getElementById('body').style.display = 'none';
}




/* furniture buttons */
function f1b(){
    document.getElementById('f1p').style.display = 'none';
    document.getElementById('f1d').style.display = 'none';
    document.getElementById('furniture').style.display = 'block';
}

function f2b(){
    document.getElementById('f2p').style.display = 'none';
    document.getElementById('f2d').style.display = 'none';
    document.getElementById('furniture').style.display = 'block';
}

function f3b(){
    document.getElementById('f3p').style.display = 'none';
    document.getElementById('f3d').style.display = 'none';
    document.getElementById('furniture').style.display = 'block';
}

function f1v(){
    document.getElementById('f1p').style.display = 'block';
    document.getElementById('f1d').style.display = 'block';
    document.getElementById('furniture').style.display = 'none';
}

function f2v(){
    document.getElementById('f2p').style.display = 'block';
    document.getElementById('f2d').style.display = 'block';
    document.getElementById('furniture').style.display = 'none';
}

function f3v(){
    document.getElementById('f3p').style.display = 'block';
    document.getElementById('f3d').style.display = 'block';
    document.getElementById('furniture').style.display = 'none';
}




/* MISC buttons */
function m1b(){
    document.getElementById('giraffePicture').style.display = 'none';
    document.getElementById('giraffeDescription').style.display = 'none';
    document.getElementById('misc').style.display = 'block';
}

function m2b(){
    document.getElementById('alphabetPicture').style.display = 'none';
    document.getElementById('alphabetDescription').style.display = 'none';
    document.getElementById('misc').style.display = 'block';
}

function m3b(){
    document.getElementById('buddhaPicture').style.display = 'none';
    document.getElementById('buddhaDescription').style.display = 'none';
    document.getElementById('misc').style.display = 'block';
}

function m4b(){
    document.getElementById('teapotPicture').style.display = 'none';
    document.getElementById('teapotDescription').style.display = 'none';
    document.getElementById('misc').style.display = 'block';
}

function m1v(){
    document.getElementById('giraffePicture').style.display = 'block';
    document.getElementById('giraffeDescription').style.display = 'block';
    document.getElementById('misc').style.display = 'none';
}

function m2v(){
    document.getElementById('alphabetPicture').style.display = 'block';
    document.getElementById('alphabetDescription').style.display = 'block';
    document.getElementById('misc').style.display = 'none';
}

function m3v(){
    document.getElementById('buddhaPicture').style.display = 'block';
    document.getElementById('buddhaDescription').style.display = 'block';
    document.getElementById('misc').style.display = 'none';
}

function m4v(){
    document.getElementById('teapotPicture').style.display = 'block';
    document.getElementById('teapotDescription').style.display = 'block';
    document.getElementById('misc').style.display = 'none';
}

/* ROOM BUTTONS */
function r1b(){
    document.getElementById('r1p').style.display = 'none';
    document.getElementById('r1d').style.display = 'none';
    document.getElementById('room').style.display = 'block';
}

function r2b(){
    document.getElementById('r2p').style.display = 'none';
    document.getElementById('r2d').style.display = 'none';
    document.getElementById('room').style.display = 'block';
}

function r3b(){
    document.getElementById('r3p').style.display = 'none';
    document.getElementById('r3d').style.display = 'none';
    document.getElementById('room').style.display = 'block';
}

function r1v(){
    document.getElementById('r1p').style.display = 'block';
    document.getElementById('r1d').style.display = 'block';
    document.getElementById('room').style.display = 'none';
}

function r2v(){
    document.getElementById('r2p').style.display = 'block';
    document.getElementById('r2d').style.display = 'block';
    document.getElementById('room').style.display = 'none';
}

function r3v(){
    document.getElementById('r3p').style.display = 'block';
    document.getElementById('r3d').style.display = 'block';
    document.getElementById('room').style.display = 'none';
}



/* spoon buttons */
function s1b(){
    document.getElementById('s1p').style.display = 'none';
    document.getElementById('s1d').style.display = 'none';
    document.getElementById('spoon').style.display = 'block';
}

function s2b(){
    document.getElementById('s2p').style.display = 'none';
    document.getElementById('s2d').style.display = 'none';
    document.getElementById('spoon').style.display = 'block';
}

function s3b(){
    document.getElementById('s3p').style.display = 'none';
    document.getElementById('s3d').style.display = 'none';
    document.getElementById('spoon').style.display = 'block';
}

function s1v(){
    document.getElementById('s1p').style.display = 'block';
    document.getElementById('s1d').style.display = 'block';
    document.getElementById('spoon').style.display = 'none';
}

function s2v(){
    document.getElementById('s2p').style.display = 'block';
    document.getElementById('s2d').style.display = 'block';
    document.getElementById('spoon').style.display = 'none';
}

function s3v(){
    document.getElementById('s3p').style.display = 'block';
    document.getElementById('s3d').style.display = 'block';
    document.getElementById('spoon').style.display = 'none';
}
