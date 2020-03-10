import React from 'react'
import {connect} from 'react-redux'
import {AuthRoute, ProtectedRoute} from '../util/RouteUtil';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBarContainer from './navbar/NavBarContainer';
import UserShow from './users/UserShowContainer';
import UserEdit from './users/UserEditContainer';
import ImageSlideIndex from './slider/ImageSlideIndex';
import BakeryIndex from './bakeries/BakeryIndexContainer';
import BakeryShow from './bakeries/BakeryShowContainer';
import MenuItemShow from './menu/MenuItemShowContainer';
import HomeSplash from './home/HomeSplashContainer';
import Modal from './modals/Modal';
import Hamburger from "./modals/Hamburger";
import {closeHamburger} from "../actions/hamburger";

const App = ({location, hamburger, closeHamburger}) => (
  <div className={`App ${hamburger ? "slide-out" : ""}`}>
      <div dangerouslySetInnerHTML={{__html:
      `<svg xmlns="http://www.w3.org/2000/svg" style="height:0;width:0;position:absolute">
          <clipPath id="ui-solid-stars-clip-path">
              <use x="0" xlink:href="#ui-solid-star"></use>
              <use x="28" xlink:href="#ui-solid-star"></use>
              <use x="56" xlink:href="#ui-solid-star"></use>
              <use x="84" xlink:href="#ui-solid-star"></use>
              <use x="112" xlink:href="#ui-solid-star"></use>
          </clipPath>
          <defs>
              <path id="ui-solid-star" d="m20.0001,7.82936q0,0.26443 -0.31251,0.57693l-4.363,4.25483l1.03366,6.00964l0.01202,0.24039q0,0.2524 -0.12019,0.43269t-0.3726,0.16827q-0.22837,0 -0.48077,-0.14423l-5.39666,-2.83655l-5.39667,2.83655q-0.26442,0.14423 -0.48077,0.14423q-0.2524,0 -0.3726,-0.16827t-0.13221,-0.43269l0.02404,-0.24039l1.03366,-6.00964l-4.37502,-4.25483q-0.30048,-0.32452 -0.30048,-0.57693q0,-0.44471 0.67308,-0.55288l6.03368,-0.87741l2.70434,-5.46878q0.22837,-0.49279 0.58895,-0.49279t0.58894,0.49279l2.70434,5.46878l6.03368,0.87741q0.67308,0.10817 0.67308,0.55288l0.00001,0z"></path>
              <g id="stars-0">
                  <rect fill="url(#empty-star)" height="100%" width="100%"></rect>
              </g>
              <g id="stars-0.5">
                  <rect fill="url(#half-star)" x="-80%" height="100%" width="100%"></rect>
                  <rect fill="url(#empty-star)" height="100%" width="100%"></rect>
              </g>
              <g id="stars-1">
                  <rect fill="url(#empty-star)" height="100%" width="100%"></rect>
                  <rect fill="url(#full-star)" x="-80%" height="100%" width="100%"></rect>
              </g>
              <g id="stars-1.5">
                  <rect fill="url(#full-star)" x="-80%" height="100%" width="100%"></rect>
                  <rect fill="url(#half-star)" x="-60%" height="100%" width="100%"></rect>
                  <rect fill="url(#empty-star)" x="40%" height="100%" width="100%"></rect>
              </g>
              <g id="stars-2">
                  <rect fill="url(#empty-star)" height="100%" width="100%"></rect>
                  <rect fill="url(#full-star)" x="-60%" height="100%" width="100%"></rect>
              </g>
              <g id="stars-2.5">
                  <rect fill="url(#full-star)" x="-60%" height="100%" width="100%"></rect>
                  <rect fill="url(#half-star)" x="-40%" height="100%" width="100%"></rect>
                  <rect fill="url(#empty-star)" x="60%" height="100%" width="100%"></rect>
              </g>
              <g id="stars-3">
                  <rect fill="url(#empty-star)" height="100%" width="100%"></rect>
                  <rect fill="url(#full-star)" x="-40%" height="100%" width="100%"></rect>
              </g>
              <g id="stars-3.5">
                  <rect fill="url(#full-star)" x="-40%" height="100%" width="100%"></rect>
                  <rect fill="url(#half-star)" x="-20%" height="100%" width="100%"></rect>
                  <rect fill="url(#empty-star)" x="80%" height="100%" width="100%"></rect>
              </g>
              <g id="stars-4">
                  <rect fill="url(#empty-star)" height="100%" width="100%"></rect>
                  <rect fill="url(#full-star)" x="-20%" height="100%" width="100%"></rect>
              </g>
              <g id="stars-4.5">
                  <rect fill="url(#full-star)" x="-20%" height="100%" width="100%"></rect>
                  <rect fill="url(#half-star)" height="100%" width="100%"></rect>
                  <rect fill="url(#empty-star)" x="100%" height="100%" width="100%"></rect>
              </g>
              <g id="stars-5">
                  <rect fill="url(#full-star)" height="100%" width="100%"></rect>
              </g>
              <pattern patternUnits="objectBoundingBox" width="20%" viewBox="0 0 1792 1792" height="100%" id="full-star">
                  <path fill="#F9AE19" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
              </pattern>
              <pattern patternUnits="objectBoundingBox" width="20%" viewBox="0 0 1792 1792" height="100%" id="half-star">
                  <path fill="#F9AE19" d="M1250 957l257-250-356-52-66-10-30-60-159-322v963l59 31 318 168-60-355-12-66zm452-262l-363 354 86 500q5 33-6 51.5t-34 18.5q-17 0-40-12l-449-236-449 236q-23 12-40 12-23 0-34-18.5t-6-51.5l86-500-364-354q-32-32-23-59.5t54-34.5l502-73 225-455q20-41 49-41 28 0 49 41l225 455 502 73q45 7 54 34.5t-24 59.5z"></path>
              </pattern>
              <pattern patternUnits="objectBoundingBox" width="20%" viewBox="0 0 1792 1792" height="100%" id="empty-star">
                  <path fill="#F9AE19" d="M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
              </pattern>
              <g id="mapBackground1Fill">
                  <path d="M-56 142h321V-38H-56"></path>
              </g>
              <g id="mapBackground1Accent">
                  <path d="M16 5L2 17l-5-7L14-3m44 75l8 9 7-1-10-12m57-25l7 7-7 6-6-7m16-49l2 17 16-2-3-18m-2 72l7 7s6-3 5-4l-6-7-6 4zM28 17l17 20-15 13-17-20"></path>
              </g>
              <g id="mapBackground1Rest">
                  <path fill="#FFF" d="M-3 116l-7-3L58-47c7-15 20-33 21-34l6 5S71-58 65-44L-3 116m219-17L109 17-6-38l-48-6 1-5 48 6 116 55 108 83m-92 0l-2-5 107-36 1 5m-122 42l-3-95-12-87 5-1 12 88 3 94m65 7V74L163-77l5-1 18 152v33"></path>
                  <path d="M144 83l-2-2 25-21 2 2m-31 15l-2-2 24-22 2 2m-30 15l-2-2 24-20 2 2m-29 13l-2-2 21-18 2 2m-26 12l-2-2 15-16 2 2m-22 9l-2-2 18-16 2 2m-19 4l-2-3 11-10 2 2m-30 0l-2-2 16-12 2 3m-22 4l-2-2 12-9 2 3M41 31l-2-3L71 2l1 2M30 52l-2-3 16-13L78 8l1 3-33 28M3 85l-2-2 48-40 34-27 2 2-34 27M10 93l-2-3 49-39 32-29 2 2-32 29m6 6l-2-2 33-27 2 2M50 80l-2-2 18-15 35-29 9-8 2 2-9 8v1L68 65m5 6l-2-2 35-28 2 2M79 78l-2-2 33-28 2 3M84 85l-2-2 29-22 2 2M18 94l-2-3 45-33 2 3-45 33M-9 63l-2-2L0 51l2 2m-6 17l-2-3 16-13 1 2M3 76l-3-1 22-32 3 1m11-19l-2-3L49 9l2 2m58-8L53-22l1-3 56 25 121-15 1 3M161 5V2l72-8v3M116 20v-2L239 3v3m-76 17v-3h14v2m-13 9v-3l73-8v2m-71 27v-3l31-4v3l-31 4m-16-8v-3l14-1 75-9v3l-75 8-14 2m17 14l-1-3h14v3m2 8v-3l17-2v3l-17 2m-71 18L36-5l2-2 75 86m32 8l-34-39L66-2l2-2 45 50 34 39m19-4l-37-49 2-2 37 49M-41 31l-2-2L3-9l2 2m-37 45l-2-2L11-4l2 2m-40 48l-2-2L27-7l2 2m-50 56l-3-2 7-8 39-31 2 2-39 31m30-13l-2-2 14-11 2 2m-43 39l-3-2 8-10 20-16 2 2-20 16M93 6l-3-1 14-36 3 2m-2 40l-3-1 5-17 3 1m90 73L181-59l-1-20 3-1 1 20 18 127m-36-9L148-83h3l18 141m-19-11L132-81h3l18 127m-21-13L119-82h3l13 115M13 58l-30-15-17-19-9-24 4-42h3l-5 42 9 22 17 19 30 15-2 2m70 41l-3-14L6-7l4-3 75 93 3 14-5 2zm-37-4V72L-20-5l4-4 67 79 1 25m192-15l-4-2h-1v-7c-3-9-11-18-17-23-6-6-11-14-14-26a330 330 0 0 1-10-73l-10-28 5-2 9 29s0 19 3 40c4 28 11 47 20 56 11 9 17 18 19 26 2 6 0 10 0 10M-50 5l-2-5 19-6 22-7 86 8-1 5-85-8-39 13M0 97l-1-20-40-41c-3-2-7-8-10-19l-5-15-1-45 13-41 5 2-13 40 1 43 4 14c5 13 8 16 9 17 7 5 38 38 41 42h1l1 23H0z" fill="#FFF"></path>
                  <path fill="#FFF" d="M-3 116l-7-3L58-47c7-15 20-33 21-34l6 5S71-58 65-44L-3 116"></path>
              </g>
              <path id="mapBackground2Fill" class="map-background-2-fill" d="M-9 100.45h231.16V-29.6H-9"></path>
              <path id="mapBackground2Accent" d="M155.63-17.2l-7.7 14.48 18.43 10.97 6.07-9.8s-.7-.94-4.43-1.64c-3.74-.7-4.44 1.7-6.77-1.8-2.33-3.5-2.33-9.8-5.6-12.1m-59.7 31c.46-.9 2.32-4.2 2.32-4.2l8.87 4.9-2.8 5.2-8.4-5.82zm90.67 55.5l-4.84 12.3L167.3 75l4.66-11.43M-9.27-23.9l44.3 27.8 12.15-18.3-21.7-13.3m-11.2 63.74L10.55 33 5.2 42.13l4.2 3.27m106.58 17.74l7 3.03 2.8-7.94-7.47-3.27M89.7 28.8l-30.6 78.94-8.18-2.33L82.9 25.3"></path>
              <g id="mapBackground2Rest">
                  <path fill="#fff" d="m 78.73,-20.85 -23.13,83.27 -21.86,53.32 5.4,2.22 22,-53.64 23.04,-83.02 6.6,-12.8 -5.17,-2.7 M -29,-31.3 33.74,7.47 l 0.2,0.12 179.13,73.6 2.22,-5.4 L 36.6,2.3 -25.94,-36.3"></path>
                  <path fill="#FFF" d="m 74.15,92.73 -2.15,-0.9 7.53,-17.7 2.14,0.9 m 99.47,40.54 -16.54,-8.02 -54.26,-22.36 -51.9,-18.5 -27.62,-14.1 2.65,-5.2 27.3,13.9 51.66,18.3 0.07,0 54.48,22.43 0.08,0.02 16.62,8.04 M 81.32,68.9 79.18,68 94.75,31.4 l 2.14,0.9 m 58.67,53.52 -57.4,-23.3 -25.53,-10.68 0.9,-2.15 25.53,10.6 57.37,23.3 m -3.71,13.81 -2.2,-0.8 13.3,-36.6 2.2,0.8 m -6.3,12.05 -7.85,-3.5 -33.94,-13.66 -40.06,-16.9 0.9,-2.2 40.06,16.8 33.95,13.61 7.9,3.5 m 24.92,-1.73 -0.04,0.05 -15.07,35.78 2.1,0.9 15,-35.66 30.8,-56.12 -2.1,-1.13 m -92.1,27.2 -38.39,-20.49 1.1,-2.06 38.5,20.55 m 19.8,57 -2.2,-0.79 12.94,-36.6 2.2,0.77 m -27.47,30.33 -2.18,-0.83 13.8,-36.6 2.2,0.82 m -20.7,33.4 -2.2,-0.9 15.2,-37 2.1,0.9 M 110.05,81 l -2.2,-0.8 14,-37.13 2.2,0.83 m -29.2,29.8 -2.16,-0.9 15.3,-36 2.17,0.9 m 77.81,28.56 -99.6,-54.18 1.1,-2.05 99.6,54.18 m 22.46,4.4 L 93.73,4.4 94.85,2.35 212.65,66.59 m -2.52,-7.3 -113.15,-61.69 0,-0.02 -47.78,-27.95 1.18,-2.02 47.75,28 113.1,61.7 m 2.15,-4.2 -112.88,-62.91 -43.2,-23 1.1,-2.06 43.22,22.94 112.9,62.82 M 214.3,45 104.25,-16.64 82,-27.88 l 1.05,-2.1 22.3,11.28 110.1,61.66 M 212,34.5 107.72,-22.96 108.84,-25 213.1,32.45 M 48.26,117.27 46.09,116.42 80.8,26.7 l 0.03,-0.06 26.8,-52.78 2.1,1.06 L 83,27.64 m 84.4,31.4 -2.05,-1.14 42.9,-77.77 2.06,1.13 m -63.4,68.87 -2,-1.1 40.8,-77.53 2.1,1.1 m -62.6,68.9 -2,-1.1 38.7,-71.46 2.06,1.1 m -58.1,63.3 -2,-1.12 34.8,-62.8 2.07,1.13 M -22,76.14 -23.9,74.78 1.07,39.96 25.72,-0.8 27.72,0.4 3.02,41.25 3,41.29 m -26.08,19.9 -1.86,-1.4 18.17,-23.9 26.2,-40.6 1.97,1.3 -26.26,40.6 m -17.3,10.1 -1.94,-1.29 37.6,-55.1 1.94,1.32 m -34.5,37.98 -1.9,-1.33 19.1,-27.8 1.9,1.3 m 73.12,0.53 -46.7,-29.1 1.23,-2 46.71,29.13 m 18.72,2.85 -51.25,-30.48 1.2,-2 51.23,30.47 m -59.5,101.83 -2.15,-0.93 14.7,-34.15 2.13,0.92 M 28.84,99.57 26.7,98.63 41.75,64.48 l 2.13,0.94 m -23.8,31.03 -2.1,-1 16.6,-35.2 2.12,1 m 174.5,-35.4 -40.06,-24 1.2,-2 40.06,24 m 1.55,-5.55 C 211.9,16.9 175.15,-6 174.8,-6.23 L 176,-8.2 c 1.52,0.95 37.13,23.15 39.22,24.54 l -1.3,1.95 z m -124.7,-5.78 -14.52,-9.1 1.24,-2 14.52,9.12 m -26.67,28.14 -27.7,-13.5 -0.04,-0.05 -40.76,-25.4 -22.75,-14.36 1.25,-1.97 22.74,14.36 40.7,25.36 27.58,13.46 M 61.98,77.5 52.7,71.9 21.24,53.2 7.4,45.64 7.37,45.62 -15.3,31.07 c -3.64,-0.27 -9.28,-0.68 -9.76,-0.68 l 0,-2.39 c 0.72,0 9.26,0.63 10.23,0.7 l 0.3,0.02 23.13,14.92 13.82,7.52 31.48,18.74 9.28,5.6 -1.2,2 z m -11.76,-18.3 -2.2,-0.76 14.16,-41.16 2.2,0.76 m -86.73,77 -1.92,-1.33 L -9.6,72.6 33.27,5.3 69.8,-53.9 l 2,1.24 -36.57,59.22 -42.87,67.27 -0.02,0.02 m -7.34,37.3 -1.93,-1.3 L 21.17,52.98 42.32,9.9 70,-32.2 l 1.95,1.3 -27.6,41.96 -21.16,43.1 -0.1,0.06 M -5,112.85 -6.98,111.63 26.92,56.66 50.9,11.5 52.96,12.6 28.98,57.83 M 42.8,111.9 14.3,99.05 1,85.03 -24.84,60.56 l 4,-4.24 25.97,24.58 0.06,0.06 12.51,13.24 27.47,12.38"></path>
              </g>
              <path id="mapBackground3Fill" d="M-41 146h262V-2H-41"></path>
              <path id="mapBackground3Accent" d="M1 43v-5h12v6L1 43zm55-31v17h7V12m4 3v14h4l1-14m48-11l1 15h-9V5m10 58l-1 6 6-1v-5h-6zm53-31l-7 1v5h8l-1-6zm1 9h-7v5h7m9-51l1 13 24-1V-6M44 70h8v9h-8"></path>
              <path fill="#fff" id="mapBackground3Rest" d="M113-21h-4v55l-2-1-6-2-6-2c-5-3-13-6-24-9l-22-2-3-23v-14h-4v37l-11 1-87 8 1 7a11139 11139 0 0 0 97-9v9h-8l-1 2 1 1h8v19H32l-1 1 1 1h10v20l-26 1 3-7 6 1v1l1 1 1-1v-1h5l1-1-1-2h-5V60v-1h-7V45l5-1 1-1V32l-1-1h-1l-1 1v10l-5 1-34-1-1-6 6-1 8-1 3-2v-2h-2l-2 1a203 203 0 0 1-15 2v11l2 1h35v3H4l-1 1v6l-5-1-1 2 1 1h5v11h-5l-1 1 1 2h5v8h-20l-36 1-6 1v4l54-2c4 1 9 2 14 5l-3 6c-2 6-2 10 0 13 3 5 6 8 13 10 5 3 8 5 12 11 2 4 6 8 10 11v19h4v-6h1l4-8a67 67 0 0 0 11 4l2-1-1-1-11-4c8-15 9-23 10-30h8c6 0 12 0 15-3v-9l-1-5 17-10 10-3v83h4V81l11-1v19s2 9 9 12c-3 7-3 14-3 21v20l1 2 1-1 1-1v-20c0-7 0-13 2-21l8 1h7l1-2-2-1h-13l3-6c5-9 6-19 5-23l29-1 1 71h7V79l68-2v-4l-24 1v-1l-44 2V63a335 335 0 0 0 55 10h-1 6v-8h-1c-7 1-23 1-59-9l-1-67h-7v65l-9-3-20-6V-4l-1-1-1 1v2c-3 0-12 0-19 2l-11 3v-24zM70-6l-1 1v3h-3v-3l-1-1-2 1v3h-2v-3l-1-1-2 1v3h-3v-2l-1-1-1 1-1 2h-3l-1 2 1 1h9v2l2 1 1-1V1h2l1 4 1 2 1-2V1h3v8l2 1 1-1V7h3l1-1-1-2h-3V1h2l1-1-1-2h-2v-3l-2-1zm144 0h-1l-1 1 1 13h-6c-6 0-9 1-11 3l-2 5 1 1h-5v-6l-2-1-1 1v18l1 2v-1l2-1V19h5l2 2-4 9 1 1 1-1 1-1h3v3l2 1 1-1v-2h1l10-2h1l1-1-2-1h-1c-1 0-7 2-15 1l2-4h30l1-1-1-2h-20c-8 1-12 1-12-5l1-2c2-3 12-3 16-3h1V-5l-1-1zM28-6l-2 1 1 5 1 1h4V0h7l1-1-1-1-8-1-1 1v1h-1v-4l-1-1zm70 0l-1 1v5a1 1 0 0 0 0 1v14h-7L89-4c0-1 0-2-1-1l-1 1v4l-6 1-1 1a557 557 0 0 0 2 15h15v4l2 1 1-1v-4l4 1v5l2 1 1-1v-7l-1-1h-6V9h6l1-1-1-1h-6V2h6l1-2-1-1h-6v-4l-2-1zm61 0l-1 2v24l1 2 2-2V-4l-2-2zM15-6l-1 2-1 8v10l1 1v-1h10V8l-1-2h-7V1h7l2-1-2-1h-6v-3l-1-2h-1zM2-3L-8-2l-1 1v11l1 1 1-1V0h7v10l-2-1-1 1 1 2 10 1 2-1-2-2H3V-1v-1L2-3zm141 3v13h-9l-1 1-1 1h-4V9h12l1-2-1-1h-18V4l4-1c5-2 14-3 17-3zM87 2v13h-4V3l4-1zm32 3v3l1 18h-1a1 1 0 0 0 0 3h15l1-2V16h8v29l-29-10-1-29 6-1zM16 9h6v3h-6V9zm106 0h4v6h-4V9zm0 8h4v9h-4v-9zm6 0h4v9h-3l-1-9zm-82 8l3 13 5 18h-8V25zm4 0c20 1 33 7 43 11l6 2 5 2 5 2v19h-7l1-8-1-1-15-5-2 1-3 10-10-2V42v-1c-1 0-2-4-10-3-3 0-4 2-4 6v3l2 2 9 1v5l-11 1a1251 1251 0 0 0-8-31zm13 15c4 0 5 1 6 2v5h-8l-1-2v-3l2-2h1zm51 3l29 9v7c-5-2-18-7-22-7h-7v-9zm-27 7l13 4-1 7-15-3 3-8zm-69 0l-1 10v9a31 31 0 0 1-2-1h-4v-4h4l1-1-1-2h-4v-5l-1-1H6v-4l12-1zm127 3l18 5 11 3v14h-29V62v-9zm-31 1a127 127 0 0 1 11 2v5h-11v-7zm14 2l15 6v14h-14-1V64v-1-7zM6 57h3L8 68H6V57zm64 1l29 6-1 9H80l-1 1v3l-19 1-1-18v-2h11zm-15 0v2l1 18H46V58h9zm-30 4v8l-5-1v-7h5zm100 2v12h-11V64h11zm-24 0h8l1 12-9 1V64zM6 71h2v5l2 3H6v-8zm5 0h5l-3 8-2-4v-4zm87 4v2H81v-1l17-1zm45 5c0 3 0 13-5 22l-3 6c-6-2-7-9-7-9V80h15zm-43 1l-2 1-16 9-1-10h19zm-22 0l2 11h-4l-16 1V82l18-1zm-22 1v11l-10 1V82h10zm-14 0l-1 12c-4 0-17-4-27-9h-1v-1l1-1 28-1zm-31 1v1l-2-1h2zm0 6h1c11 5 25 9 29 9v38l-8-9c-4-7-7-10-13-12-6-3-9-5-12-10-1-2-1-5 1-10l2-6zm69 6l2 6v6c-2 2-7 2-13 2h-8a148 148 0 0 0-1-12 940 940 0 0 0 20-2zm-24 2v7c1 6 1 10-1 17l-7 19-3-1 1-41 10-1zm-11 45h1l-1 3v-3z"></path>
              <path id="mapBackground4Fill" d="M -2 92 L 216 92 L 216 -27 L -2 -27 Z"></path>
              <path id="mapBackground4Accent" d="M42 24l10 5 5 4-1 3h-6l-5 8-12-6-1-1 3-6 5-7zm18 10l3-6 3-2 4 2-4 9-6-3zm48 6l-2 4-5-2 1-4m63 6h-13l-6 10 7 4h13V44l-1-1zm-5-63l-2 50 7 1 3-42-1-14c0-3-8 4-8 4M37 65H21v-9h9l7 5"></path>
              <g id="mapBackground4Rest">
                  <path fill="#FFF" d="M94 96c-2 0-8-5-10-6l1-1 9 6v1zM41 23L9 6-1 0l11-22 4-9 2 1-4 8L1-1l9 5 32 17m-1 86l-1-1 69-141h2m90 52l-17-5 1-2 16 5h11v2h-11zm-2 76c-1-4 0-7 1-10 4-5 11-7 11-7v2-1 1l-7 3c-4 3-6 7-4 12h-2zM74 96h-2v-8l8-12 1 1-7 12m11 5l-2-1 4-12h2m96 16h-2l1-12 27-15 1 2-26 14m-6-37h-2l12-23 2 1m-8-12h-2l1-4 12-40 2 1-12 39m-28 64l-33-16v-2l33 16m1-5l-16-8 1-2 16 8-1 2zm-22 28l-25-15 1-2 23 14 5-8-24-14 1-2 26 15m62-9l-13-18-53-28 1-1 54 28 12 18M10 90H-9v-2h19m4-7l-28-1v-2l28 1m1-7l-24-1v-2h24m-23-3v-1h23v2m23 18H21l-1-7h18v2H22v3h16M24 96l-1-8h15l-1 2H25v6l-2 1zm29-16l-16-9 1-2 16 9-1 2zm-3 5l-12-7 1-2 12 8m104-5zm-1 2l-4-2-2-2-3 4-26-15 1-2 24 15 3-4h1l7 5 3-6V61l-29-13 1-2 29 13 1 15-1 4-2 2-1 1zM14 96l-3-7 5-12V61h-31v-2h33l-1 19-4 11 3 7m104-33l-11-6 3-5 1 1-2 4 10 5M11 61l-3-6-17-1v-1h19l3 7m104 10l-17-10 4-11 1 1-3 9 16 10M96 79h-1l-9-6 1-1 8 5 5-10-16-9 1-2 17 9-6 14zm5 6l-2-1 11-19 1 1m-76-7l-2-1 8-16 1 1m36 25l-14-8 1-1 13 8-1 2zm19 5L73 58l1-2 24 16M65 55L33 39v-2l5 2 11 6 17 9-1 1zm77 6l-16-8-12-6v-1l3-6 2 1-2 5 11 5 15 7 3-5 1 1-3 7zm-20-3L99 48l1-2 23 10-1 2zM46 45l-1-1 5-9h5l2-2h2l-1 5-5-1m76 10l-17-8 1-2 17 8-1 2zm-21 4l-2-1 11-23 1 1h1l-11 23m30-21l-25-13-15-8 1-2 15 8 24 13m-30-1l-8-4-7-3 1-2 7 4 8 3m26 10l-24-11 1-2 25 11m-4 8l-17-8-7-3 1-2 7 4 17 8M26 54h-1l-1-2 4-11 8-14 8-10 19-38 10-16 2-1 1 3-11 16-18 38h-1l-8 11c-2 2-7 15-10 23l-1 1m204-14L151 0l-34-17-33-17 2-2 33 17 33 16 80 40M70 66l-2-1 10-19 9-16 20-41 2 1-20 41-9 16m-2 24l-2-1 5-8 6-12 8-16 10-23 10-19 2 1-10 19-10 22-8 17-7 12m3 13l-2-1 11-20 8-18 11-21 6-12 4-8 2 1-4 8-6 12-10 20-8 18m46-34l-12-11 1-1 12 10m-20 2l-2-1 5-12 2 1M74 22l-2-1 23-49 1 1M34 33L12 22l1-2 22 12m75 9L79 27 49 12l1-2 29 16 31 14-1 1zM51 28h-2L61 2l11-22 2 1L63 3m8 39L44 25v-1l29 17m34 71h-2V92l44-83 1 1-43 83M1 25H0l20-42h1M9 31l-2-1 21-43 2 1M18 35h-2l9-21L37-9l2 1-12 23m-1 25l-2-1 10-22L44-5l2 1-10 22m21 15l-1-1L69 6l18-36 1 1L70 7m159 37l-59-27c-2 0-8-1-26-9L99-15l1-1 45 22a138 138 0 0 0 25 9l60 28v2zM85 15l-98-47 1-2 97 48m-48 95V63l-12-9 1-2 13 10v47"></path>
                  <path fill="#FFF" d="M119 104A910 910 0 0 0-2 29l-15-10 4-5s23 18 48 29c10 5 28 16 53 33l34 23-3 5z"></path>
              </g>
              <path id="mapBackground5Fill" d="M -2 92 L 216 92 L 216 -27 L -2 -27 Z"></path>
              <path id="mapBackground5Accent" d="M21-6s0 4-4 5l-3 9h20l1-6s3-8 1-8H21m-4 33s11-2 16 0l-4 6-12 1v-5zm164 26l11 5-6 23-17-11 12-7v-9m-35-79l-4 35c1 0 42 2 43 1 1 0 7-20 6-34l-45-2z"></path>
              <g id="mapBackground5Rest">
                  <path fill="#FFF" d="M130 105l-3-1 7-34 2-28 9-72h3l-9 73-2 28h-1"></path>
                  <path fill="#FFF" d="M24 108c0-1-6-22-9-47l-3-36c0-13 1-22 5-27v-1c6-7 8-11 10-15l1-10h6c0 5 0 8-2 12-1 4-4 8-10 16v1c-4 5-5 16-5 24l3 35 9 45-5 1zm106-3l-3-1 7-34 2-28 9-73 3 1-9 73-2 28h-1M3 55l-1-1 1-3 1-1v4l-1 1m45-28l-2-2-2-23 6-8h2l1 2-5 6 2 23-2 1m89 29l-1-1 1-1 15-11h1v1l-15 11h-1M53 80h-1l-1-2 3-8 5-6h2v2l-4 6-3 7-1 1m79 6L98 76l-1-2c0-1 1-2 2-1l33 10 1 2-2 1m81 3l-25-5-29-19V51l2-1 2 1v12l27 18 25 5c1 0 2 1 1 2l-1 1M102 52l-14-2-1-2 2-2 13 3 2 2-2 1M47 35l-11-2-1-1h1a249 249 0 0 0 12 2l-1 1m-12-8H22l-1-1 1-1c7-1 14 0 14 1l1 1h-1M10 57l-11-2-1-1 1-1 9 2v-2l1-1 1 1v4zm126 13h-1L74 58l-1-2 2-1 61 12 1 2-1 1m-74-4l-1-1v-2l2-3-8-65 1-2 2 2 8 66-2 4-1 1M15 98l-2-1-29-74h3s17 2 25-4c4-3 9-5 14-5 4 0 8 2 12 4 7 5 14 7 23 6v1l66 13 11 1 26 4 1 2-2 2-27-4-11-1-67-14c-5 0-10 0-14-2l-11-5c-6-5-15-4-22 1-6 4-16 5-22 5l-4-1 27 70-1 2m124-27l-1-1v-2l31-23c1-2 15-19 19-34 4-18 6-40 6-41l1-1 1 1c0 1-1 24-6 42-2 7-6 15-12 24l-9 11-31 24h-1m-63-4l-33-5-2-40 2-19 4-9h1v1l-4 9-2 18 2 39 32 5 1 1-1 1m148-28h-1l-31-27-46-1-27-5-27-6-47-7-1-2 1-2 47 8 28 6 26 5 47 1 32 27v3h-1M58 109l-1-2 15-52 4-27 18-65 2-1 1 2-18 65-3 27-16 52-1 1m7-90l-1-1v-8l-4-1 2-12 1-1 1 1-1 11h4l-1 10-1 1m14 53h-1l-9-4v-1h1l9 5v2h-1m43 10l-1-1 3-13h1l1 1-3 13-1 1M29 74l-1-1 1-1h7l-1 1-6 1m40-54l-9-2v-1l1-1 9 2 1 1-1 1m55 49l-1-1 3-29 1-1 1 1-3 29-1 1m-40 38h-1v-1l6-10 16-61 7-29 2-33 1-1 1 1-2 33-7 30-16 61-7 10M51 63l-2-1-3-35 2-2 1 1 3 35-2 2m-7-1l-1-1-2-36 1-1 1 1 3 36-1 1m34 34l-1-1 6-25h1v1l-7 25h-1m52-86l-1-1 2-33 1-1v1l-2 33h-1m82 0l-14-3-1-1 1-1 17 4 1 1h-1m2 8l-21-3v-1l1-1a487 487 0 0 1 23 4l-1 1M88 53v-1l1-4 9-10v-4h1l1 1-1 5-9 9-1 3-1 1M30 89l-1-1-5-31 1-1 1 1 5 31v1m186-21h-1l-36-19v-1l1-1 36 19v2m-89-28l-1-1 1-30 1-1 1 1-1 30-1 1m72 19h-1v-1l13-23h1l1 1-14 23v1m-7-30l-12-7v-1h1l12 7v1m11 17l-16-9-1-1 2-1 16 9v1l-1 1m-30 1l-1-1 12-21 1-1 1 2-12 21h-1m6 1h-1v-1l17-27h1l1 2-17 26h-1m-14 22h-1v-2l14-9V47l-13-2-1-1 1-1 15 1-1 15-14 9h-1m18 14l-35-2-13-9-1-2h2l12 9 35 2 1 1-1 1m-3-23l-15-2v-1l1-1 14 2 1 1-1 1m-22-24h-4l2-6h-3l-1-1 1-1h6l-2 6h2l1 1-1 1m20-7h-11l-1-1 1-1h11l1 1-1 1m-36 63h-11l-1-1 1-1h10l17-26 1-1 1 2-18 27zm17 12l-1-1 1-26 1-1 1 1-1 26h-1m7 1l-1-1 1-55 1-1 1 1-1 55-1 1m-8-69zm-1 12l-1-1v-6l1-6 3-4v-7l1-1 1 1v8l-3 4-1 11-1 1zm-8-8l-12-1-1-1 1-1 12 1 1 1-1 1m18-15l-28-1-1-1h1l28 1h1l-1 1m-5 23l-1-1 4-8 1-23 1-1 1 1-2 24-3 8-1 1m-13-2l-1-1v-7l3-14 1-10 1-1v11l-3 15v6l-1 1"></path>
              </g>
          </defs>
      </svg>`
      }}></div>
    {hamburger && <div className="overlay" onClick={closeHamburger}></div>}
    <NavBarContainer />
    {/*  */}
    <Modal/>
    <Switch>
      <Route path="/users/:username" component={UserShow}/>
      <ProtectedRoute path="/account/edit" component={UserEdit}/>
      <Route path="/:storeType/:storeSlug/menu/:menuItemSlug" component={MenuItemShow}/>
      <Route path="/:storeType/:storeSlug" component={BakeryShow}/>
      <Route path="/:storeType" component={BakeryIndex}/>
      <Route path="/" component={HomeSplash}/>
      {/* <Route path="/" render={() => <Redirect to="/bakeries" />}/> */}
    </Switch>
    
  </div>
);
const mapStateToProps = ({ui}) => ({
    hamburger: ui.hamburger
});
const mapDispatchToProps = (dispatch) => ({
    closeHamburger: () => dispatch(closeHamburger())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);