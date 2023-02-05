<script>
import ThreeJs from "@/components/ThreeJs.vue";
import CodeBlock from "@/components/CodeBlock.vue";
export default {
  components: {
    "three-js": ThreeJs,
    "code-block": CodeBlock,
  },
  data(){
    return{
      cubeMatrix: [
          new Array( Math.floor(Math.random()*8)+3),
          new Array( Math.floor(Math.random()*8)+3),
          new Array( Math.floor(Math.random()*8)+3),
          new Array( Math.floor(Math.random()*8)+3),
      ]
    }
  },
  mounted() {
    const speed = 3,
        maxFactor = 8,
        animationLimit = 600,
        wordsCount = 4;

    let words = [];
    for(let i = 0; i<wordsCount; i++){
      const e = document.querySelector(`[data-word="${i}"]`)
      words.push(e)
    }
    document.addEventListener('scroll', (e)=>{
      words.forEach((word)=>{
        for(let i = 0; i < word.dataset.letterCount; i++){
          word.children[i].style.transform = `translateY(-${(window.scrollY*(maxFactor - word.children[i].dataset.factor))/speed}%)`
          let color = document.querySelector(`div[data-color="color-${i}"]`)
          if(color){
            color.style.transform = `rotate(-20deg) translateY(-${(window.scrollY*(maxFactor - color.dataset.factor))/(speed*color.dataset.factor*2)}%)`
          }
        }
      })
    })
  }
}
</script>

<template>
  <main class="view-container">
    <div class="view-heading-container">
      <div class="title-container">
        <h2 data-word="0" data-letter-count="4">
          <b data-letter="0" data-factor="3">E</b>
          <b data-letter="1" data-factor="4">A</b>
          <b data-letter="2" data-factor="1">T</b>
          <b data-letter="3" data-factor="1">.</b>
        </h2>
        <h2 data-word="1" data-letter-count="6">
          <b data-letter="0" data-factor="1">S</b>
          <b data-letter="1" data-factor="4">L</b>
          <b data-letter="2" data-factor="5">E</b>
          <b data-letter="3" data-factor="1">E</b>
          <b data-letter="4" data-factor="2">P</b>
          <b data-letter="5" data-factor="3">.</b>
        </h2>
        <h2 data-word="2" data-letter-count="5">
          <b data-letter="0" data-factor="3">C</b>
          <b data-letter="1" data-factor="2">O</b>
          <b data-letter="2" data-factor="4">D</b>
          <b data-letter="3" data-factor="5">E</b>
          <b data-letter="4" data-factor="1">.</b>
        </h2>
        <h2 data-word="3" data-letter-count="7">
          <b data-letter="0" data-factor="4">R</b>
          <b data-letter="1" data-factor="5">E</b>
          <b data-letter="2" data-factor="1">P</b>
          <b data-letter="3" data-factor="2">E</b>
          <b data-letter="4" data-factor="6">A</b>
          <b data-letter="5" data-factor="3">T</b>
          <b data-letter="6" data-factor="5">.</b>
        </h2>
      </div>
    </div>
    <div class="section-transition" data-color-amount="4">
        <div data-color="color-0" data-factor="1.5"></div>
        <div data-color="color-1" data-factor="2"></div>
        <div data-color="color-2" data-factor="3"></div>
        <div data-color="color-3" data-factor="3.5"></div>
      </div>
    <div class="catching-phrase">
      <h2 class="phrase">
        <div class="word">
          <b>W</b>
          <b>e</b>
        </div>
        <div class="word">
          <b>a</b>
          <b>r</b>
          <b>e</b>
        </div>
        <div class="word">
          <b>e</b>
          <b>x</b>
          <b>p</b>
          <b>e</b>
          <b>r</b>
          <b>i</b>
          <b>e</b>
          <b>n</b>
          <b>c</b>
          <b>e</b>
        </div>
        <div class="word">
          <b>m</b>
          <b>a</b>
          <b>k</b>
          <b>e</b>
          <b>r</b>
        </div>
      </h2>
    </div>
    <div class="show-off">
      <div class="show-off-section">
        <h3>{{"<"}}We are developer.{{"/>"}}</h3>
        <code-block data-lines="15"></code-block>
      </div>
      <div class="show-off-section">
        <h3>{{"<"}}We are designer.{{"/>"}}</h3>
        <div class="interactive-ui">
          <div class="cube-row-container" v-for="(cubeline, idx) in cubeMatrix" :key="idx">
            <div class="cube" v-for="(cube, cubeIdx) in cubeMatrix[idx]" :key="cubeIdx">
              <div class="cube__face cube__face--front"></div>
              <div class="cube__face cube__face--right"></div>
              <div class="cube__face cube__face--top"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="show-off-section">
        <h3>{{"<"}}Our team{{"/>"}}</h3>
        <p>
          Experience the future of web design with our cutting-edge agency.<br>
          As leaders in modern web technology, we craft websites that not only look stunning, but also deliver exceptional user experiences.<br>
          With a focus on innovation and creativity, our team is dedicated to making your vision a reality and elevating your online presence to the next level.
          Let us be the makers of your online success.
        </p>
      </div>
      <div class="cta-section">
        <div class="centered-cta">
          <h3 class="cta-text">Hello World, our bootcamp is now available !</h3>
          <router-link to="/hello-world"><button class="cta">Join us !</button></router-link>
        </div>
      </div>
    </div>

    <div class="threejs-render-container fixed">
      <three-js></three-js>
    </div>
  </main>
