const buttons=document.getElementsByClassName("play-radio"),audios=document.getElementsByClassName("audio"),volumeControls=document.getElementsByClassName("volume-control");function pauseAllExcept(l){for(let e of audios)if(e!==l){e.pause();const l=Array.from(audios).indexOf(e);buttons[l].disabled||(buttons[l].innerHTML='<sl-icon id="icon" slot="prefix" name="play-circle-fill"></sl-icon> Play',volumeControls[l].style.display="none")}}for(let l=0;l<buttons.length;l++){const e=buttons[l],n=audios[l],o=volumeControls[l];e.addEventListener("click",(()=>{n.paused?(e.innerHTML='<sl-spinner style="--indicator-color: var(--sl-color-neutral-0); --track-color: var(--sl-color-neutral-300);"></sl-spinner>',pauseAllExcept(n),n.play().then((()=>{e.innerHTML='<sl-icon id="icon" slot="prefix" name="stop-circle-fill"></sl-icon> Stop',o.style.display="inline-block",n.volume=o.value/100})).catch((l=>{disableButton(e)})),o.addEventListener("input",(function(){n.volume=o.value/100}))):(n.pause(),e.innerHTML='<sl-icon id="icon" slot="prefix" name="play-circle-fill"></sl-icon> Play',o.style.display="none")})),n.onerror=function(){disableButton(e)}}function disableButton(l){l.innerHTML='<sl-icon slot="prefix" name="slash-circle"></sl-icon> Inactive',l.setAttribute("variant","default"),l.disabled=!0}