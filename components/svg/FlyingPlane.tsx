"use client";

import React from "react";
import { motion } from "motion/react";
import { useAuthSwap } from "@/contexts/AuthSwapContext";

export default function FlyingPlane() {
  const { isAnimating, isSwapping } = useAuthSwap();

  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="1200 0 2971.11 208.84"
      className={`absolute w-[300%] transition-transform duration-500 ease-in-out ${isSwapping ? "-scale-x-100" : "scale-x-100"}`}
    >
      <motion.g
        id="Cloud_1"
        animate={
          isAnimating
            ? {
                x: [1000, 3200],
                opacity: [1, 1, 0],
              }
            : undefined
        }
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
      >
        <path
          className="fill-gray-200"
          d="M1153.78,63.79c-2.73-13.81-14.91-24.23-29.53-24.23-11.61,0-21.65,6.59-26.69,16.2-12.09,1.28-21.5,11.53-21.5,23.96,0,13.31,10.78,24.09,24.09,24.09h52.2c11.09,0,20.08-8.99,20.08-20.08s-8.23-19.2-18.66-19.94h0ZM1152.36,95.78h-52.2c-8.86,0-16.06-7.2-16.06-16.06s7.2-16.06,16.06-16.06,16.06,7.2,16.06,16.06h8.03c0-11.09-7.49-20.38-17.67-23.19,4.04-5.4,10.45-8.93,17.67-8.93,12.18,0,22.09,9.9,22.09,22.09v2.01h6.02c6.65,0,12.05,5.4,12.05,12.05s-5.4,12.05-12.05,12.05h0ZM1152.36,95.78"
        />
      </motion.g>
      <motion.g
        id="Cloud_3"
        animate={
          isAnimating
            ? {
                x: [1300, 3200],
                opacity: [1, 1, 0],
              }
            : undefined
        }
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
      >
        <path
          className="fill-gray-200"
          d="M743.85,47.13c-2.73-13.81-14.91-24.23-29.53-24.23-11.61,0-21.65,6.59-26.69,16.2-12.09,1.28-21.5,11.53-21.5,23.96,0,13.31,10.78,24.09,24.09,24.09h52.2c11.09,0,20.08-8.99,20.08-20.08s-8.23-19.2-18.66-19.94h0ZM742.43,79.12h-52.2c-8.86,0-16.06-7.2-16.06-16.06s7.2-16.06,16.06-16.06,16.06,7.2,16.06,16.06h8.03c0-11.09-7.49-20.38-17.67-23.19,4.04-5.4,10.45-8.93,17.67-8.93,12.18,0,22.09,9.9,22.09,22.09v2.01h6.02c6.65,0,12.05,5.4,12.05,12.05s-5.4,12.05-12.05,12.05h0ZM742.43,79.12"
        />
      </motion.g>
      <motion.g
        id="Cloud_4"
        animate={
          isAnimating
            ? {
                x: [1400, 3200],
                opacity: [1, 1, 0],
              }
            : undefined
        }
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
      >
        <path
          className="fill-gray-200"
          d="M544.27,130.85c-2.73-13.81-14.91-24.23-29.53-24.23-11.61,0-21.65,6.59-26.69,16.2-12.09,1.28-21.5,11.53-21.5,23.96,0,13.31,10.78,24.09,24.09,24.09h52.2c11.09,0,20.08-8.99,20.08-20.08s-8.23-19.2-18.66-19.94h0ZM542.85,162.84h-52.2c-8.86,0-16.06-7.2-16.06-16.06s7.2-16.06,16.06-16.06,16.06,7.2,16.06,16.06h8.03c0-11.09-7.49-20.38-17.67-23.19,4.04-5.4,10.45-8.93,17.67-8.93,12.18,0,22.09,9.9,22.09,22.09v2.01h6.02c6.65,0,12.05,5.4,12.05,12.05s-5.4,12.05-12.05,12.05h0ZM542.85,162.84"
        />
      </motion.g>
      <motion.g
        id="Cloud_5"
        animate={
          isAnimating
            ? {
                x: [1700, 3200],
                opacity: [1, 1, 0],
              }
            : undefined
        }
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
      >
        <path
          className="fill-gray-200"
          d="M306.13,42.55c-2.73-13.81-14.91-24.23-29.53-24.23-11.61,0-21.65,6.59-26.69,16.2-12.09,1.28-21.5,11.53-21.5,23.96,0,13.31,10.78,24.09,24.09,24.09h52.2c11.09,0,20.08-8.99,20.08-20.08s-8.23-19.2-18.66-19.94h0ZM304.71,74.54h-52.2c-8.86,0-16.06-7.2-16.06-16.06s7.2-16.06,16.06-16.06,16.06,7.2,16.06,16.06h8.03c0-11.09-7.49-20.38-17.67-23.19,4.04-5.4,10.45-8.93,17.67-8.93,12.18,0,22.09,9.9,22.09,22.09v2.01h6.02c6.65,0,12.05,5.4,12.05,12.05s-5.4,12.05-12.05,12.05h0ZM304.71,74.54"
        />
      </motion.g>
      <g id="Plane">
        <path
          className="fill-green"
          d="M2471.63,116c0-13.72,18-22.61,25.35-25.64,1.51-6.42,7.17-19.11,29.34-19.11h40.48s49.96-69.2,49.96-69.2c.96-1.3,2.46-2.05,4.04-2.05h29.83c1.63-.05,3.18.68,4.17,2,1.01,1.45,1.17,3.37.41,4.97l-27.99,64.28h35.45s13.47-23.96,13.47-23.96c.88-1.56,2.53-2.54,4.32-2.54h29.83c2.75,0,4.97,2.23,4.97,4.97v22.64c-.03,34.16-27.74,61.87-61.9,61.9h-27.61s29.44,67.62,29.44,67.62c.68,1.56.52,3.31-.41,4.74-.91,1.4-2.49,2.23-4.17,2.23h-29.83c-1.58,0-3.08-.75-4.04-2.05l-52.34-72.54h-72.9c-5.08.34-10.08-1.42-13.83-4.87-3.75-3.47-5.95-8.29-6.06-13.39h0ZM2557.1,124.31l-4.97-7.02c-1.09-1.53-1.25-3.55-.39-5.21.85-1.66,2.57-2.69,4.43-2.69h55.78c1.99,0,3.78,1.17,4.58,2.98l4.97,11.94h31.88c28.67-.03,51.92-23.28,51.95-51.95v-17.66s-21.98,0-21.98,0l-13.47,23.95c-.88,1.59-2.53,2.54-4.32,2.54h-139.23c-12.04,0-16.81,4.63-18.64,8.31h18.64c2.75,0,4.97,2.23,4.97,4.97,0,2.75-2.23,4.97-4.97,4.97h-25.17c-7.46,2.98-19.58,9.94-19.58,16.55,0,7.82,8.31,8.31,9.94,8.31h65.58ZM2571.08,126.46l52.06,72.44h19.89s-29.58-67.62-29.58-67.62l-4.97-11.94h-42.37s4.97,7.02,4.97,7.02v.1ZM2616.58,71.25l26.65-61.3h-19.89s-44.26,61.3-44.26,61.3h37.5Z"
        />
        <path
          className="fill-green"
          d="M2551.19,89.51c2.75,0,4.97,2.23,4.97,4.97,0,2.75-2.23,4.97-4.97,4.97h-4.97c-2.75,0-4.97-2.23-4.97-4.97,0-2.75,2.23-4.97,4.97-4.97h4.97ZM2546.22,89.51"
        />
        <path
          className="fill-green"
          d="M2576.05,89.51c2.75,0,4.97,2.23,4.97,4.97,0,2.75-2.23,4.97-4.97,4.97h-4.97c-2.75,0-4.97-2.23-4.97-4.97,0-2.75,2.23-4.97,4.97-4.97h4.97ZM2571.08,89.51"
        />
        <path
          className="fill-green"
          d="M2600.91,89.51c2.75,0,4.97,2.23,4.97,4.97,0,2.75-2.23,4.97-4.97,4.97h-4.97c-2.75,0-4.97-2.23-4.97-4.97,0-2.75,2.23-4.97,4.97-4.97h4.97ZM2625.77,89.51c2.75,0,4.97,2.23,4.97,4.97,0,2.75-2.23,4.97-4.97,4.97h-4.97c-2.75,0-4.97-2.23-4.97-4.97,0-2.75,2.23-4.97,4.97-4.97h4.97ZM2650.64,89.51c2.75,0,4.97,2.23,4.97,4.97,0,2.75-2.23,4.97-4.97,4.97h-4.97c-2.75,0-4.97-2.23-4.97-4.97,0-2.75,2.23-4.97,4.97-4.97h4.97ZM2645.66,89.51"
        />
        <motion.rect
          className="fill-green"
          x="2726.71"
          y="80.05"
          width="172.6"
          height="5.73"
          rx=".5"
          ry=".5"
          animate={
            isAnimating
              ? {
                  x: [-50, 600],
                  opacity: [0, 1, 1],
                }
              : undefined
          }
          transition={{
            delay: 0.1,
            repeat: Infinity,
            duration: 0.5,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
        <motion.rect
          className="fill-green"
          x="2653.91"
          y="26.03"
          width="95.24"
          height="5.73"
          rx=".5"
          ry=".5"
          animate={
            isAnimating
              ? {
                  x: [-50, 600],
                  opacity: [0, 1, 1],
                }
              : undefined
          }
          transition={{
            repeat: Infinity,
            duration: 0.5,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
        <motion.rect
          className="fill-green"
          x="2655.55"
          y="172.8"
          width="172.6"
          height="5.73"
          rx=".5"
          ry=".5"
          animate={
            isAnimating
              ? {
                  x: [-50, 600],
                  opacity: [0, 1, 1],
                }
              : undefined
          }
          transition={{
            delay: 0.2,
            repeat: Infinity,
            duration: 0.5,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
        <motion.rect
          className="fill-green"
          x="2726.71"
          y="122.5"
          width="244.4"
          height="5.73"
          rx=".5"
          ry=".5"
          animate={
            isAnimating
              ? {
                  x: [-50, 600],
                  opacity: [0, 1, 1],
                }
              : undefined
          }
          transition={{
            delay: 0.3,
            repeat: Infinity,
            duration: 0.5,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
      </g>
      <motion.g
        id="Cloud_2"
        animate={
          isAnimating
            ? {
                x: [1000, 3200],
                opacity: [1, 1, 0],
              }
            : undefined
        }
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
      >
        <path
          className="fill-gray-200"
          d="M911.01,142.74c-2.73-13.81-14.91-24.23-29.53-24.23-11.61,0-21.65,6.59-26.69,16.2-12.09,1.28-21.5,11.53-21.5,23.96,0,13.31,10.78,24.09,24.09,24.09h52.2c11.09,0,20.08-8.99,20.08-20.08s-8.23-19.2-18.66-19.94h0ZM909.59,174.72h-52.2c-8.86,0-16.06-7.2-16.06-16.06s7.2-16.06,16.06-16.06,16.06,7.2,16.06,16.06h8.03c0-11.09-7.49-20.38-17.67-23.19,4.04-5.4,10.45-8.93,17.67-8.93,12.18,0,22.09,9.9,22.09,22.09v2.01h6.02c6.65,0,12.05,5.4,12.05,12.05s-5.4,12.05-12.05,12.05h0ZM909.59,174.72"
        />
      </motion.g>
      <motion.g
        id="Cloud_6"
        animate={
          isAnimating
            ? {
                x: [1800, 3200],
                opacity: [1, 1, 0],
              }
            : undefined
        }
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
      >
        <path
          className="fill-gray-200"
          d="M77.72,138.85c-2.73-13.81-14.91-24.23-29.53-24.23-11.61,0-21.65,6.59-26.69,16.2-12.09,1.28-21.5,11.53-21.5,23.96,0,13.31,10.78,24.09,24.09,24.09h52.2c11.09,0,20.08-8.99,20.08-20.08s-8.23-19.2-18.66-19.94h0ZM76.3,170.84H24.09c-8.86,0-16.06-7.2-16.06-16.06s7.2-16.06,16.06-16.06,16.06,7.2,16.06,16.06h8.03c0-11.09-7.49-20.38-17.67-23.19,4.04-5.4,10.45-8.93,17.67-8.93,12.18,0,22.09,9.9,22.09,22.09v2.01h6.02c6.65,0,12.05,5.4,12.05,12.05s-5.4,12.05-12.05,12.05h0ZM76.3,170.84"
        />
      </motion.g>
    </svg>
  );
}