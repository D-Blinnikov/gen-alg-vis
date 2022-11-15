import { Html, OrbitControls, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import {algParams } from "../functions/AlgParams";
import { useInputStore } from "../store/useInputStore"
import {useSpaceStore} from "../store/useSpaceStore"
const THREE = require ('three')
import {labels, mats} from '../functions/service'
import createEqu from "../functions/createEqu";


const Space = ({disposedBalls, balls, session}) => {

    const state = useThree()
     
    const orbitControlRef = useRef();
    
    const textRef = useRef()

    //labels.map((_, i) => {labels[i] = useRef()})
    //mats.map((_, i) => {mats[i] = useRef()})

    labels[0] = useRef()
    labels[1] = useRef()
    labels[2] = useRef()
    labels[3] = useRef()
    labels[4] = useRef()

    mats[0] = useRef()
    mats[1] = useRef()
    mats[2] = useRef()
    mats[3] = useRef()
    mats[4] = useRef()

    const isClicked = useInputStore(state => state.isClicked)
    const setIsClicked = useInputStore(state => state.setIsClicked)
    let currentTimeLine = useSpaceStore(state => state.currentTimeLine)
    const setCurrentTimeLine = useSpaceStore(state => state.setCurrentTimeLine)
    const showCoord = useSpaceStore(state => state.showCoord)
    const clicks = useInputStore(state => state.clicks)
    const setClicks = useInputStore(state => state.setClicks)
    const inputRawString = useInputStore(state => state.inputRawString)
    const sol = useInputStore(state => state.solution)

    const size = 100;
    const divisions = 50;

    const gridHelper = new THREE.GridHelper(size, divisions);
    state.scene.add(gridHelper);
    
    useEffect(() => {

      textRef.current.position.set(3,3,3)
      
      labels.forEach(label => label.current.position.set(3,3,3))
      
      mats.forEach(mat => mat.current.opacity = 0)

      if(showCoord) {mats.forEach(mat => mat.current.opacity = 1)}

    });

    useFrame(() => {

      labels.forEach(label => 
        label.current.quaternion.copy(state.camera.quaternion))
        
        textRef.current.quaternion.copy(state.camera.quaternion)
    })

    function removePoints() {

      for (let l = 0; l < 6; l++) {
        
        state.scene.remove(disposedBalls[clicks - 1].balls[l])
        disposedBalls[clicks - 1].balls[l] = undefined
      }

    }

    const ballGeometry = new THREE.SphereGeometry(0.7, 64, 64)
    const ballMaterial = new THREE.MeshPhongMaterial({transparent: true,
      color: "#00008B"});

    const ballGeometrySol = new THREE.SphereGeometry(0.5, 64, 64)
    const ballMaterialSol = new THREE.MeshBasicMaterial({transparent: true,
      color : "#FF0000"});

      

    //---------------------- 
    async function clickHandler(sol) {
     

      if(!sol) return

      if(session) {
        
        const body = {
          equation : inputRawString,
          solution : sol.solution,
          iterations : sol.iterations,
          type : 'D',
          email : session.user.email
        }
        createEqu(body)
      }

      let timeline = gsap.timeline()
      setCurrentTimeLine(timeline)
      console.log('CURRENT TL:', currentTimeLine)
      
      const average = []

      for (let i = 0; i < sol.topSolutions.length; i++) {
        let x = 0
        let y = 0
        let z = 0

        for (let j = 0; j < algParams.top - 1; j++) {
          x = x + sol.topSolutions[i][j][0]
          y = y + sol.topSolutions[i][j][1]
          z = z + sol.topSolutions[i][j][2]
        }
        x = x / algParams.top - 1
        y = y / algParams.top - 1
        z = z / algParams.top - 1
        average.push([x,y,z])
      }

      
      if (clicks > 0){
        
        let tl = gsap.timeline({onComplete : removePoints})
        
        tl.to(disposedBalls[clicks - 1].balls[0].material, {opacity : 0, duration: 3,})
        tl.to(disposedBalls[clicks - 1].balls[5].material, {opacity : 0, duration: 3,}, "<")

        currentTimeLine.kill()
        
      }      
      
      //создание новых объектов
      //const balls = []
      disposedBalls.push({balls : [], clicks : clicks})
      for (let k = 0; k < algParams.top; k++) {
        
        // balls.push(new THREE.Mesh(ballGeometry, ballMaterial))
        balls[k] = new THREE.Mesh(ballGeometry, ballMaterial)
        
        state.scene.add(balls[k])
        
        disposedBalls[clicks].balls.push(balls[k])
        
        balls[k].add(labels[k].current)
        
      }
      
      const solution = new THREE.Mesh(ballGeometrySol, ballMaterialSol)
      disposedBalls[clicks].balls.push(solution)

      textRef.current.position.set(3,3,3)
    
      state.scene.add(solution)
      
      solution.add(textRef.current)
      
      textRef.current.text = `      Solution 
      (${sol.solution[0]}, ${sol.solution[1]}, ${sol.solution[2]})`
      
      const [a, b, c] = sol.solution
      
      solution.position.set(a,b,c)
      

      for (let i = 0; i < sol.topSolutions.length; i++) {

            let j = 0

            let [x, y, z] = sol.topSolutions[i][j]
            timeline.to(balls[0].position, { x : x, y : y, z : z, duration: 1,},)
            j++
            
             [x, y, z] = sol.topSolutions[i][j]
            timeline.to(balls[1].position, { x : x, y : y, z : z, duration: 1,}, "<")
            j++ 

             [x, y, z] = sol.topSolutions[i][j]
            timeline.to(balls[2].position, { x : x, y : y, z : z, duration: 1,}, "<")
            j++ 

             [x, y, z] = sol.topSolutions[i][j]
            timeline.to(balls[3].position, { x : x, y : y, z : z, duration: 1,}, "<")
            j++ 

            [x, y, z] = sol.topSolutions[i][j]
            timeline.to(balls[4].position, { x : x, y : y, z : z, duration: 1,}, "<")
            

           
            j = 0
            timeline.to(labels[0].current, {
              text : `(${sol.topSolutions[i][0][0]}, ${sol.topSolutions[i][0][1]}, ${sol.topSolutions[i][0][2]})`,
              duration: 1,
            }, "<")
            j++
            timeline.to(labels[1].current, {
              text : `(${sol.topSolutions[i][1][0]}, ${sol.topSolutions[i][1][1]}, ${sol.topSolutions[i][1][2]})`,
              duration: 1,
            }, "<")
            j++
            timeline.to(labels[2].current, {
              text : `(${sol.topSolutions[i][2][0]}, ${sol.topSolutions[i][2][1]}, ${sol.topSolutions[i][2][2]})`,
              duration: 1,
            }, "<")
            j++
            timeline.to(labels[3].current, {
              text : `(${sol.topSolutions[i][3][0]}, ${sol.topSolutions[i][3][1]}, ${sol.topSolutions[i][3][2]})`,
              duration: 1,
            }, "<")
            j++
            timeline.to(labels[4].current, {
              text : `(${sol.topSolutions[i][4][0]}, ${sol.topSolutions[i][4][1]}, ${sol.topSolutions[i][4][2]})`,
              duration: 1,
            }, "<")
            j++
            timeline.to(orbitControlRef.current.target, {
              x : average[i][0],
              y : average[i][1],
              z : average[i][2],
              duration: 2,
            }, "<")
            timeline.to(labels[4].position, {
              duration: 1.5,
            }, "<");   
      }

      setIsClicked()
      setClicks()
      console.log(clicks)
    
      
      console.log('disposedBalls: ',disposedBalls)
      console.log(state.scene.children)

    }

    useEffect(() => {
      if(isClicked){

        clickHandler(sol)
        
      }
    }, [isClicked]);

    return ( 
        <>

        <OrbitControls 
        ref = {orbitControlRef}
        target = {[0,0,0]}
        position = {[0,0,0]}/>

        <axesHelper args={[50]}/>

        <ambientLight />

        <directionalLight />

        <Text ref = {textRef} scale={10} color="red" anchorX="center" anchorY="middle"></Text>

        <Text  ref = {labels[0]}  scale={7} color="black" anchorX="center" anchorY="middle">
        <meshStandardMaterial ref = {mats[0]}/>
        </Text>
        <Text  ref = {labels[1]}   scale={7} color="black" anchorX="center" anchorY="middle">
        <meshStandardMaterial ref = {mats[1]}/>
        </Text>
        <Text  ref = {labels[2]}   scale={7} color="black" anchorX="center" anchorY="middle">
        <meshStandardMaterial ref = {mats[2]}/>
        </Text>
        <Text  ref = {labels[3]}   scale={7} color="black" anchorX="center" anchorY="middle">
        <meshStandardMaterial ref = {mats[3]}/>
        </Text>
        <Text  ref = {labels[4]}  scale={7} color="black" anchorX="center" anchorY="middle">
        <meshStandardMaterial ref = {mats[4]}/>
        </Text>
      
        </>
     );
}
 
export default Space;

