---
title: "AdiClock 🕐"
subtitle: "The AdiClock is a simple 7 segments style mechanical clock. It automatically check the internet for the current time."
date: "2021-06-02"
---
The AdiClock is a project I worked on during the Adimaker foundation course. Our task was to create a clock that had the style of a 7-segment display. The catch was that we were not allowed to use LEDs for the segments. We decided to use tiny motors to move 3D printed parts to display the time.

![images/boot_animation](/images/boot_animation.gif)
The electronics consist of an ESP32 (Arduino with embedded wifi), 3 PCA9685 servo motor controllers and 35 SG90 servo motors.

The code and technical documentation is available on 👉 [GitHub](https://github.com/Redblockmasteur/AdiClock)

The AdiClock uses the Network Time Protocol to synchronise the time and uses built-in logic to adjust the time to the local time zone and even daylight saving time. See the project wiki for more information

The 3D modelling and rendering was done in Fusion 360.

See the AdiClock in action 👇

<div className="aspect-w-16 aspect-h-9">
  <iframe src="https://www.youtube-nocookie.com/embed/xy8PS3BDlX0?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
