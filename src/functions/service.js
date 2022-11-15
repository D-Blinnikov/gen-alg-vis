import { useRef } from "react"
import { PrismaClient } from "@prisma/client";

export const HEADER_TEXT  = 'Визуализация работы генетического алгоритма на примере решения линейных диофантовых уравнений с тремя неизвестными'

export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const textRef0 = undefined
  const textRef1 = undefined
  const textRef2  = undefined
  const textRef3 = undefined
  const textRef4 = undefined
  
  const matRef0 = undefined
  const matRef1 = undefined
  const matRef2 = undefined
  const matRef3 = undefined
  const matRef4 = undefined

  export const mats = [
    matRef0,
    matRef1,
    matRef2,
    matRef3,
    matRef4,
  ]

  export const labels = [
    textRef0,
    textRef1,
    textRef2,
    textRef3,
    textRef4
  ]

  export const randomEqus = [
    {
        lSide : '1x + 1y + 1z',
        rSide : "150"
    },
    {
        lSide : '-4x + 4y + 4z',
        rSide : "120"
    },
    {
        lSide : '-10x + 5y + 1z',
        rSide : "90"
    },
    {
        lSide : '-5x + 15y - 10z',
        rSide : "-45"
    },
    {
        lSide : '2x + 2y + 30z',
        rSide : "120"
    },
    {
        lSide : '-3x + 27y - 45z',
        rSide : "-81"
    },
    {
        lSide : '12x + 2y + 6z',
        rSide : "60"
    },
    {
        lSide : '-19x - 76y + 1z',
        rSide : "-114"
    },
    {
        lSide : '21x + 49y - 42z',
        rSide : "7"
    },
    {
        lSide : '8x + 1y + 1z',
        rSide : "-36"
    },
  ]