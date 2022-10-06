var hostbutton = document.createElement('div');
hostbutton.innerHTML = 'Start New Room';
var status = document.createElement('div');
status.id = 'status-container';

var main_container = document.createElement('DIV');
main_container.id = "panel";
var start_container = document.createElement('DIV');
var roomlabel = document.createElement('DIV');
var input = document.createElement('INPUT');
var letspartytitle = document.createElement('DIV');
var nameinput = document.createElement('INPUT');
var joinbutton = document.createElement('DIV');
var closeBtn = document.createElement('div');

hostbutton.id = 'host-btn';
main_container.classList.add('main-container');
start_container.classList.add('start-container');

letspartytitle.id = 'lets-party-title';
letspartytitle.innerHTML = "Let's Party! 📺 ";

roomlabel.id = 'room-label';
input.id = 'room-id-input';
nameinput.id = 'name-id';
nameinput.placeholder = 'Enter display name';
input.placeholder = 'Enter room Code';
joinbutton.id = 'join-btn';
closeBtn.id = 'close-btn';

roomlabel.innerHTML = `OR`;
joinbutton.innerHTML = `Join`;
closeBtn.innerHTML = '❌';

start_container.appendChild(letspartytitle);
start_container.appendChild(hostbutton);
start_container.appendChild(roomlabel);
start_container.appendChild(input);
start_container.appendChild(joinbutton);
// start_container.appendChild(status);

start_container.appendChild(nameinput);

main_container.appendChild(start_container);
main_container.appendChild(closeBtn);

document.querySelector('body').appendChild(main_container);
document.querySelector('body').style.width="80.5%";
// document.getElementsByClassName('pinning-header').style.width="80.5%";