</template>

<style scoped>

.interactive-ui{
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 1rem;
  margin-right: 3rem;
}

.cube-row-container{
  display: flex;
  flex-direction: row-reverse;
  gap:19.5px;
}

.cube-row-container:nth-child(odd){
  transform: translateX(34px);
}

.cube {
  --size: 50px;
  width: var(--size);
  height: var(--size);
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s;
  transform: translateZ(-50px) rotateY(-50deg) rotateX(-25deg) rotateZ(27deg);
}

.cube:hover .cube__face{
  background-color: var(--clr-accent);
  filter: hue-rotate(0);
  --animation-settings: 0ms ease-in-out;
  transition-delay: 0s;
}

.cube__face {
  --animation-settings: 1s ease-in-out;
  position: absolute;
  width: var(--size);
  height: var(--size);
  border: 1px solid black;
  background-color: var(--clr-text);
  line-height: var(--size);
  filter: hue-rotate(-180deg);
  transition: background-color var(--animation-settings), filter var(--animation-settings);
  transition-delay: .1s;
}

.cube__face--front  { transform: rotateY(  0deg) translateZ(calc(var(--size)/2)); }
.cube__face--right  { transform: rotateY( 90deg) translateZ(calc(var(--size)/2)); }
.cube__face--top    { transform: rotateX( 90deg) translateZ(calc(var(--size)/2)); }

.show-off-section{
  display: grid;
  gap: 1rem;
}

.show-off-section:nth-child(even){
  justify-items: flex-end;
}

.show-off{
  min-height: calc(100vh - 90px);
  background-color: var(--clr-background);
  padding: 3rem;
  padding-top: 120px;
  box-shadow: 0 -200px 500px #000;
  display: grid;
  row-gap: 2rem;
}

.view-heading-container{
  background-image: linear-gradient(90deg,var(--clr-background) 45%,transparent);
  padding: 30px 0;
  min-height: 110vh;
}
.threejs-render-container.fixed{
  position: fixed;
  inset: auto 0 0 0;
  z-index: -2;
}

.catching-phrase{
  display: grid;
  place-items: center;
  height: calc(100vh - 90px);
  padding-inline: 1rem;
}

.phrase{
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
}

.phrase .word{
  display: flex;
  flex-wrap: wrap;
  min-width: fit-content;
  gap: .25rem;
}

.phrase  b {
  --scaling-in-speed: 20ms;
  --scaling-out-speed: 1s;
  --color-trace-lenght: .5s;

  font-size: 60pt;
  transition: transform var(--scaling-out-speed) ease-in-out,
              filter var(--color-trace-lenght) ease-in-out,
              color calc(var(--color-trace-lenght) * 2) ease-in-out;
  filter: hue-rotate(-180deg) drop-shadow(0 10px 5px var(--clr-shadow));
}

.phrase  b:hover{
  --color-trace-lenght: 0s;
  transition: transform var(--scaling-in-speed) ease-in-out, filter var(--color-trace-lenght) ease-in-out, color var(--color-trace-lenght) ease-in-out;
  transform: scale(1.7);
  color: var(--clr-accent);
  filter: hue-rotate(0);
}

.section-transition{
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: 150px;
  width: calc(100vw - 10px);
  pointer-events: none;
  user-select: none;
  transform: translateY(-450px);
}

.section-transition > div{
  transform: rotate(-20deg);
  height: 100vh;
  width: 200vw;
}

.section-transition > [data-color=color-0]{
  background-color: var(--clr-accent);
  filter: hue-rotate(-180deg);
}
.section-transition > [data-color=color-1]{
  background-color: var(--clr-accent);
  filter: hue-rotate(-90deg);
}
.section-transition > [data-color=color-2]{
  background-color: var(--clr-text);
}
.section-transition > [data-color=color-3]{
  background-color: var(--clr-accent);
  height: 75vh;
}

.title-container{
  display: grid;
  grid-template-rows: repeat(4, 85pt);
  padding-left: 3rem;
}

.title-container h2{
  display: flex;
}

.title-container b{
  display: block;
  font-size: 75pt;
  cursor: default;
  user-select: none;
  filter: drop-shadow(0 7px 5px var(--clr-shadow));
}

.cta-section{
  display: grid;
  place-items: center;
  min-height: 90vh;
}

.centered-cta{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
}
</style>
